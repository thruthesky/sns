/**
 * 브라우저 콘솔에서 실행하는 게시글 생성 스크립트
 *
 * 사용 방법:
 * 1. 개발 서버 실행: npm run dev
 * 2. 브라우저에서 로그인
 * 3. 브라우저 개발자 도구 콘솔 열기 (F12)
 * 4. 이 파일의 내용을 복사해서 붙여넣기
 * 5. Enter 키를 눌러 실행
 *
 * 각 카테고리별로 100개씩, 총 400개의 게시글이 생성됩니다.
 */

(async function generateTestPosts() {
  // Firebase imports (이미 로드되어 있어야 함)
  const { database } = window;
  const { ref, push } = window.firebaseDatabase;
  const { auth } = window;

  if (!database || !ref || !push || !auth) {
    console.error('❌ Firebase가 로드되지 않았습니다. 페이지를 새로고침하고 다시 시도해주세요.');
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    console.error('❌ 로그인이 필요합니다. 먼저 로그인해주세요.');
    return;
  }

  // console.log('✅ 로그인된 사용자:', user.email);
  // console.log('📝 게시글 생성 시작...\n');

  // ============================================================================
  // 테스트 데이터 템플릿
  // ============================================================================

  const communityTitles = [
    '오늘 처음 가입했어요! 반갑습니다 🎉',
    '주말에 뭐하고 노시나요?',
    '요즘 핫한 맛집 추천 부탁드려요',
    '이 동네 살기 어떤가요?',
    '반려동물 키우시는 분 계세요?',
    '동네 산책로 추천해주세요',
    '오늘 날씨 너무 좋네요 ☀️',
    '주변에 좋은 카페 있나요?',
    '같이 운동하실 분 계실까요?',
    '저녁 메뉴 추천 부탁드립니다',
    '새로 이사왔는데 인사드려요!',
    '동네 소식 공유해요',
    '취미 생활 공유하실 분?',
    '오늘 하루 어땠나요?',
    '주말 모임 만들어볼까요?',
    '동네 축제 정보 공유',
    '맛있는 빵집 찾아요',
    '같이 독서하실 분?',
    '동네 공원 너무 좋아요',
    '이웃사촌 되어요!'
  ];

  const communityContents = [
    '안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요. 잘 부탁드립니다!',
    '주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!',
    '최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요. 강추합니다!',
    '이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요. 궁금한 점 있으면 물어보세요!',
    '반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!',
    '{place}에서 산책하기 정말 좋더라고요. 공기도 좋고 경치도 멋져요. 주말에 한번 가보세요!',
    '오늘은 날씨가 너무 좋아서 {activity}했어요. 기분이 정말 상쾌하네요!',
    '집 근처에 괜찮은 카페 하나 발견했어요. {feature} 좋아요. 커피 맛도 훌륭합니다!',
    '요즘 {exercise}하고 있는데 같이 하실 분 계실까요? 주 {times}회 정도 하고 있어요!',
    '오늘 저녁은 뭐 먹을까 고민중이에요. {food} 생각나는데 추천하시는 곳 있나요?'
  ];

  const qnaTitles = [
    '근처 좋은 병원 추천해주세요',
    '택배 수령 어디서 하나요?',
    '버스 노선 문의드립니다',
    '주차장 이용 방법 알려주세요',
    '쓰레기 배출 시간이 언제인가요?',
    '세탁소 추천 부탁드려요',
    '동네 도서관 이용 방법',
    '반려동물 병원 어디가 좋나요?',
    '자전거 보관소 위치 알려주세요',
    '공원 운동기구 사용법'
  ];

  const qnaContents = [
    '{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요? 경험담 공유해주시면 감사하겠습니다!',
    '{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요. 도와주실 수 있나요?',
    '{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요? 조언 부탁드립니다!',
    '{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!',
    '{time}에 {service}를 이용하고 싶은데, 어디가 좋을까요? 후기 궁금합니다!'
  ];

  const newsTitles = [
    '이번 주말 동네 축제 소식',
    '새로운 지하철 노선 개통 예정',
    '지역 도서관 리모델링 완료',
    '주민센터 새로운 서비스 시작',
    '동네 공원 벚꽃 축제 안내',
    '지역 체육센터 신규 프로그램',
    '무료 건강검진 일정 안내',
    '마을버스 노선 변경 공지',
    '재활용 수거 일정 변경',
    '지역 농산물 직거래 장터 개장'
  ];

  const newsContents = [
    '{date}에 {place}에서 {event}가 열립니다! {description} 많은 관심과 참여 부탁드립니다.',
    '{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다. {detail}',
    '{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!',
    '{event} 관련하여 {date}부터 {change}가 시행됩니다. 자세한 내용은 {contact}로 문의하세요.',
    '{season}를 맞아 {place}에서 {event}를 개최합니다. {date}부터 {period} 진행됩니다!'
  ];

  const marketTitles = [
    '중고 자전거 판매합니다',
    '안쓰는 가전제품 나눔해요',
    '아이 장난감 저렴하게 팔아요',
    '책장 정리 - 책 나눔',
    '운동기구 판매합니다',
    '여행 캐리어 팔아요',
    '화분과 식물 나눔',
    '게임기 판매합니다',
    '옷장 정리 - 의류 판매',
    '주방용품 판매해요'
  ];

  const marketContents = [
    '{item}를 판매합니다. {condition} 상태이고 {price}에 드려요. 댓글 남겨주세요!',
    '집에서 안쓰는 {item} 나눔합니다. {description} 필요하신 분 댓글 남겨주세요!',
    '{item} 판매해요. {detail} {period} 사용했고 상태 좋습니다. {price}에 드립니다!',
    '{reason}로 {item}를 판매합니다. {condition} {feature}도 함께 드려요. {price}입니다!',
    '{count}개 남은 {item} 판매합니다. {condition} {discount} 가격에 드려요!'
  ];

  // ============================================================================
  // 랜덤 변수
  // ============================================================================

  const randomVariables = {
    name: ['김철수', '이영희', '박민수', '정수연', '최동현', '강지은', '윤서준', '임하늘', '한소미', '오재현'],
    activity: ['등산', '자전거 타기', '카페 투어', '영화 보기', '독서', '요리', '운동', '사진 촬영'],
    place: ['공원', '카페', '도서관', '헬스장', '수영장', '산책로', '맛집', '베이커리'],
    years: ['1', '2', '3', '5', '10'],
    pet: ['강아지', '고양이'],
    time: ['아침', '저녁', '주말 오전', '주말 오후', '평일 저녁'],
    feature: ['조용하고', '편리하고', '깨끗하고', '아늑하고', '분위기가 좋고'],
    exercise: ['조깅', '헬스', '요가', '필라테스', '수영'],
    times: ['2', '3', '4', '5'],
    food: ['한식', '중식', '일식', '양식', '치킨', '피자', '분식'],
    service: ['병원', '약국', '세탁소', '미용실', '은행'],
    problem: ['이사', '청소', '수리', '배달', '예약'],
    item: ['자전거', '책', '옷', '신발', '악기', '운동기구'],
    condition: ['깨끗한', '새것같은', '사용감 적은', '상태 좋은'],
    price: ['1만원', '2만원', '3만원', '5만원'],
    description: ['필요하신 분께 드려요.', '잘 쓸 분께 양도합니다.'],
    detail: ['거의 사용 안했고', '한두번 사용했고'],
    period: ['6개월', '1년', '2년'],
    reason: ['이사', '업그레이드', '사용 안함'],
    count: ['2', '3', '5'],
    discount: ['반값', '저렴한'],
    date: ['이번 주말', '다음 주', '이번 달 말'],
    organization: ['주민센터', '구청', '동사무소'],
    facility: ['도서관', '체육센터', '주차장'],
    action: ['개장', '리모델링', '확장'],
    event: ['축제', '행사', '모임'],
    change: ['일정 변경', '요금 조정'],
    contact: ['주민센터', '구청'],
    season: ['봄', '여름', '가을', '겨울'],
  };

  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function replaceVariables(template, vars) {
    let result = template;
    for (const [key, values] of Object.entries(vars)) {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      result = result.replace(regex, randomChoice(values));
    }
    return result;
  }

  // ============================================================================
  // 게시글 생성
  // ============================================================================

  const categories = [
    { value: 'community', label: '커뮤니티', titles: communityTitles, contents: communityContents },
    { value: 'qna', label: '질문과답변', titles: qnaTitles, contents: qnaContents },
    { value: 'news', label: '뉴스', titles: newsTitles, contents: newsContents },
    { value: 'market', label: '회원장터', titles: marketTitles, contents: marketContents }
  ];

  for (const category of categories) {
    // console.log(`\n📂 [${category.label}] 카테고리 생성 중...`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < 100; i++) {
      try {
        const titleTemplate = randomChoice(category.titles);
        const contentTemplate = randomChoice(category.contents);
        const title = replaceVariables(titleTemplate, randomVariables);
        const content = replaceVariables(contentTemplate, randomVariables);

        const now = Date.now();
        const postData = {
          uid: user.uid,
          title: title,
          content: content,
          author: user.displayName || user.email || '익명',
          category: category.value,
          createdAt: now - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000), // 지난 30일 내 랜덤
          updatedAt: now
        };

        const postsRef = ref(database, `posts/${category.value}`);
        await push(postsRef, postData);

        successCount++;
        if ((i + 1) % 10 === 0) {
          // console.log(`  ✓ ${i + 1}/100 생성 완료`);
        }

        // API 호출 제한 방지를 위한 딜레이
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        failCount++;
        console.error(`  ✗ 생성 실패:`, error.message);
      }
    }

    // console.log(`✅ [${category.label}] 완료: 성공 ${successCount}개, 실패 ${failCount}개`);
  }

  // console.log('\n🎉 모든 테스트 데이터 생성 완료!');
  // console.log('총 400개의 게시글이 생성되었습니다.');
})();
