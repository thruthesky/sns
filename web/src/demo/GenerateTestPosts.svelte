<script>
  /**
   * 테스트 게시글 생성 페이지
   *
   * 여러 카테고리에 랜덤 게시글을 생성합니다.
   * - community 카테고리: 100개 (30일 범위 랜덤 시간)
   * - news 카테고리: 200개 (1초씩 차이나게 생성)
   * 각 게시글 제목에는 순차 번호(1., 2., 3., ...)가 자동으로 추가됩니다.
   */

  import { onMount } from 'svelte';
  import { database } from '../lib/utils/firebase.js';
  import { ref, push } from 'firebase/database';
  import { login } from '../lib/utils/firebase-login-user.svelte.ts';
  import { setPageTitle } from '../lib/stores/pageTitle.ts';
  import { t } from '../lib/stores/i18n.ts';

  let isGenerating = $state(false);
  let isGeneratingNews = $state(false);
  let progress = $state({ current: 0, total: 0, category: '' });
  let logs = $state([]);
  let completed = $state(false);

  onMount(() => {
    setPageTitle($t('테스트게시글생성타이틀'));
  });

  function addLog(message, type = 'info') {
    logs = [...logs, { message, type, time: new Date().toLocaleTimeString() }];
  }

  // 테스트 데이터 템플릿
  const templates = {
    community: {
      titles: [
        '오늘 처음 가입했어요! 반갑습니다 🎉', '주말에 뭐하고 노시나요?', '요즘 핫한 맛집 추천 부탁드려요',
        '이 동네 살기 어떤가요?', '반려동물 키우시는 분 계세요?', '동네 산책로 추천해주세요',
        '오늘 날씨 너무 좋네요 ☀️', '주변에 좋은 카페 있나요?', '같이 운동하실 분 계실까요?',
        '저녁 메뉴 추천 부탁드립니다', '새로 이사왔는데 인사드려요!', '동네 소식 공유해요',
        '취미 생활 공유하실 분?', '오늘 하루 어땠나요?', '주말 모임 만들어볼까요?'
      ],
      contents: [
        '안녕하세요! 이 동네에 새로 이사온 {name}입니다. 좋은 분들 많이 만나고 싶어요!',
        '주말에 특별한 계획 있으신가요? 저는 {activity}하려고 하는데, 추천할만한 곳 있으면 알려주세요!',
        '최근에 {place}에서 정말 맛있게 먹었어요. 분위기도 좋고 가격도 합리적이더라고요!',
        '이 동네 {years}년째 살고 있는데요, 조용하고 살기 좋은 것 같아요!',
        '반려{pet}를 키우고 있는데, 같이 산책하실 분 계실까요? {time}에 주로 나가요!'
      ]
    },
    qna: {
      titles: [
        '근처 좋은 병원 추천해주세요', '택배 수령 어디서 하나요?', '버스 노선 문의드립니다',
        '주차장 이용 방법 알려주세요', '쓰레기 배출 시간이 언제인가요?', '세탁소 추천 부탁드려요',
        '동네 도서관 이용 방법', '반려동물 병원 어디가 좋나요?', '자전거 보관소 위치 알려주세요'
      ],
      contents: [
        '{service} 이용하려고 하는데, 추천해주실만한 곳 있을까요?',
        '{place}에서 {service}을 이용하려고 하는데, 이용 방법을 잘 모르겠어요.',
        '{problem}로 고민중인데, 혹시 해결 방법 아시는 분 계실까요?',
        '{place} 근처에서 {service} 찾고 있어요. 가성비 좋은 곳 추천해주세요!'
      ]
    },
    news: {
      titles: [
        '이번 주말 동네 축제 소식', '새로운 지하철 노선 개통 예정', '지역 도서관 리모델링 완료',
        '주민센터 새로운 서비스 시작', '동네 공원 벚꽃 축제 안내', '지역 체육센터 신규 프로그램',
        '무료 건강검진 일정 안내', '마을버스 노선 변경 공지'
      ],
      contents: [
        '{date}에 {place}에서 {event}가 열립니다! 많은 관심과 참여 부탁드립니다.',
        '{organization}에서 {service}를 {date}부터 시작한다고 발표했습니다.',
        '{place}의 {facility}가 {date}에 {action}됩니다. 주민 여러분의 많은 이용 바랍니다!'
      ]
    },
    market: {
      titles: [
        '중고 자전거 판매합니다', '안쓰는 가전제품 나눔해요', '아이 장난감 저렴하게 팔아요',
        '책장 정리 - 책 나눔', '운동기구 판매합니다', '여행 캐리어 팔아요',
        '화분과 식물 나눔', '게임기 판매합니다', '옷장 정리 - 의류 판매'
      ],
      contents: [
        '{item}를 판매합니다. {condition} 상태이고 {price}에 드려요!',
        '집에서 안쓰는 {item} 나눔합니다. 필요하신 분 댓글 남겨주세요!',
        '{item} 판매해요. {period} 사용했고 상태 좋습니다. {price}에 드립니다!'
      ]
    }
  };

  const variables = {
    name: ['김철수', '이영희', '박민수', '정수연', '최동현', '강지은'],
    activity: ['등산', '자전거 타기', '카페 투어', '영화 보기', '독서', '요리'],
    place: ['공원', '카페', '도서관', '헬스장', '산책로', '맛집'],
    years: ['1', '2', '3', '5'],
    pet: ['강아지', '고양이'],
    time: ['아침', '저녁', '주말'],
    service: ['병원', '약국', '세탁소', '미용실'],
    problem: ['이사', '청소', '수리', '배달'],
    item: ['자전거', '책', '옷', '악기', '운동기구'],
    condition: ['깨끗한', '새것같은', '사용감 적은'],
    price: ['1만원', '2만원', '3만원'],
    period: ['6개월', '1년'],
    date: ['이번 주말', '다음 주'],
    event: ['축제', '행사', '모임'],
    organization: ['주민센터', '구청'],
    facility: ['도서관', '체육센터'],
    action: ['개장', '리모델링']
  };

  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function replaceVariables(template) {
    let result = template;
    for (const [key, values] of Object.entries(variables)) {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      result = result.replace(regex, randomChoice(values));
    }
    return result;
  }

  async function generatePosts() {
    if (!login.isAuthenticated || !login.uid) {
      addLog($t('로그인필요'), 'error');
      return;
    }

    isGenerating = true;
    completed = false;
    logs = [];
    addLog($t('테스트데이터생성시작'), 'success');
    addLog($t('사용자정보', { user: login.data?.displayName || login.email }), 'info');

    // 📌 community 카테고리만 생성
    const category = 'community';
    const categoryLabel = $t('커뮤니티');

    progress = { current: 0, total: 100, category: categoryLabel };
    addLog($t('카테고리생성중', { category: categoryLabel }), 'info');

    const categoryTemplates = templates.community;
    let successCount = 0;
    const now = Date.now(); // 현재 시간

    for (let i = 0; i < 100; i++) {
      try {
        // 📌 제목에 순차 번호 추가 (1., 2., 3., ...)
        const baseTitle = replaceVariables(randomChoice(categoryTemplates.titles));
        const title = `${i + 1}. ${baseTitle}`;
        const content = replaceVariables(randomChoice(categoryTemplates.contents));

        // 📝 각 글마다 과거 30일 범위에서 무작위로 생성시간 설정
        const createdAtTime = now - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000);

        // 📋 sns-web-database.md 참조: 게시판 데이터 구조
        // /posts/{postId}에 저장되며, order 필드는 정렬용 (category-timestamp 형식)
        const postData = {
          uid: login.uid,
          title,
          content,
          author: login.data?.displayName || login.email || $t('익명'),
          category: category,
          order: `${category}-${createdAtTime}`, // 정렬용 필드
          createdAt: createdAtTime,
          updatedAt: now,
          likeCount: 0, // Cloud Functions가 관리
          commentCount: 0 // Cloud Functions가 관리
        };

        // ✅ 올바른 경로: /posts (category 경로 제거)
        // push()는 자동으로 postId를 생성합니다
        const postsRef = ref(database, 'posts');
        await push(postsRef, postData);

        successCount++;
        progress = { ...progress, current: i + 1 };

        if ((i + 1) % 20 === 0) {
          addLog($t('생성진행', { current: i + 1, total: 100 }), 'success');
        }

        // API 제한 방지 딜레이
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        addLog($t('생성실패', { error: error.message }), 'error');
      }
    }

    addLog($t('카테고리생성완료', { category: categoryLabel, count: successCount }), 'success');
    addLog($t('모든데이터생성완료'), 'success');
    addLog($t('총100개생성'), 'success');
    isGenerating = false;
    completed = true;
  }

  /**
   * 뉴스 게시판 글 200개 생성 함수
   *
   * - news 카테고리에 200개의 뉴스 게시글 생성
   * - 각 글의 제목에 순차 번호 추가 (1. 제목, 2. 제목, ...)
   * - createdAt을 1초씩 차이나게 설정 (과거 → 현재 순서)
   *   예: 200번째 글이 가장 오래된 글, 1번째 글이 가장 최신 글
   */
  async function generateNewsPosts() {
    if (!login.isAuthenticated || !login.uid) {
      addLog($t('로그인필요'), 'error');
      return;
    }

    isGeneratingNews = true;
    completed = false;
    logs = [];
    addLog('뉴스 게시판 글 생성 시작', 'success');
    addLog($t('사용자정보', { user: login.data?.displayName || login.email }), 'info');

    // 📌 news 카테고리에 200개 생성
    const category = 'news';
    const categoryLabel = '뉴스';
    const totalPosts = 200;

    progress = { current: 0, total: totalPosts, category: categoryLabel };
    addLog(`${categoryLabel} 카테고리에 ${totalPosts}개 글 생성 중...`, 'info');

    const categoryTemplates = templates.news;
    let successCount = 0;
    const now = Date.now(); // 현재 시간

    for (let i = 0; i < totalPosts; i++) {
      try {
        // 📌 제목에 순차 번호 추가 (1., 2., 3., ...)
        const baseTitle = replaceVariables(randomChoice(categoryTemplates.titles));
        const title = `${i + 1}. ${baseTitle}`;
        const content = replaceVariables(randomChoice(categoryTemplates.contents));

        // 📝 각 글마다 1초씩 차이나게 생성시간 설정
        // 200번째 글(i=199)이 가장 오래된 글 (now - 199초)
        // 1번째 글(i=0)이 가장 최신 글 (now - 0초)
        const createdAtTime = now - ((totalPosts - 1 - i) * 1000);

        // 📋 sns-web-database.md 참조: 게시판 데이터 구조
        // /posts/{postId}에 저장되며, order 필드는 정렬용 (category-timestamp 형식)
        const postData = {
          uid: login.uid,
          title,
          content,
          author: login.data?.displayName || login.email || $t('익명'),
          category: category,
          order: `${category}-${createdAtTime}`, // 정렬용 필드
          createdAt: createdAtTime,
          updatedAt: now,
          likeCount: 0, // Cloud Functions가 관리
          commentCount: 0 // Cloud Functions가 관리
        };

        // ✅ 올바른 경로: /posts (category 경로 제거)
        // push()는 자동으로 postId를 생성합니다
        const postsRef = ref(database, 'posts');
        await push(postsRef, postData);

        successCount++;
        progress = { ...progress, current: i + 1 };

        if ((i + 1) % 50 === 0) {
          addLog(`${i + 1}/${totalPosts} 글 생성 완료`, 'success');
        }

        // API 제한 방지 딜레이 (50ms)
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        addLog(`글 생성 실패: ${error.message}`, 'error');
      }
    }

    addLog(`${categoryLabel} 카테고리 생성 완료: ${successCount}개`, 'success');
    addLog('모든 뉴스 게시글 생성 완료!', 'success');
    addLog(`총 ${successCount}/${totalPosts}개 생성됨`, 'success');
    isGeneratingNews = false;
    completed = true;
  }
</script>

<div class="generator-page">
  <div class="generator-container">
    <div class="header">
      <h1>{$t('테스트게시글생성타이틀')}</h1>
      <p>커뮤니티 게시판에 100개, 뉴스 게시판에 200개의 테스트 글을 생성합니다.</p>
      <p class="header-detail">뉴스 게시판은 각 글의 생성 시간이 1초씩 차이나도록 설정됩니다.</p>
    </div>

    {#if !login.isAuthenticated}
      <div class="warning-box">
        <p>{$t('로그인필요')}</p>
        <a href="/user/login">{$t('로그인하러가기')}</a>
      </div>
    {:else}
      <div class="action-box">
        <!-- 커뮤니티 게시판 생성 버튼 (100개) -->
        <button
          class="btn-generate"
          onclick={generatePosts}
          disabled={isGenerating || isGeneratingNews}
        >
          {isGenerating ? $t('생성중') : '커뮤니티 글 100개 생성'}
        </button>

        <!-- 뉴스 게시판 생성 버튼 (200개) -->
        <button
          class="btn-generate btn-news"
          onclick={generateNewsPosts}
          disabled={isGenerating || isGeneratingNews}
        >
          {isGeneratingNews ? '생성 중...' : '뉴스 글 200개 생성 (1초 간격)'}
        </button>

        {#if isGenerating || isGeneratingNews}
          <div class="progress-info">
            <p class="progress-category">{progress.category}</p>
            <div class="progress-bar">
              <div
                class="progress-fill"
                style="width: {(progress.current / progress.total) * 100}%"
              ></div>
            </div>
            <p class="progress-text">{progress.current} / {progress.total}</p>
          </div>
        {/if}
      </div>

      {#if logs.length > 0}
        <div class="logs-container">
          <h3>{$t('실행로그')}</h3>
          <div class="logs">
            {#each logs as log}
              <div class="log-item log-{log.type}">
                <span class="log-time">{log.time}</span>
                <span class="log-message">{log.message}</span>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      {#if completed}
        <div class="success-box">
          <p>{$t('생성완료확인메시지')}</p>
          <a href="/post/list" class="btn-view">{$t('게시판보기')}</a>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .generator-page {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .generator-container {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .header h1 {
    margin: 0 0 0.5rem 0;
    font-size: 1.75rem;
    color: #111827;
  }

  .header p {
    margin: 0 0 0.25rem 0;
    color: #6b7280;
  }

  .header-detail {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-top: 0.5rem;
  }

  .warning-box {
    padding: 1.5rem;
    background-color: #fef2f2;
    border: 1px solid #fca5a5;
    border-radius: 0.375rem;
    text-align: center;
  }

  .warning-box p {
    margin: 0 0 1rem 0;
    color: #991b1b;
    font-weight: 500;
  }

  .warning-box a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    text-decoration: none;
    border-radius: 0.375rem;
  }

  .action-box {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btn-generate {
    width: 100%;
    padding: 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .btn-generate:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .btn-generate:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* 뉴스 버튼 스타일 (초록색) */
  .btn-news {
    background-color: #10b981;
  }

  .btn-news:hover:not(:disabled) {
    background-color: #059669;
  }

  .progress-info {
    margin-top: 1.5rem;
  }

  .progress-category {
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    color: #111827;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .progress-fill {
    height: 100%;
    background-color: #3b82f6;
    transition: width 0.3s;
  }

  .progress-text {
    margin: 0;
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
  }

  .logs-container {
    margin-top: 2rem;
  }

  .logs-container h3 {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    color: #111827;
  }

  .logs {
    max-height: 400px;
    overflow-y: auto;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    padding: 1rem;
  }

  .log-item {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-family: 'Courier New', monospace;
  }

  .log-time {
    color: #9ca3af;
    flex-shrink: 0;
  }

  .log-message {
    flex: 1;
  }

  .log-info .log-message {
    color: #374151;
  }

  .log-success .log-message {
    color: #059669;
    font-weight: 500;
  }

  .log-error .log-message {
    color: #dc2626;
    font-weight: 500;
  }

  .success-box {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #d1fae5;
    border: 1px solid #6ee7b7;
    border-radius: 0.375rem;
    text-align: center;
  }

  .success-box p {
    margin: 0 0 1rem 0;
    color: #065f46;
    font-weight: 500;
    font-size: 1.125rem;
  }

  .btn-view {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #10b981;
    color: white;
    text-decoration: none;
    border-radius: 0.375rem;
    font-weight: 500;
  }

  .btn-view:hover {
    background-color: #059669;
  }

  @media (max-width: 640px) {
    .generator-page {
      padding: 1rem 0.5rem;
    }

    .generator-container {
      padding: 1.5rem;
    }

    .header h1 {
      font-size: 1.5rem;
    }
  }
</style>
