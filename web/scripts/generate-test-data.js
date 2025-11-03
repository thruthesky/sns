/**
 * 무한 스크롤 테스트를 위한 Firebase 테스트 데이터 생성 스크립트
 *
 * 사용법:
 * node scripts/generate-test-data.js
 *
 * 이 스크립트는 Firebase Realtime Database의 /users 경로에
 * 100개의 테스트 사용자 데이터를 생성합니다.
 */

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Firebase 설정 (src/config/firebase.web-config.js와 동일)
const firebaseConfig = {
  apiKey: 'AIzaSyB89ImXbiKosw6eTCC8S1_vY8BzGq_SFY0',
  authDomain: 'withcenter-test-5.firebaseapp.com',
  databaseURL:
    'https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'withcenter-test-5',
  storageBucket: 'withcenter-test-5.appspot.com',
  messagingSenderId: '1064417466216',
  appId: '1:1064417466216:web:039565a60d9b0b74db28dd'
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * 테스트 사용자 데이터 생성
 *
 * @param {number} index - 사용자 인덱스 (0부터 99)
 * @param {number} totalUsers - 총 사용자 수
 * @returns {object} 사용자 데이터
 */
function generateUserData(index, totalUsers = 100) {
  const paddedIndex = String(index + 1).padStart(3, '0'); // 001, 002, ..., 100
  const displayName = `TestUser${paddedIndex}`;
  const nicknameLowerCase = `testuser${paddedIndex}`.toLowerCase();
  const email = `testuser${paddedIndex}@test.com`;

  // ⚠️ 중요: Firebase orderByChild() + limitToFirst() 동작을 위해
  // 작은 값(오래된 데이터)부터 큰 값(최신 데이터)으로 정렬되어야 합니다.
  // 따라서 index가 증가할수록 createdAt도 증가해야 합니다.
  //
  // 생성 순서: user_001(가장 오래됨) ~ user_100(가장 최신)
  // createdAt 값: 작은 값 ~ 큰 값
  const createdAt = Date.now() - ((totalUsers - 1 - index) * 1000); // 역순: index가 클수록 더 최신

  return {
    displayName,
    nicknameLowerCase,
    email,
    photoURL: null,
    bio: `테스트 사용자 ${paddedIndex}`,
    createdAt, // 각 사용자마다 다른 시간 (작은 값부터 큰 값으로)
    score: index
  };
}

/**
 * 테스트 데이터를 Firebase에 저장
 *
 * @param {number} totalUsers - 생성할 사용자 수 (기본값: 100)
 */
async function generateTestData(totalUsers = 100) {
  try {
    console.log(`🔥 Firebase 테스트 데이터 생성 시작...`);
    console.log(`📊 총 ${totalUsers}개의 사용자 데이터를 생성합니다.`);
    console.log('');

    // 생성할 사용자 데이터
    const usersData = {};
    for (let i = 0; i < totalUsers; i++) {
      const userId = `user_${String(i + 1).padStart(3, '0')}`; // user_001, user_002, ..., user_100
      usersData[userId] = generateUserData(i, totalUsers);
    }

    // 🔍 생성된 데이터 개수 확인
    const generatedCount = Object.keys(usersData).length;
    console.log(`📝 생성된 데이터 개수: ${generatedCount}개`);
    console.log(
      `📋 생성된 사용자 ID 범위: ${Object.keys(usersData).sort()[0]} ~ ${
        Object.keys(usersData).sort().pop()
      }`
    );

    // Firebase Database의 /users 경로에 데이터 저장
    const usersRef = ref(database, 'users');
    await set(usersRef, usersData);
    console.log(`✅ Firebase에 ${generatedCount}개의 데이터를 저장했습니다.`);

    console.log('✅ 테스트 데이터 생성 완료!');
    console.log('');
    console.log('📍 저장 위치: /users');
    console.log(`📈 생성된 사용자 수: ${totalUsers}개`);
    console.log('');
    console.log('🧪 테스트 데이터 샘플:');
    const sampleUser = generateUserData(0);
    console.log(JSON.stringify(sampleUser, null, 2));
    console.log('');
    console.log('✨ 이제 브라우저에서 무한 스크롤을 테스트할 수 있습니다!');
    console.log('');

    // 프로세스 종료
    process.exit(0);
  } catch (error) {
    console.error('❌ 테스트 데이터 생성 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
generateTestData(100);
