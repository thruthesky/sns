# Firebase 보안 규칙 (Security Rules) 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 Firebase Realtime Database와 Cloud Storage의 보안을 구현하는 데 필요한 지침과 전략을 제공합니다.

---

## 📋 목차

1. [왜 보안 규칙이 중요한가](#왜-보안-규칙이-중요한가)
2. [Firebase Security Rules 개요](#firebase-security-rules-개요)
3. [데이터베이스 보안 규칙](#데이터베이스-보안-규칙)
4. [인증 기반 접근 제어](#인증-기반-접근-제어)
5. [데이터 검증](#데이터-검증)
6. [보안 규칙 배포 및 테스트](#보안-규칙-배포-및-테스트)
7. [비용 최적화](#비용-최적화)

---

## 왜 보안 규칙이 중요한가

### 🚨 AppCheck의 비용 문제

Firebase AppCheck는 애플리케이션의 정당성을 검증하는 강력한 도구이지만, **매우 높은 비용**이 발생합니다:

- **웹 크롤러(Web Scrapers)**: 자동 데이터 수집 봇
- **JavaScript를 이해하는 악성 봇**: Selenium, Puppeteer 등을 사용한 자동화 공격
- **API 남용(Rate Limiting 우회)**: 대량의 요청을 통한 DoS 공격

이러한 악의적 접근이 AppCheck를 통과하면 **Firebase 사용량이 기하급수적으로 증가**하여 월 청구액이 급등할 수 있습니다.

### ✅ 해결 방법: 완전한 Security Rules

**AppCheck에만 의존하지 말고, 견고한 Firebase Security Rules를 구현해야 합니다.**

Security Rules는 다음을 보장합니다:

1. **데이터 접근 제어**: 인증된 사용자만 데이터 접근 가능
2. **권한 검증**: 사용자는 자신의 데이터만 수정 가능
3. **데이터 무결성**: 필드 검증을 통해 잘못된 데이터 입력 방지
4. **비용 절감**: 악의적 요청을 데이터베이스 레벨에서 차단하여 불필요한 비용 방지

---

## Firebase Security Rules 개요

### Security Rules의 구조

Firebase Realtime Database의 보안 규칙은 JSON 형식으로 작성되며, 다음과 같은 기본 구조를 가집니다:

```json
{
  "rules": {
    "경로": {
      ".read": "읽기 권한 조건",
      ".write": "쓰기 권한 조건",
      "자식경로": {
        ".read": "자식 읽기 권한",
        ".write": "자식 쓰기 권한"
      }
    }
  }
}
```

### 권한 조건 (Conditions)

**주요 변수와 함수:**

```javascript
{
  // 사용자 인증 정보
  "auth": {
    "uid": "사용자 고유 ID",
    "token": {
      "iss": "발급자",
      "email": "사용자 이메일",
      "email_verified": true/false,
      "phone_number": "사용자 전화번호",
      "firebase": {
        "identities": {},
        "sign_in_provider": "phone" // 또는 "password", "google.com" 등
      }
    }
  },

  // 현재 요청 정보
  "root": "데이터베이스 루트 참조",
  "now": 현재 타임스탬프 (밀리초),
  "data": "변경 전 데이터",
  "newData": "변경 후 데이터 (쓰기 작업)",

  // 경로 정보
  "$uid": "경로 파라미터"
}
```

**자주 사용하는 조건:**

```javascript
// 인증된 사용자
"auth != null"

// 특정 사용자만 접근
"auth.uid === $uid"

// 이메일 인증된 사용자
"auth.token.email_verified === true"

// 전화번호 인증된 사용자
"auth.token.firebase.sign_in_provider === 'phone'"

// 데이터 타입 검증
"newData.isString()"
"newData.isNumber()"
"newData.hasChildren(['title', 'content'])"

// 데이터 길이 검증
"newData.val().length > 0 && newData.val().length <= 1000"
```

---

## 데이터베이스 보안 규칙

### 게시판 데이터 보안 규칙

**경로 구조:**

```
/forum/
  {category}/
    posts/
      {postId}/
        uid: 작성자 UID
        title: 게시글 제목
        content: 게시글 내용
        author: 작성자 이름
        category: 카테고리
        createdAt: 작성 시간
        updatedAt: 수정 시간
```

**보안 규칙:**

```json
{
  "rules": {
    "forum": {
      // 게시판 읽기: 인증된 사용자만
      ".read": "auth != null",

      "{category}": {
        "posts": {
          // 게시글 목록 읽기
          ".read": "auth != null",

          "{postId}": {
            // 게시글 데이터 읽기
            ".read": "auth != null",

            // 게시글 쓰기: 작성자만 가능
            ".write": "root.child('forum').child(data.child('category').val()).child('posts').child($postId).child('uid').val() === auth.uid || !data.exists()",

            // 게시글 필드별 유효성 검사
            ".validate": "newData.hasChildren(['uid', 'title', 'content', 'author', 'category', 'createdAt', 'updatedAt'])",

            // 제목 필드: 1-500자
            "title": {
              ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 500"
            },

            // 내용 필드: 1-50000자
            "content": {
              ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 50000"
            },

            // 작성자 필드: 1-100자
            "author": {
              ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 100"
            },

            // UID 필드: 읽기만 가능, 변경 불가
            "uid": {
              ".validate": "newData.val() === auth.uid && newData.isString()"
            },

            // createdAt 필드: 처음 생성 시만 설정, 이후 변경 불가
            "createdAt": {
              ".validate": "newData.isNumber() && newData.val() > 0 && (!data.exists() || data.val() === newData.val())"
            },

            // updatedAt 필드: 수정할 때마다 갱신
            "updatedAt": {
              ".validate": "newData.isNumber() && newData.val() > 0"
            }
          }
        }
      }
    }
  }
}
```

### 사용자 프로필 데이터 보안 규칙

**경로 구조:**

```
/users/
  {uid}/
    displayName: 사용자 이름
    email: 이메일
    phoneNumber: 전화번호
    createdAt: 가입 시간
```

**보안 규칙:**

```json
{
  "rules": {
    "users": {
      "{uid}": {
        // 자신의 프로필만 읽기 가능
        ".read": "auth.uid === $uid",

        // 자신의 프로필만 쓰기 가능
        ".write": "auth.uid === $uid",

        // 필드별 유효성 검사
        ".validate": "newData.hasChildren(['displayName', 'email', 'createdAt'])",

        "displayName": {
          ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 100"
        },

        "email": {
          ".validate": "newData.isString() && newData.val().contains('@')"
        },

        "phoneNumber": {
          ".validate": "!newData.exists() || (newData.isString() && newData.val().length > 0)"
        },

        "createdAt": {
          ".validate": "newData.isNumber() && (!data.exists() || data.val() === newData.val())"
        }
      }
    }
  }
}
```

---

## 인증 기반 접근 제어

### 전화번호 인증 (Phone Authentication)

SNS 애플리케이션은 주로 **전화번호 인증** 방식을 사용합니다.

**인증된 사용자 확인:**

```javascript
// 인증 여부 확인
"auth != null"

// 전화번호 인증된 사용자만
"auth.token.firebase.sign_in_provider === 'phone'"

// 특정 사용자 식별
"auth.uid === root.child('users').child($userId).child('uid').val()"
```

**보안 규칙 예시:**

```json
{
  "rules": {
    "messages": {
      "{messageId}": {
        ".read": "auth != null && auth.token.firebase.sign_in_provider === 'phone'",
        ".write": "auth.uid === newData.child('senderUid').val()"
      }
    }
  }
}
```

---

## 데이터 검증

### 필드 타입 검증

**모든 필드는 예상되는 타입으로 검증되어야 합니다:**

```json
{
  "rules": {
    "posts": {
      "{postId}": {
        ".validate": "newData.hasChildren(['title', 'content', 'uid', 'createdAt'])",

        "title": {
          // 문자열 검증
          ".validate": "newData.isString()"
        },

        "views": {
          // 숫자 검증
          ".validate": "newData.isNumber() && newData.val() >= 0"
        },

        "tags": {
          // 배열 검증
          ".validate": "newData.isString() && newData.val().contains(',')"
        }
      }
    }
  }
}
```

### 길이 검증

```json
{
  "rules": {
    "posts": {
      "{postId}": {
        "title": {
          // 제목: 최소 1자, 최대 500자
          ".validate": "newData.val().length > 0 && newData.val().length <= 500"
        },

        "content": {
          // 내용: 최소 1자, 최대 50,000자
          ".validate": "newData.val().length > 0 && newData.val().length <= 50000"
        }
      }
    }
  }
}
```

### 범위 검증

```json
{
  "rules": {
    "ratings": {
      "{ratingId}": {
        "score": {
          // 점수: 1~5점만 허용
          ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() <= 5"
        }
      }
    }
  }
}
```

---

## 보안 규칙 배포 및 테스트

### Firebase Console을 통한 배포

1. **Firebase Console 접속**: https://console.firebase.google.com
2. **프로젝트 선택**: SNS 프로젝트 선택
3. **Realtime Database 선택**: 좌측 메뉴에서 "Realtime Database" 클릭
4. **Rules 탭**: "Rules" 탭 클릭
5. **규칙 편집**: 위의 보안 규칙을 복사하여 붙여넣기
6. **Publish**: "Publish" 버튼 클릭하여 배포

### Firebase CLI를 통한 배포

```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 프로젝트 초기화
firebase init database

# 규칙 배포
firebase deploy --only database:rules

# 규칙 확인
firebase database:get / --pretty
```

### 보안 규칙 테스트

**Firebase Console의 Rules Playground:**

1. Firebase Console → Realtime Database → Rules 탭
2. "Emulator" 섹션에서 테스트 코드 작성
3. "Play" 버튼으로 테스트 실행

**테스트 예시:**

```javascript
// 인증되지 않은 사용자가 게시글을 읽으려 할 때
{
  "auth": null,
  "request": {
    "method": "get",
    "path": "/forum/community/posts/post-123"
  }
}
// 결과: ❌ 접근 거부

// 인증된 사용자가 게시글을 읽을 때
{
  "auth": {
    "uid": "user-123"
  },
  "request": {
    "method": "get",
    "path": "/forum/community/posts/post-456"
  }
}
// 결과: ✅ 접근 허용

// 사용자가 자신의 게시글을 수정할 때
{
  "auth": {
    "uid": "user-123"
  },
  "request": {
    "method": "put",
    "path": "/forum/community/posts/post-789",
    "data": {
      "uid": "user-123",
      "title": "수정된 제목",
      "content": "수정된 내용"
    }
  }
}
// 결과: ✅ 접근 허용

// 사용자가 다른 사람의 게시글을 수정하려 할 때
{
  "auth": {
    "uid": "user-123"
  },
  "request": {
    "method": "put",
    "path": "/forum/community/posts/post-abc",
    "data": {
      "uid": "user-456",
      "title": "타인의 게시글 수정 시도",
      "content": "이것은 불가능해야 함"
    }
  }
}
// 결과: ❌ 접근 거부
```

---

## 비용 최적화

### 1. 악의적 요청 차단

**문제:**
- 웹 크롤러가 `/forum/community/posts` 경로를 계속 요청
- 매 요청마다 데이터베이스 읽기 비용 발생

**해결:**
```json
{
  "rules": {
    "forum": {
      ".read": "auth != null && auth.token.firebase.sign_in_provider === 'phone'"
    }
  }
}
```
→ 인증되지 않은 요청은 데이터베이스 레벨에서 **즉시 차단**

### 2. Rate Limiting

Firebase Security Rules에는 기본 Rate Limiting 기능이 없으므로, 클라이언트 측에서 구현합니다:

```javascript
// src/lib/services/forum.js
import { database } from '../utils/firebase.js';
import { ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';

// 요청 스로틀링 (3초마다 최대 1번 요청)
const lastRequestTime = {};

export function listenToPosts(category, limit = 10, callback) {
  const now = Date.now();
  const key = `forum_${category}`;

  // 스로틀 체크
  if (lastRequestTime[key] && now - lastRequestTime[key] < 3000) {
    console.warn(`요청 제한: ${key} (${3000 - (now - lastRequestTime[key])}ms 대기)`);
    return () => {};
  }

  lastRequestTime[key] = now;

  // 실제 요청
  const postsRef = ref(database, `forum/${category}/posts`);
  const postsQuery = query(
    postsRef,
    orderByChild('createdAt'),
    limitToLast(limit)
  );

  const listener = onValue(postsQuery, (snapshot) => {
    if (snapshot.exists()) {
      const postsData = [];
      snapshot.forEach((childSnapshot) => {
        postsData.push({
          postId: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      postsData.reverse();
      callback(postsData);
    } else {
      callback([]);
    }
  });

  return () => {
    off(postsRef);
  };
}
```

### 3. 데이터 구조 최적화

**나쁜 예 (깊은 중첩):**
```
/forum/community/posts/post-123/comments/comment-456/replies/reply-789
```
→ 각 레벨마다 데이터 읽기 비용 발생

**좋은 예 (얕은 구조):**
```
/forum/community/posts/post-123
/forum/community/comments/comment-456
/forum/community/replies/reply-789
```
→ 필요한 데이터만 읽기

### 4. Cloud Functions를 통한 비용 절감 (선택사항)

매우 복잡한 검증이 필요한 경우, Cloud Functions를 사용합니다:

```typescript
// functions/src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// 게시글 생성 트리거
export const onPostCreate = functions.database
  .ref("forum/{category}/posts/{postId}")
  .onCreate(async (snapshot, context) => {
    const { category } = context.params;
    const postData = snapshot.val();

    // 복잡한 비즈니스 로직 (예: 스팸 감지, 콘텐츠 필터링)
    if (isSpam(postData.content)) {
      await snapshot.ref.remove();
      console.log("스팸 게시글 삭제됨");
    }

    // 인덱싱 (선택사항)
    await admin
      .firestore()
      .collection("search_index")
      .doc(context.params.postId)
      .set({
        title: postData.title,
        content: postData.content,
        category: category,
        createdAt: postData.createdAt
      });
  });
```

---

## 체크리스트

배포 전에 다음을 확인하세요:

- ✅ 모든 경로에 `.read` 권한 설정
- ✅ 모든 경로에 `.write` 권한 설정
- ✅ 필드별 유효성 검사 구현
- ✅ 사용자 인증 기반 접근 제어
- ✅ 권한 없는 사용자가 데이터 수정 불가
- ✅ Rate Limiting 고려
- ✅ 데이터 구조 최적화
- ✅ Firebase Console Emulator로 테스트 완료
- ✅ 프로덕션 배포 전 재검토

---

## 참고 자료

- [Firebase Security Rules 공식 문서](https://firebase.google.com/docs/database/security)
- [Security Rules 언어 가이드](https://firebase.google.com/docs/rules/rules-language)
- [Firebase Emulator로 로컬 테스트](https://firebase.google.com/docs/emulator-suite)
- [비용 최적화 가이드](https://firebase.google.com/docs/database/usage/optimize)

---

**마지막 수정**: 2025년 11월
**작성자**: SNS 개발팀
