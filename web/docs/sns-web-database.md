Firebase Realtime Database 구조:
- 본 문서는 SNS 웹 애플리케이션을 개발하기 위한 데이터베이스 구조를 정의하고, 그에 따른 기본적인 개발 지침을 제공합니다.
- 데이터베이스 설계나 구조를 확인을 할 때에는 반드시 아래의 규칙을 따라서 개발 작업을 진행해야 합니다.



# 개요
- Firebase Realtime Database(RTDB)는 실시간 데이터 동기화가 필요한 SNS 웹 애플리케이션에 적합한 데이터베이스 솔루션입니다.
  - 다만, 가장 큰 단점은 데이터를 효율적으로 추출하기 위한 쿼리가 제한적이라는 점입니다. 따라서, 데이터 구조 설계 시 이를 고려해야 합니다.
- 애플리케이션에서는 필요한 최소한의 데이터만 저장합니다. Firebase Cloud Functions 를 사용하여 복잡한 데이터 처리 및 집계를 수행해야 합니다. 이렇게 하는 이유는 웹 애플리케이션 뿐만아니라 모바일 앱에서도 동일한 기능을 사용하기 때문입니다.


# 사용자 정보

- 사용자 정보는 `users` 노드에 저장됩니다.
- 데이터 구조 예제:


```
/users/
├── <uid1>/
│   ├── displayName: "사용자1"
│   ├── photoUrl: "https://firebasestorage.googleapis.com/..."
│   └── createdAt: 1698473000000
├── <uid2>/
│   ├── displayName: "사용자2"
│   ├── photoUrl: "https://firebasestorage.googleapis.com/..."
│   └── createdAt: 1698473100000
└── <uid3>/
    ├── displayName: "사용자3"
    └── createdAt: 1698473200000
```
- 각 사용자 노드는 고유한 UID로 식별됩니다.
- 사용자 정보에는 `displayName`, `photoUrl`, `createdAt`, `updatedAt`, `gender`, `birthYear`, `birthMonth`, `birthDay` 등의 필드가 포함됩니다.


## 사용자 속성 분리

- 사용자 노드 `/users/<uid>/ { ... }` 에 있는 각 개별 속성은 `user-props` 노드에 저장됩니다.
- 이는 특정 속성에 대한 대량 조회를 효율적으로 수행하기 위함입니다.
  - 예를 들어, 회원 목록을 하는 경우, `user-props/displayName` 경로에서 모든 사용자 이름을 조회할 수 있습니다.
    - 만약, `/users/` 경로에서 모든 사용자를 조회하려면, 각 사용자 노드를 모든 정보를 다 가져와야 해서, 많은 데이터를 전송해야 하므로 비효율적입니다.
- 각 사용자의 속성을 분리 할 때, 공유할 정보만 분리해야 합니다. 예를 들어, `displayName`, `photoUrl`, `createdAt`, `updatedAt`, `gender`, `birthYear`, `birthMonth`, `birthDay` 등은 분리할 수 있지만, 비밀번호 등 민감한 정보는 분리하지 않습니다.
- 이러한 속성 분리는 `onUserProfileUpdate` Cloud Function을 사용하여 사용자 프로필이 업데이트 될 때마다 자동으로 동기화됩니다.
- 데이터 구조 예제:
```
/user-props/
  /displayName/
    ├── <uid1>: "사용자1"
    ├── <uid2>: "사용자2"
    └── <uid3>: "사용자3"
  /photoUrl/
    ├── <uid1>: "https://firebasestorage.googleapis.com/..."
    ├── <uid2>: "https://firebasestorage.googleapis.com/..."
    └── <uid3>: null
  /createdAt/
    ├── <uid1>: 1698473000000
    ├── <uid2>: 1698473100000
    └── <uid3>: 1698473200000
  /updatedAt/
    ├── <uid1>: 1698474000000
    ├── <uid2>: 1698474100000
    └── <uid3>: 1698474200000
  /gender
    ├── <uid1>: "M"
    ├── <uid2>: "F"
    └── <uid3>: "M"
  /birthYear
    ├── <uid1>: 1990
    ├── <uid2>: 1985
    └── <uid3>: 2000
```


# 친구 관계

본 항목은 친구 관계, 팔로잉, 팔로워에 대한 데이터베이스 구조 정보를 제공합니다.
- 반드시 아래의 규칙과 예제를 따라 개발을 진행해야 합니다.


- Firebase Realtime Database를 사용하여 친구 관계 및 팔로잉/팔로워 데이터를 저장합니다.
- 데이터 구조 예제:
- ```json
{

      "friends": {
        "<login-user-uid>": {
            "<other-user-uid-1>": timestamp,
            "<other-user-uid-2>": timestamp
        }
      },
      "followers": {
        "<my-uid>": {
            "<other-user-uid-3>": timestamp
        }
      },
      "following": {
        "<my-uid>": {
            "<other-user-uid-4>": timestamp
        }
      }

}
- ```
- `friends`: 상호 친구 관계를 나타냅니다.
- `followers`: 해당 사용자를 팔로우하는 사용자 목록입니다.
- `following`: 사용자가 팔로우하는 사용자 목록입니다.
- 각 항목의 값은 관계가 형성된 타임스탬프입니다.
- 각 항목의 키는 사용자 UID입니다. 해당 사용자의 UID를 사용하여 관계를 조회할 수 있습니다.
  - 예: `friends/<login-user-uid>/` 경로에서 로그인한 사용자의 친구 목록을 조회할 수 있습니다.
  - 예: `followers/<my-uid>/` 경로에서 나를 팔로우하는 사용자 목록을 조회할 수 있습니다.
  - 예: `following/<my-uid>/` 경로에서 내가 팔로우하는 사용자 목록을 조회할 수 있습니다.
- 친구 관계는 양방향 관계이므로, 친구 추가 시 양쪽 사용자에 대해 `friends` 항목을 업데이트해야 합니다.
