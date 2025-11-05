<script>
  /**
   * Spec-Exact Development (SED) 페이지
   *
   * AI 기반 개발 패러다임인 SED의 개념과 원칙을 설명합니다.
   */

  import { t } from "../lib/stores/i18n.ts";
</script>

<div class="sed-page">
  <!-- 배경 그라디언트 -->
  <div class="background-gradient"></div>

  <div class="container">
    <!-- 페이지 제목 섹션 -->
    <div class="header">
      <h1 class="title">🧩 Spec-Exact Development (SED)</h1>
      <p class="subtitle">
        "AI develops exactly as the spec defines — no interpretation, no
        assumption."
      </p>
    </div>

    <!-- 탄생 배경 섹션 -->
    <div class="section origin-section">
      <h2 class="section-title">💡 탄생 배경</h2>
      <div class="content">
        <p>
          바이브코딩의 한계를 극복하기 위해 <strong
            >2025년 11월 4일 "송재호"</strong
          >가 만든 새로운 개발 방법론
        </p>

        <p class="highlight-text">
          <strong>이름하여 SED (Spec-Exact Development)</strong>
        </p>

        <p><strong>기존 방식의 문제점:</strong></p>
        <ul class="problem-list">
          <li>spec, context, skill은 두리뭉실한 설명</li>
          <li>mcp는 단편적인 정보만 제공</li>
          <li>AI가 자유롭게 해석하여 예상치 못한 결과 발생</li>
        </ul>

        <p><strong>SED의 해결책:</strong></p>
        <ul class="solution-list">
          <li>완전한 설계도를 AI에게 제공</li>
          <li>AI는 추론하지 않고 설계도를 정확히 따름</li>
          <li>명세를 절대적 기준으로 삼아 일관성 보장</li>
        </ul>
      </div>
    </div>

    <!-- 개념 정의 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 1. 개념 정의</h2>
      <div class="content">
        <p>
          <strong>Spec-Exact Development (SED)</strong>는 인공지능 기반 개발
          패러다임으로,<br />
          AI가 명세(specification)에 단 한 줄도 벗어나지 않고 개발을 수행하는 체계를
          말합니다.
        </p>

        <p>
          스펙은 절대적 기준이며,<br />
          AI는 이를 해석하거나 추론하지 않고, 오직 명세된 대로 실행합니다.
        </p>

        <p><strong>그만큼 스펙이 정밀하고, 완벽해야한다는 것입니다.</strong></p>

        <p>
          즉, <strong
            >완전한 설계도를 AI 에게 제공하며, AI 는 한치의 오차도 없이, 설계도
            대로 만드는 것입니다.</strong
          >
        </p>

        <blockquote class="quote">
          "If the spec is wrong, the product is wrong — by design."<br />
          <span class="quote-sub"
            >(스펙이 틀리면, 제품도 틀리다. 하지만 그것이 의도다.)</span
          >
        </blockquote>
      </div>
    </div>

    <!-- 기본 원칙 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 2. 기본 원칙</h2>

      <div class="principle-card">
        <h3 class="principle-title">1. Spec-Exactness Principle</h3>
        <ul class="principle-list">
          <li>개발은 오직 스펙에 정의된 내용만을 수행한다.</li>
          <li>
            스펙이 불완전하면, AI는 즉시 Spec Error를 반환하고 개발을 중단한다.
          </li>
        </ul>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">2. Spec Completeness Scoring</h3>
        <ul class="principle-list">
          <li>
            개발 시작 전, AI는 주어진 스펙을 평가하여 <strong
              >점수(0~100점)</strong
            >를 매긴다.
          </li>
          <li><strong>90점 이상</strong>이어야 개발이 시작된다.</li>
          <li>
            점수 기준은 다음 요소로 구성된다:
            <ul class="sub-list">
              <li>데이터베이스 설계의 완전성</li>
              <li>비즈니스 로직의 명확성</li>
              <li>UI/UX 요구사항의 구체성</li>
              <li>테스트 계획의 상세도 (unit/widget/e2e)</li>
              <li>배포 및 운영 환경 정의</li>
            </ul>
          </li>
        </ul>

        <div class="code-block">
          <div class="code-header">예시: 스펙 점수 부족 시 에러</div>
          <pre><code
              >SpecError: Insufficient specification to execute.
Reason: Database schema, authentication flow, or encryption detail missing.
Required Spec Score: ≥90
Current Score: 42</code
            ></pre>
        </div>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">3. Spec is the Law</h3>
        <ul class="principle-list">
          <li>AI는 인간의 의도를 추론하지 않는다.</li>
          <li>스펙에 모호한 문장이 있으면, 그 부분은 수행되지 않는다.</li>
          <li>"추측"은 금지이며, "기록된 것만" 실행한다.</li>
          <li>
            <strong
              >스펙은 절대 기준이지만, 스펙 자체에도 오류가 있을 수 있다.</strong
            >
            <ul class="sub-list">
              <li>
                스펙에 오류가 있어도 AI는 추론하지 않고 스펙을 반드시 따른다.
              </li>
              <li>
                스펙의 오류가 의심되면, AI는 개발자에게 확인(검수)이나 수정
                요청을 할 수 있다.
              </li>
              <li>
                <strong
                  >AI는 인간에게 스펙 수정을 요청할 수 있지만, AI 스스로 스펙을
                  수정할 수 없다.</strong
                >
              </li>
              <li>결론적으로 AI는 반드시 스펙을 따르는 것이 원칙이다.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 개발 프로세스 단계 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 3. 개발 프로세스 단계</h2>

      <!-- 준비 단계 -->
      <div class="phase-card">
        <h3 class="phase-title">🧱 준비 단계 (Preparation Phase)</h3>
        <p>
          AI는 개발자가 제공한 스펙을 분석하고 점수를 부여한다. SED에서는 준비
          단계부터 스펙을 입체적으로 설계해 두어야 이후 단계가 순조롭게
          진행된다.
        </p>
        <ol class="phase-steps">
          <li>
            <strong>스펙 줄거리 작성</strong>
            <ul class="sub-list">
              <li>
                전체 제품의 흐름을 설명하는 <strong>전체 줄거리</strong>와
                기능별·모듈별 <strong>세부 줄거리</strong>를 100 개 이상의
                항목으로 정해서 각각 작성한다.
              </li>
              <li>
                완전한 SNS 웹/앱 서비스라면 줄거리는 약 1만 토큰(약 14페이지)
                분량으로 정리한다.
              </li>
              <li>
                실제 상세 스펙은 이 줄거리 대비 최소 20배(약 2,800페이지) 이상이
                되어야 하며, 필요에 따라 더 많거나 적을 수 있다. 줄거리
                단계에서부터 이 규모를 염두에 두고 설계한다.
              </li>
              <li>
                각 줄거리는 핵심 목표, 주요 사용자 역할, 핵심 기능 흐름을 한눈에
                이해할 수 있도록 요약한다.
              </li>
            </ul>
          </li>
          <li>
            <strong>상세 스펙 작성</strong>
            <p class="phase-step-description">
              줄거리에서 파생된 모든 세부 항목을 설계도 수준으로 정리하되,
              중복되거나 잡다한 설명을 제거하고 꼭 필요한 정보만 남긴다.
            </p>

            <div class="highlight-box" style="margin-bottom: 1.5rem;">
              ⚠️ <strong>스펙 소유권과 개인 철학</strong><br />
              다른 사람이 만든 스펙을 복사하거나, 인공지능에게 스펙을 만들라고 해서
              도움을 받을 수 있지만, 결국 무엇을 만들 지는 인간 스스로 결정하는 것이므로,
              스펙의 모든 내용을 숙지하고, 개인의 철학이 담길 수 있도록 수정해야
              합니다.
            </div>

            <ul class="sub-list">
              <li>
                <strong>DB 설계 (데이터베이스 명세)</strong>
                <ul class="sub-list">
                  <li>
                    <strong>DBMS 종류 및 버전:</strong> MySQL 8.0.35 Community Edition
                  </li>
                  <li>
                    <strong>호스팅 환경:</strong> Self-hosted on AWS EC2 t3.medium
                    (2 vCPU, 4GB RAM)
                  </li>
                  <li>
                    <strong>운영 체제:</strong> Ubuntu 22.04.3 LTS (Jammy Jellyfish)
                  </li>
                  <li>
                    <strong>네트워크 정보:</strong> Private IP 10.0.1.50, Port 3306,
                    SSH Port 22
                  </li>
                  <li>
                    <strong>접근 계정:</strong> dev@10.0.1.50 (SSH key: ~/.ssh/dev_rsa),
                    DB user: app_dev / password stored in .env
                  </li>
                  <li>
                    <strong>SQL 버전 및 설정:</strong> SQL Mode = STRICT_TRANS_TABLES,
                    Character Set = utf8mb4, Collation = utf8mb4_unicode_ci
                  </li>
                  <li>
                    <strong>테이블 구조:</strong> users (id, email, password_hash,
                    created_at), posts (id, user_id, title, content, created_at),
                    comments (id, post_id, user_id, content)
                  </li>
                  <li>
                    <strong>인덱스:</strong> users.email (UNIQUE), posts.user_id
                    (INDEX), comments.post_id + created_at (COMPOSITE INDEX)
                  </li>
                  <li>
                    <strong>외래 키:</strong> posts.user_id → users.id (ON DELETE
                    CASCADE), comments.post_id → posts.id (ON DELETE CASCADE)
                  </li>
                  <li>
                    <strong>트랜잭션 격리 수준:</strong> READ COMMITTED (InnoDB 엔진
                    사용)
                  </li>
                  <li>
                    <strong>백업 정책:</strong> Daily full backup at 03:00 UTC via
                    mysqldump, 7일간 보관
                  </li>
                  <li>
                    <strong>유틸리티 버전:</strong> mysqldump 8.0.35, mysql-client
                    8.0.35, pt-online-schema-change 3.5.0
                  </li>
                </ul>
              </li>

              <li>
                <strong>기능 명세 (Feature Specification)</strong>
                <ul class="sub-list">
                  <li>
                    <strong>회원가입 (User Registration):</strong>
                    <ul class="sub-list">
                      <li>
                        이메일/비밀번호 회원가입: 이메일 형식 검증 (RFC 5322),
                        비밀번호 최소 8자 + 대소문자 + 숫자 + 특수문자 조합
                      </li>
                      <li>
                        전화번호 인증: Twilio API v2022-05-01 사용, SMS 6자리
                        OTP, 유효시간 5분
                      </li>
                      <li>
                        SNS 로그인: Google OAuth 2.0 (Client ID: xxx), Facebook
                        Login v18.0, Apple Sign-In (Team ID: xxx)
                      </li>
                      <li>
                        비밀번호 암호화: bcrypt (cost factor 12), salt rounds 10
                      </li>
                      <li>
                        이메일 인증: SendGrid API v3 사용, 인증 링크 유효시간
                        24시간
                      </li>
                      <li>
                        중복 검사: 이메일 중복 검사 (DB UNIQUE 제약 +
                        애플리케이션 레벨 검증)
                      </li>
                      <li>
                        에러 처리: 409 Conflict (이미 존재하는 이메일), 400 Bad
                        Request (잘못된 형식), 500 Internal Server Error (서버
                        오류)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>게시판 (Forum):</strong> CRUD 작업, 페이지네이션 (한
                    페이지당 20개), 정렬 기준 (최신순/조회수/좋아요), 검색 (제목/내용/작성자),
                    파일 업로드 (이미지 최대 5MB, 형식: JPG/PNG/GIF)
                  </li>
                  <li>
                    <strong>결제 (Payment):</strong> Stripe API v2023-10-16, PG사:
                    Stripe + Toss Payments, 결제 수단 (카드/계좌이체/간편결제), 결제
                    금액 범위 (최소 1,000원 ~ 최대 10,000,000원)
                  </li>
                  <li>
                    <strong>알림 (Notification):</strong> Firebase Cloud Messaging
                    (FCM) v1 API, 푸시 알림 (댓글/좋아요/멘션), 이메일 알림 (일일
                    요약/주간 리포트), 알림 설정 (사용자별 ON/OFF)
                  </li>
                  <li>
                    <strong>라우팅 (Routing Specification):</strong>
                    <ul class="sub-list">
                      <li>
                        SED 명세는 <strong
                          >특징적으로 모든 라우트 경로를 직접 만들어주는 것이
                          원칙</strong
                        >이므로, 예: <code>/auth/signup</code>,
                        <code>/auth/verify</code>, <code>/dashboard</code>처럼
                        실제 경로를 스펙에 기록한다.
                      </li>
                      <li>
                        회원가입은 어느 경로에서 시작되고 (<code
                          >/auth/signup</code
                        >), 완료 후 어느 경로로 이동하는지 (<code
                          >/onboarding/profile</code
                        > 등)까지 반드시 명시한다.
                      </li>
                      <li>
                        가입 → 인증 → 온보딩 → 대시보드 등 전체 사용자 여정에
                        대한 경로 순서도를 스펙에 포함하여 흐름을 완전하게
                        기술한다.
                      </li>
                      <li>
                        리다이렉트 조건, 예외 흐름(실패 시 이동 경로), 접근 제어
                        가드 등도 전부 스펙에 직접 작성한다.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>UI/UX 요구사항 (Design Specification)</strong>
                <ul class="sub-list">
                  <li>
                    <strong>디자인 시스템:</strong> Material Design 3.0, Primary
                    Color #6366F1, Secondary Color #8B5CF6, Font: Pretendard Variable
                    (한글), Inter (영문)
                  </li>
                  <li>
                    <strong>반응형 규칙:</strong> Mobile (&lt;768px), Tablet (768px~1024px),
                    Desktop (&gt;1024px), Breakpoint 기준: Tailwind CSS v3.4
                  </li>
                  <li>
                    <strong>위젯 구성:</strong> Header (고정, height 64px), Sidebar
                    (접이식, width 280px), Main Content (max-width 1280px, center
                    aligned), Footer (height 120px)
                  </li>
                  <li>
                    <strong>사용자 흐름:</strong> 로그인 → 대시보드 → 게시글 목록
                    → 게시글 상세 → 댓글 작성 → 알림 수신 (Figma 링크: https://figma.com/file/xxx)
                  </li>
                  <li>
                    <strong>접근성:</strong> WCAG 2.1 Level AA 준수, 키보드 네비게이션
                    지원, 스크린 리더 호환 (ARIA labels)
                  </li>
                  <li>
                    <strong>애니메이션:</strong> Framer Motion v11, 페이지 전환 (fade-in
                    300ms), 버튼 호버 (scale 1.05 200ms), 모달 (slide-up 250ms)
                  </li>
                </ul>
              </li>

              <li>
                <strong
                  >테스트 계획 (Testing Specification) — 가장 정밀해야 하는 섹션</strong
                >
                <ul class="sub-list">
                  <li>
                    <strong>테스트 언어 및 환경:</strong> TypeScript 5.3.3, Node.js
                    20.10.0 LTS, npm 10.2.3
                  </li>
                  <li>
                    <strong>테스트 플랫폼:</strong>
                    <ul class="sub-list">
                      <li>
                        Unit 테스트: Vitest 1.0.4 (Jest-compatible, ESM 지원)
                      </li>
                      <li>
                        Component 테스트: Testing Library
                        (@testing-library/svelte 4.0.5)
                      </li>
                      <li>
                        E2E 테스트: Playwright 1.40.1 (Chromium 120.0, Firefox
                        121.0, WebKit 17.4)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>테스트 환경 셋업:</strong>
                    <ul class="sub-list">
                      <li>
                        로컬 개발: Docker Compose v2.23.0 (MySQL 8.0 + Redis 7.2
                        + Node.js 20)
                      </li>
                      <li>
                        CI 환경: GitHub Actions (ubuntu-latest, Node.js 20.x
                        matrix)
                      </li>
                      <li>
                        테스트 DB: MySQL 8.0 (Docker 컨테이너, 포트 3307, 초기화
                        스크립트: /docker/mysql/init.sql)
                      </li>
                      <li>
                        Mock 데이터: Faker.js 8.3.1 (사용자 100명, 게시글 500개,
                        댓글 2000개 자동 생성)
                      </li>
                      <li>
                        환경 변수: .env.test 파일 (DATABASE_URL, API_KEY,
                        JWT_SECRET 등)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Unit 테스트 시나리오:</strong>
                    <ul class="sub-list">
                      <li>
                        커버리지 목표: 최소 80% (Statement/Branch/Function/Line)
                      </li>
                      <li>
                        테스트 케이스 수: 최소 200개 (utils: 50개, services:
                        80개, stores: 70개)
                      </li>
                      <li>
                        실행 명령: <code>npm run test:unit</code> (병렬 실행, max
                        workers 4)
                      </li>
                      <li>
                        예시: auth.service.test.ts - login() 함수
                        (성공/실패/네트워크 오류/토큰 만료 등 12개 케이스)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>E2E 테스트 시나리오:</strong>
                    <ul class="sub-list">
                      <li>
                        주요 사용자 플로우: 회원가입 → 로그인 → 게시글 작성 →
                        댓글 작성 → 로그아웃 (총 15단계)
                      </li>
                      <li>
                        브라우저: Chromium (Desktop 1920x1080), Mobile (iPhone
                        13, 390x844)
                      </li>
                      <li>
                        실행 명령: <code>npx playwright test</code> (headless mode,
                        병렬 3개)
                      </li>
                      <li>
                        스크린샷: 각 단계마다 자동 캡처, 실패 시 full page
                        screenshot + video recording
                      </li>
                      <li>
                        예시: e2e/auth.spec.ts - 로그인 실패 후 재시도 시나리오
                        (잘못된 비밀번호 3회 → 계정 잠금 확인)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>성능 테스트:</strong>
                    <ul class="sub-list">
                      <li>도구: Lighthouse CI 0.12.1, k6 0.48.0</li>
                      <li>
                        성능 기준: LCP &lt; 2.5s, FID &lt; 100ms, CLS &lt; 0.1,
                        TTI &lt; 3.8s
                      </li>
                      <li>
                        부하 테스트: k6 (동시 사용자 1000명, 10분간 지속, RPS
                        목표 500)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>보안 테스트:</strong>
                    <ul class="sub-list">
                      <li>
                        도구: OWASP ZAP 2.14.0, npm audit, Snyk CLI 1.1266.0
                      </li>
                      <li>
                        취약점 스캔: SQL Injection, XSS, CSRF, 패키지 취약점
                        (주간 1회 자동 실행)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>CI/CD 파이프라인:</strong>
                    <ul class="sub-list">
                      <li>
                        트리거: Git push to main/develop, Pull Request 생성
                      </li>
                      <li>
                        단계: Lint (ESLint 8.56) → Build → Unit Test → E2E Test
                        → Deploy to Staging
                      </li>
                      <li>
                        실행 시간 제한: 전체 파이프라인 15분 이내 (초과 시 실패)
                      </li>
                      <li>
                        자동 배포: Staging (develop 브랜치), Production (main
                        브랜치 + manual approval)
                      </li>
                      <li>
                        배포 플랫폼: Vercel (프론트엔드), AWS ECS Fargate
                        (백엔드)
                      </li>
                      <li>
                        알림: Slack #dev-alerts 채널 (빌드 성공/실패, 배포 완료)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>테스트 자동화:</strong>
                    <ul class="sub-list">
                      <li>
                        Husky 8.0.3 + lint-staged 15.2.0 (pre-commit hook: lint
                        + format + affected tests)
                      </li>
                      <li>
                        변경 감지: git diff를 분석하여 영향받는 테스트만 실행
                        (예: auth.ts 변경 → auth.test.ts만 실행)
                      </li>
                      <li>
                        캐싱: GitHub Actions cache (node_modules, Playwright
                        browsers, 빌드 결과물)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>테스트 결과 리포트:</strong>
                    <ul class="sub-list">
                      <li>
                        포맷: JUnit XML (Vitest), HTML Report (Playwright),
                        Coverage Report (Istanbul/NYC)
                      </li>
                      <li>
                        저장 위치: /test-results (Git ignore), S3 버킷
                        s3://test-reports/YYYY-MM-DD/ (30일 보관)
                      </li>
                      <li>
                        대시보드: Codecov (커버리지 트렌드), Allure Report (E2E
                        테스트 히스토리)
                      </li>
                      <li>
                        실패 분석: 실패한 테스트 케이스별 스크린샷, 에러 스택
                        트레이스, 실행 시간, 재현 단계
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong
                      >Firebase Functions 테스트 스펙 (Unit + Handler E2E)</strong
                    >
                    <p>
                      <strong
                        >SED에서는 테스트가 무엇보다 중요하며, 아래 항목은 최소
                        요구 사항일 뿐 실제 프로젝트에서는 이보다 훨씬 정밀한
                        스펙이 필요하다.</strong
                      >
                    </p>
                    <ul class="sub-list">
                      <li>
                        구조 원칙:
                        <ul class="sub-list">
                          <li>
                            핸들러(이벤트 수신 함수)는 <code
                              >firebase/functions/src/index.ts</code
                            >에만 위치시킨다.
                          </li>
                          <li>
                            실제 비즈니스 로직은 별도 모듈로 분리하여 순수 함수
                            형태로 작성한다.
                          </li>
                          <li>
                            이 분리 덕분에 에뮬레이터 없이도 로직 단위(Unit
                            Test)를 직접 호출해 검증할 수 있다.
                          </li>
                        </ul>
                      </li>
                      <li>
                        테스트 구성:
                        <ul class="sub-list">
                          <li>
                            <strong>Unit Test:</strong> 분리된 로직 함수를 직접 호출한다.
                            외부 의존(데이터베이스 등)은 최소화하거나 간단한 mock으로
                            대체한다.
                          </li>
                          <li>
                            <strong>Handler E2E Test:</strong>
                            <code>firebase-functions-test</code> 라이브러리를 사용해
                            핸들러를 wrap 한 뒤, 에뮬레이터 없이도 이벤트를 시뮬레이션한다.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Realtime Database 이벤트 테스트 시 <code
                          >functionsTest.database.makeDataSnapshot</code
                        >으로 <code>event.data</code>를 구성한다.
                      </li>
                      <li>
                        테스트 환경 초기화:
                        <pre><code
                            >const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());</code
                          ></pre>
                      </li>
                      <li>
                        핸들러 테스트 예시:
                        <pre><code
                            >import * as functionsTest from 'firebase-functions-test';
    import &#123; onPostCreate &#125; from '../src/index';

    const testEnv = functionsTest(&#123;
      projectId: 'demo-project',
      databaseURL: 'https://demo-project.firebaseio.com',
    &#125;);

    after(() => testEnv.cleanup());

    it('새 글 생성 시 카테고리 통계를 증가시킨다', async () => &#123;
      const wrapped = testEnv.wrap(onPostCreate);
      const snapshot = testEnv.database.makeDataSnapshot(
        &#123; category: 'community' &#125;,
        '/posts/post123'
      );

      await wrapped(&#123; data: snapshot, params: &#123; postId: 'post123' &#125; &#125;);

      // admin.database().ref().update 호출 여부 검증
      ...
    &#125;);</code
                          ></pre>
                      </li>
                      <li>
                        핵심 원칙 요약:
                        <ul class="sub-list">
                          <li>
                            핸들러와 로직을 명확히 분리하여 테스트 가능성을
                            극대화한다.
                          </li>
                          <li>
                            Unit Test는 순수 함수 단위로, Handler E2E Test는
                            래핑된 핸들러로 수행한다.
                          </li>
                          <li>
                            에뮬레이터 없이도 실환경에 가깝게 검증하기 위해 <code
                              >firebase-functions-test</code
                            >를 적극 활용한다.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <strong>개발 환경 (Development Environment)</strong>
                <ul class="sub-list">
                  <li>
                    <strong>언어:</strong> TypeScript 5.3.3 (strict mode, ESNext
                    target)
                  </li>
                  <li>
                    <strong>프레임워크:</strong> Svelte 5.0.0 (Runes API), SvelteKit
                    2.0.0 (adapter-vercel)
                  </li>
                  <li>
                    <strong>빌드 도구:</strong> Vite 5.0.10 (esbuild, Rollup 4.9.4)
                  </li>
                  <li>
                    <strong>패키지 매니저:</strong> npm 10.2.3 (lockfile version
                    3)
                  </li>
                  <li>
                    <strong>OS:</strong> macOS 14.2 Sonoma (개발), Ubuntu 22.04 (프로덕션)
                  </li>
                  <li>
                    <strong>컨테이너:</strong> Docker 24.0.7, Docker Compose 2.23.0
                  </li>
                  <li>
                    <strong>에디터:</strong> VS Code 1.85 (Extensions: Svelte for
                    VS Code, ESLint, Prettier, Playwright Test)
                  </li>
                  <li>
                    <strong>버전 관리:</strong> Git 2.43.0, GitHub (main/develop
                    브랜치 전략, Conventional Commits)
                  </li>
                </ul>
              </li>

              <li>
                <strong>배포 및 운영 (Deployment & Operations)</strong>
                <ul class="sub-list">
                  <li>
                    <strong>호스팅:</strong> Vercel (프론트엔드, Edge Functions),
                    AWS ECS Fargate (백엔드 API)
                  </li>
                  <li>
                    <strong>CDN:</strong> Cloudflare (캐싱, DDoS 방어, SSL/TLS 1.3)
                  </li>
                  <li>
                    <strong>모니터링:</strong> Sentry (에러 추적, Release tracking),
                    Datadog (APM, Logs, Metrics)
                  </li>
                  <li>
                    <strong>로그 수집:</strong> AWS CloudWatch Logs (retention 30일),
                    ELK Stack (Elasticsearch 8.11, Logstash 8.11, Kibana 8.11)
                  </li>
                  <li>
                    <strong>알림:</strong> PagerDuty (Critical 에러), Slack (Warning/Info
                    로그)
                  </li>
                  <li>
                    <strong>백업:</strong> 데이터베이스 (daily full + hourly incremental),
                    파일 스토리지 (S3 versioning + lifecycle policy)
                  </li>
                </ul>
              </li>
            </ul>

            <div class="highlight-box">
              ✅ <strong
                >개발은 스펙 점수가 90점 이상일 때만 시작 가능하다.</strong
              ><br />
              위와 같은 세밀하고 정밀한 명세가 모든 항목에 포함되어야 90점 이상을
              받을 수 있다.
            </div>

            <div class="code-block" style="margin-top: 1.5rem;">
              <div class="code-header">💡 왜 이렇게 세밀해야 하는가?</div>
              <pre
                style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;">SED의 핵심 원칙은 "AI는 추론하지 않는다"입니다.

    만약 스펙에 "MySQL을 사용한다"라고만 적혀있다면:
    - 어떤 버전? (5.7 vs 8.0 - 문법 차이 존재)
    - 어떤 에디션? (Community vs Enterprise - 기능 차이)
    - 어떤 설정? (Character Set, SQL Mode - 동작 차이)
    - 어디서 실행? (로컬 vs AWS RDS - 접근 방법 차이)

    AI는 이를 추론할 수 없고, 추론해서도 안 됩니다.
    따라서 모든 정보가 명시적으로 스펙에 기록되어야 합니다.

    "완전한 스펙 = 개발자가 직접 개발할 때 알아야 할 모든 정보"

    이것이 SED가 요구하는 스펙의 수준입니다.</pre>
            </div>
          </li>
          <li>
            <strong>스펙 검증</strong>
            <ul class="sub-list">
              <li>
                작성된 스펙은 검증 툴을 통해 점수를 산출하고, <strong
                  >90점 이상</strong
                >이어야만 개발을 진행할 수 있다.
              </li>
              <li>
                점수가 미달될 경우 보완이 필요한 항목을 식별하고 줄거리 및 상세
                스펙 단계로 되돌려 수정한다.
              </li>
              <li>
                검증 결과와 보완 이력을 모두 기록하여, 스펙과 구현 간 추적성을
                유지한다.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="phase-card">
        <h3 class="phase-title">⚙️ 작업 단계 (Execution Phase)</h3>
        <ul class="phase-list">
          <li>AI는 스펙에 정의된 내용만 정확히 구현한다.</li>
          <li>스펙 외의 모든 내용은 무시한다.</li>
          <li>
            사람이 중간에 개입할 경우, 그 변경 사항도 스펙으로 재기록되어야
            한다.
          </li>
          <li>"코드 수정"은 곧 "스펙 업데이트"를 의미한다.</li>
        </ul>
      </div>

      <!-- 검수 단계 -->
      <div class="phase-card">
        <h3 class="phase-title">🔍 검수 단계 (Verification Phase)</h3>
        <ul class="phase-list">
          <li>검수 또한 스펙 기반으로 자율적으로 수행된다.</li>
          <li>테스트 케이스와 기대 결과는 스펙에서 추출된다.</li>
          <li>모든 기능은 "스펙과 일치하는가?"를 기준으로 평가된다.</li>
          <li>검수가 통과되지 않으면, AI는 다음 메시지를 반환한다:</li>
        </ul>
        <div class="code-block">
          <pre><code
              >SpecDeviationError: Implementation diverged from specification on module 'auth'.
Suggested Action: Review and revise spec or code alignment.</code
            ></pre>
        </div>
      </div>

      <!-- 배포 단계 -->
      <div class="phase-card">
        <h3 class="phase-title">🚀 배포 단계 (Deployment Phase)</h3>
        <ul class="phase-list">
          <li>배포는 사람의 개입이 필수이다.</li>
          <li>
            AI는 배포 스크립트, 환경 구성 파일, CI/CD 절차를 자동 생성하지만,<br
            />
            실제 배포 명령은 인간 검증 후 수행된다.
          </li>
        </ul>
      </div>

      <!-- 운영 단계 -->
      <div class="phase-card">
        <h3 class="phase-title">🔁 운영 단계 (Operation Phase)</h3>
        <ul class="phase-list">
          <li>
            스펙에는 "운영 자동화" 내용이 반드시 포함되어야 한다.<br />
            예: 로그 수집, 에러 리포팅, 업데이트 시나리오 등.
          </li>
          <li>
            AI는 운영 단계에서 모니터링·리포팅·자동 수정 제안 역할을 수행한다.
          </li>
          <li>
            새로운 요구사항 발생 시, 스펙 업데이트 → 스코어 재평가 → 재개발의
            순서를 따른다.
          </li>
        </ul>
      </div>
    </div>

    <!-- 철학 요약 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 4. 철학 요약</h2>
      <div class="table-container">
        <table class="philosophy-table">
          <thead>
            <tr>
              <th>구분</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>철학</strong></td>
              <td
                >스펙이 곧 진리(Spec is the Truth). 개발은 진리를 집행하는 행위.</td
              >
            </tr>
            <tr>
              <td><strong>AI 역할</strong></td>
              <td>판단하지 않는다. 오직 스펙을 해석 없이 실행한다.</td>
            </tr>
            <tr>
              <td><strong>개발자 역할</strong></td>
              <td>완전하고 명확한 스펙을 만드는 일에 집중한다.</td>
            </tr>
            <tr>
              <td><strong>품질 보증</strong></td>
              <td>테스트 및 검수는 모두 스펙 기반 자동화로 수행된다.</td>
            </tr>
            <tr>
              <td><strong>결과물 특성</strong></td>
              <td>일관성, 검증 가능성, 유지보수 용이성, 예측 가능한 품질.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 표어 및 핵심 문장 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 5. 표어 및 핵심 문장</h2>
      <div class="slogan-container">
        <div class="slogan-card">
          <div class="slogan-icon">🧠</div>
          <div class="slogan-text">"AI does not imagine. It executes."</div>
        </div>
        <div class="slogan-card">
          <div class="slogan-icon">📜</div>
          <div class="slogan-text">
            "Spec is the contract. Spec is the code."
          </div>
        </div>
        <div class="slogan-card">
          <div class="slogan-icon">⚙️</div>
          <div class="slogan-text">
            "No assumption. No improvisation. Only implementation."
          </div>
        </div>
      </div>
    </div>

    <!-- SED의 과제 섹션 -->
    <div class="section challenge-section">
      <h2 class="section-title">⚠️ SED의 과제</h2>
      <div class="content">
        <p>
          SED의 가장 큰 과제는 스펙이 정밀하고 완전해야하므로, <strong
            >스펙의 크기 또한 커진다는 것</strong
          >이 문제입니다. 이는 곧 <strong>토큰량이 커진다</strong>는 것을
          의미합니다.
        </p>

        <p>
          완벽한 스펙을 만들기 위해서는 책 한 권 분량의 상세한 명세를 작성해야
          하며, 이를 LLM에 주입하기 위해서는 상당한 양의 토큰이 필요합니다.
        </p>

        <div class="challenge-box">
          <h3 class="challenge-title">💡 해결 방안</h3>
          <p>
            이 문제를 해결하기 위해서는 <strong>단계별로 스펙을 분리</strong
            >하여 LLM에게 작업을 시켜야 합니다.
          </p>
          <ul class="challenge-list">
            <li>전체 스펙을 논리적 단위로 분할 (모듈별, 기능별, 레이어별)</li>
            <li>각 단계마다 필요한 스펙만 LLM에게 전달</li>
            <li>단계별 결과물을 검증하고 다음 단계로 진행</li>
            <li>스펙 문서 자체를 계층적 구조로 설계</li>
            <li>재사용 가능한 공통 스펙 라이브러리 구축</li>
          </ul>
        </div>

        <p>
          이러한 접근을 통해 SED의 철학을 유지하면서도 실제 프로젝트에 적용
          가능한 형태로 발전시킬 수 있습니다.
        </p>
      </div>
    </div>

    <!-- 마무리 섹션 -->
    <div class="conclusion">
      <p>
        이제 "Spec-Exact Development (SED)"는 단순한 프롬프트 개발을 넘어<br />
        명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한
        <strong>AI 기반 개발 표준 철학</strong>으로 정의됩니다.
      </p>
    </div>
  </div>
</div>

<style>
  /* 메인 컨테이너 */
  .sed-page {
    position: relative;
    min-height: 100vh;
    background: #f8f9fa;
    padding: 2rem 1.5rem;
  }

  /* 배경 그라디언트 */
  .background-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at top right,
        rgba(99, 102, 241, 0.1),
        transparent 50%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(168, 85, 247, 0.08),
        transparent 50%
      );
    pointer-events: none;
  }

  /* 컨테이너 */
  .container {
    position: relative;
    max-width: 56rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* 헤더 섹션 */
  .header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0 0 1rem 0;
    letter-spacing: -0.03em;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.125rem;
    font-style: italic;
    color: #64748b;
    margin: 0;
    font-weight: 500;
  }

  /* 섹션 */
  .section {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
  }

  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
  }

  /* 콘텐츠 */
  .content p {
    font-size: 1rem;
    color: #334155;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .content strong {
    color: #1e293b;
    font-weight: 600;
  }

  /* 인용구 */
  .quote {
    background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
    border-left: 4px solid #6366f1;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #4338ca;
    line-height: 1.6;
  }

  .quote-sub {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #6366f1;
  }

  /* 원칙 카드 */
  .principle-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .principle-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 1rem 0;
  }

  .principle-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .principle-list > li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    color: #475569;
    line-height: 1.7;
  }

  .principle-list > li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .sub-list {
    list-style: none;
    padding: 0;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  .sub-list li {
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    color: #64748b;
    font-size: 0.95rem;
  }

  .sub-list li::before {
    content: "◦";
    position: absolute;
    left: 0;
    color: #94a3b8;
  }

  /* 코드 블록 */
  .code-block {
    background: #1e293b;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 1rem;
  }

  .code-header {
    background: #334155;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #94a3b8;
    font-weight: 500;
  }

  .code-block pre {
    margin: 0;
    padding: 1rem;
    overflow-x: auto;
  }

  .code-block code {
    font-family: "Courier New", monospace;
    font-size: 0.875rem;
    color: #e2e8f0;
    line-height: 1.6;
  }

  /* 하이라이트 박스 */
  .highlight-box {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border: 2px solid #22c55e;
    border-radius: 0.5rem;
    padding: 1rem 1.25rem;
    margin-top: 1rem;
    font-size: 1rem;
    color: #15803d;
    font-weight: 600;
  }

  /* 단계 카드 */
  .phase-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .phase-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 1rem 0;
  }

  .phase-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .phase-list > li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    color: #475569;
    line-height: 1.7;
  }

  .phase-list > li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: bold;
  }

  .phase-steps {
    list-style: decimal;
    margin: 1rem 0 0 1.25rem;
    padding: 0;
    color: #1f2937;
  }

  .phase-steps > li {
    margin-bottom: 1.75rem;
  }

  .phase-steps > li:last-child {
    margin-bottom: 0;
  }

  .phase-step-description {
    margin: 0.75rem 0 0.5rem 0;
    color: #475569;
    line-height: 1.6;
  }

  /* 테이블 */
  .table-container {
    overflow-x: auto;
    margin-top: 1rem;
  }

  .philosophy-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  .philosophy-table thead {
    background: #f1f5f9;
  }

  .philosophy-table th {
    padding: 0.875rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #0f172a;
    border-bottom: 2px solid #e2e8f0;
  }

  .philosophy-table td {
    padding: 0.875rem 1rem;
    color: #475569;
    line-height: 1.6;
    border-bottom: 1px solid #e2e8f0;
  }

  .philosophy-table tbody tr:hover {
    background: #f8fafc;
  }

  /* 슬로건 컨테이너 */
  .slogan-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .slogan-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
    border: 1px solid #e9d5ff;
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
  }

  .slogan-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .slogan-text {
    font-size: 1.125rem;
    font-weight: 600;
    color: #6b21a8;
    font-style: italic;
  }

  /* 마무리 섹션 */
  .conclusion {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border: 1px solid #bfdbfe;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
  }

  .conclusion p {
    font-size: 1.125rem;
    color: #1e40af;
    line-height: 1.8;
    margin: 0;
  }

  /* 탄생 배경 섹션 */
  .origin-section {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #fbbf24;
  }

  .highlight-text {
    text-align: center;
    font-size: 1.25rem;
    color: #b45309;
    margin: 1.5rem 0;
  }

  .problem-list,
  .solution-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 1.5rem 0;
  }

  .problem-list li,
  .solution-list li {
    padding: 0.5rem 0.75rem 0.5rem 2rem;
    margin-bottom: 0.5rem;
    position: relative;
    color: #1f2937;
    line-height: 1.6;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
  }

  .problem-list li::before {
    content: "❌";
    position: absolute;
    left: 0.5rem;
    font-size: 1rem;
  }

  .solution-list li::before {
    content: "✅";
    position: absolute;
    left: 0.5rem;
    font-size: 1rem;
  }

  /* SED의 과제 섹션 */
  .challenge-section {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 2px solid #f87171;
  }

  .challenge-box {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .challenge-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 1rem 0;
  }

  .challenge-list {
    list-style: none;
    padding: 0;
    margin: 0.75rem 0;
  }

  .challenge-list li {
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    color: #475569;
    line-height: 1.7;
  }

  .challenge-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #f59e0b;
    font-weight: bold;
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    .sed-page {
      padding: 1.5rem 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .section {
      padding: 1.5rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .slogan-card {
      flex-direction: column;
      text-align: center;
    }

    .slogan-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 640px) {
    .title {
      font-size: 1.75rem;
    }

    .section {
      padding: 1.25rem;
    }

    .quote {
      font-size: 1rem;
      padding: 1rem;
    }

    .code-block code {
      font-size: 0.8125rem;
    }

    .conclusion p {
      font-size: 1rem;
    }
  }
</style>
