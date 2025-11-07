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

    <!-- 개요 섹션 -->
    <div class="section intro-section">
      <h2 class="section-title">💡 개요</h2>
      <div class="content">
        <p>
          <strong>SEDAI</strong>는 AI가 명세(Specification)를 벗어나지 않고 정확히 따라
          솔루션을 구현하는 개발 방법론입니다.
        </p>

        <p>
          <strong>2025년 11월 4일 송재호</strong>가 만든 이 방식은 모호한 요구사항 대신
          <strong>완전하고 정밀한 설계도</strong>를 요구함으로써 기존 AI 보조 개발의 한계를 해결합니다.
        </p>

        <div class="info-box" style="margin-top: 1.5rem;">
          <strong>📦 공식 레포지토리:</strong>
          <a
            href="https://github.com/thruthesky/sedai"
            target="_blank"
            rel="noopener noreferrer"
            style="color: #2563eb; text-decoration: underline; margin-left: 0.5rem;"
          >
            https://github.com/thruthesky/sedai
          </a>
        </div>
      </div>
    </div>

    <!-- 설치 및 빠른 시작 섹션 -->
    <div class="section">
      <h2 class="section-title">🚀 설치 및 빠른 시작</h2>
      <div class="content">
        <p>NPM을 통해 전역 설치하거나 npx로 즉시 실행할 수 있습니다:</p>

        <div class="code-block">
          <div class="code-header">설치 및 실행</div>
          <pre><code>npm install -g sedai
# 또는
npx sedai --help
npx spec init</code></pre>
        </div>
      </div>
    </div>

    <!-- 핵심 원칙 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 핵심 원칙</h2>

      <div class="principle-card">
        <h3 class="principle-title">1. Spec-Exactness (명세 정확성)</h3>
        <ul class="principle-list">
          <li>개발은 오직 명세에 정의된 내용만 구현합니다.</li>
          <li>불완전한 명세는 즉시 "Spec Error"를 발생시키고 작업을 중단합니다.</li>
          <li>AI는 의도를 추론하거나 해석할 수 없으며, 오직 작성된 지시사항만 실행합니다.</li>
        </ul>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">2. Spec Completeness Scoring (명세 완성도 점수)</h3>
        <ul class="principle-list">
          <li>
            AI는 개발 시작 전 명세를 0~100점으로 평가합니다.
          </li>
          <li>
            작업은 <strong>90점 이상</strong>일 때만 진행됩니다.
          </li>
          <li>
            평가 기준:
            <ul class="sub-list">
              <li>데이터베이스 설계의 완전성</li>
              <li>비즈니스 로직의 명확성</li>
              <li>UI/UX 요구사항의 구체성</li>
              <li>테스트 계획의 상세도</li>
              <li>배포 및 운영 환경 정의</li>
            </ul>
          </li>
        </ul>

        <div class="code-block" style="margin-top: 1rem;">
          <div class="code-header">예시: 명세 점수 부족 시 에러</div>
          <pre><code>SpecError: Insufficient specification to execute.
Reason: Database schema, authentication flow, or encryption detail missing.
Required Spec Score: ≥90
Current Score: 42</code></pre>
        </div>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">3. Specification Authority (명세의 권위)</h3>
        <ul class="principle-list">
          <li>모호한 문장은 무시되며 구현되지 않습니다.</li>
          <li>명세는 법이 되지만, 개발자는 편집 권한을 유지합니다.</li>
          <li>AI는 업데이트를 제안할 수 있지만 일방적으로 명세를 수정할 수 없습니다.</li>
        </ul>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">4. What Must Be Specified (명세해야 할 것들)</h3>
        <p>완전한 명세는 다음을 명시적으로 문서화해야 합니다:</p>
        <ul class="principle-list">
          <li><strong>클래스 및 함수 이름:</strong> 정확한 식별자</li>
          <li><strong>구현 세부사항:</strong> 알고리즘, 계산식, 비즈니스 로직</li>
          <li><strong>데이터 구조:</strong> 변수명, 타입, 데이터 흐름</li>
          <li><strong>제어 흐름:</strong> 조건문, 반복문, 에러 처리</li>
          <li>
            <strong>완전한 소스 코드:</strong> 정확한 패턴을 보여주는 실행 가능한 예제
          </li>
        </ul>
      </div>
    </div>

    <!-- 개발 프로세스 단계 섹션 -->
    <div class="section">
      <h2 class="section-title">🔹 개발 프로세스 단계</h2>

      <!-- 준비 단계 -->
      <div class="phase-card">
        <h3 class="phase-title">🧱 Phase 1: 준비 단계 (Preparation)</h3>

        <h4 class="subsection-title">📝 명세 줄거리 작성</h4>
        <ul class="phase-list">
          <li>전체 및 상세 줄거리 초안 작성 (최소 각각 ~100개 항목)</li>
          <li>완전한 SNS 서비스 예시: ~10,000 토큰 (≈14페이지)</li>
          <li>상세 명세는 줄거리보다 약 20배 더 길어야 함</li>
        </ul>

        <h4 class="subsection-title">📋 상세 명세 작성</h4>
        <p class="phase-step-description">
          모든 줄거리 항목을 설계도 수준의 세부사항으로 변환하되, 중복을 제거하고
          필수 요소만 유지합니다.
        </p>
      </div>

      <!-- Phase 2: 주요 명세 구성 요소 -->
      <div class="phase-card">
        <h3 class="phase-title">⚙️ Phase 2: 주요 명세 구성 요소</h3>

        <div class="spec-component">
          <h4 class="component-title">💾 데이터베이스 명세</h4>
          <p>
            DBMS 버전, 호스팅 환경, OS, 네트워크 구성, 접근 계정, SQL 설정, 테이블
            구조, 인덱스, 외래키, 트랜잭션 격리 수준, 백업 정책, 유틸리티를
            포함해야 합니다.
          </p>
        </div>

        <div class="spec-component">
          <h4 class="component-title">🎯 기능 명세</h4>
          <p>
            사용자 등록, 게시판, 결제 처리, 알림 등에 대한 상세 요구사항—API, 유효성
            검증 규칙, 암호화 방법, 에러 처리, 서드파티 통합을 포함합니다.
          </p>
        </div>

        <div class="spec-component">
          <h4 class="component-title">🛣️ 라우팅 명세</h4>
          <p>
            모든 경로는 명시적이어야 합니다 (예: <code>/auth/signup</code>,
            <code>/dashboard</code>). 리다이렉트 조건, 예외 흐름, 접근 제어와 함께
            완전한 여정 맵을 문서화합니다.
          </p>
        </div>

        <div class="spec-component">
          <h4 class="component-title">⚡ 함수 명세</h4>
          <p>각 함수는 다음을 요구합니다:</p>
          <ul class="sub-list">
            <li>정확한 이름</li>
            <li>명시적인 역할/책임</li>
            <li>파라미터 선언 (이름, 타입, 필수 여부)</li>
            <li>반환값 구조</li>
            <li>파일 위치</li>
            <li>호출 위치 및 실행 시점</li>
            <li>완전한 워크플로우 단계</li>
            <li>에러 처리 시나리오</li>
          </ul>

          <div class="code-block" style="margin-top: 1rem;">
            <div class="code-header">함수 명세 예시</div>
            <pre style="white-space: pre-wrap; color: #cbd5e1; line-height: 1.8;">함수명: handleLikeCreate
역할: 좋아요 추가 시 likeCount 증가 및 통계 업데이트
파라미터: likeId: string (필수)
반환값: Promise&lt;&#123; success: boolean; type?: string; error?: string &#125;&gt;
위치: /firebase/functions/src/handlers/like.handler.ts
호출: Firebase onCreate 트리거에서 자동 실행
워크플로우:
  1. likeId 파싱
  2. type이 'post'인 경우 게시글의 likeCount +1
  3. type이 'comment'인 경우 댓글의 likeCount +1
  4. 전역 통계 업데이트</pre>
          </div>
        </div>

        <div class="spec-component">
          <h4 class="component-title">🎨 UI/UX 요구사항</h4>
          <ul class="sub-list">
            <li>디자인 시스템 및 색상 사양</li>
            <li>타이포그래피 및 반응형 브레이크포인트</li>
            <li>치수가 포함된 레이아웃 컴포넌트</li>
            <li>사용자 플로우 문서</li>
            <li>접근성 표준 (WCAG 2.1 AA)</li>
            <li>타이밍이 포함된 애니메이션 사양</li>
          </ul>
        </div>

        <div class="spec-component highlight-component">
          <h4 class="component-title">🧪 테스트 명세 (가장 중요)</h4>
          <ul class="sub-list">
            <li>테스트 프레임워크 버전 (Vitest, Testing Library, Playwright)</li>
            <li>환경 설정 (Docker, CI/CD 파이프라인 구성)</li>
            <li>Unit 테스트 목표 (≥80% 커버리지, 최소 200개 케이스)</li>
            <li>여러 브라우저에서 E2E 시나리오</li>
            <li>성능 벤치마크 (LCP &lt; 2.5s, FID &lt; 100ms)</li>
            <li>보안 테스트 프로토콜</li>
            <li>CI/CD 파이프라인 단계 및 시간 제한</li>
            <li>테스트 자동화 및 결과 리포팅</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 지적 재산권 섹션 -->
    <div class="section ip-section">
      <h2 class="section-title">©️ 지적 재산권</h2>
      <div class="content">
        <p>
          AI가 공개적으로 사용 가능한 SED 명세를 엄격히 따를 때:
        </p>
        <ul class="principle-list">
          <li>
            <strong>저작권은 명세 작성자에게 귀속</strong>되며, AI에게 귀속되지
            않습니다.
          </li>
          <li>
            근거: AI는 창작적 결정을 내리지 않으므로, 지적 재산권은 명세 자체에서
            파생됩니다.
          </li>
          <li>
            명세를 작성한 작성자가 구현 소스와 관계없이 창작자입니다.
          </li>
        </ul>

        <blockquote class="quote">
          "명세를 작성한 사람이 창작자입니다. AI는 단지 도구일 뿐입니다."
        </blockquote>
      </div>
    </div>

    <!-- 명세 파일 및 조직 섹션 -->
    <div class="section">
      <h2 class="section-title">📁 명세 파일 및 조직</h2>

      <div class="principle-card">
        <h3 class="principle-title">파일 명명 패턴</h3>
        <div class="code-block">
          <pre><code>&lt;project-name&gt;-&lt;module-name&gt;-&lt;function-name&gt;.md</code></pre>
        </div>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">YAML 헤더 템플릿</h3>
        <div class="code-block">
          <pre><code>---
name: 프로젝트 이름 (영문, 숫자, 하이픈, ≤255자)
version: 시맨틱 버저닝
description: 프로젝트 개요 (≤4096자)
author: 작성자 이름 (≤64자)
email: 작성자 이메일 (≤64자)
license: MIT, GPL, SED Specification License 등
step: 실행 순서 (10, 20, 30...)
dependencies: 필요한 다른 명세들
---</code></pre>
        </div>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">주요 포인트</h3>
        <ul class="principle-list">
          <li>모든 명세는 <code>./specs</code> 디렉토리에 있어야 함</li>
          <li>프로젝트 내 모든 파일에서 동일한 <code>name</code> 값 필요</li>
          <li>step 필드는 실행 순서 정의 (낮은 숫자가 먼저 실행)</li>
          <li>동일한 step 값을 가진 여러 명세는 동시에 실행됨</li>
          <li>Dependencies는 로컬 또는 원격 명세를 참조 가능</li>
        </ul>
      </div>

      <div class="principle-card">
        <h3 class="principle-title">라이센싱</h3>
        <p>
          SED Specification License는 작성자 저작권을 보호하면서 적절한 사용을
          허용합니다. 작성자는 명세 파일마다 MIT, GPL, 독점 라이센스 또는 기타
          라이센스를 선택할 수 있습니다.
        </p>
      </div>
    </div>

    <!-- CLI 명령어 섹션 -->
    <div class="section">
      <h2 class="section-title">⌨️ CLI 명령어</h2>

      <div class="code-block">
        <div class="code-header">사용 가능한 명령어</div>
        <pre><code>spec init [options]          # 새 프로젝트 초기화
  -n, --name &lt;name&gt;         # 프로젝트 이름
  -s, --summary &lt;summary&gt;    # 설명
  -a, --author &lt;author&gt;      # 작성자 이름
  -e, --email &lt;email&gt;        # 작성자 이메일

spec doctor [options]        # 명세 검증 (곧 출시)
spec validate &lt;file&gt;         # 단일 파일 검증 (곧 출시)
spec score &lt;file&gt;            # 명세 완성도 계산 (곧 출시)</code></pre>
      </div>

      <div class="info-box" style="margin-top: 1.5rem;">
        <strong>💡 현재 상태:</strong><br />
        - <strong>완전 구현:</strong> 대화형 및 비대화형 모드의 <code
          >spec init</code
        > 명령<br />
        - <strong>곧 출시:</strong> <code>spec doctor</code>,
        <code>spec validate</code>, <code>spec score</code> 명령
      </div>
    </div>

    <!-- 핵심 SED 개념 섹션 -->
    <div class="section philosophy-section">
      <h2 class="section-title">🔹 핵심 철학</h2>

      <blockquote class="quote">
        "If the spec is wrong, the product is wrong — by design."<br />
        <span class="quote-sub"
          >(명세가 틀리면 제품도 틀립니다 — 설계에 의해)</span
        >
      </blockquote>

      <div class="content">
        <p>
          이것은 SED의 근본적인 균형을 반영합니다: 완벽한 명세 정밀도는 일관되고
          예측 가능한 구현을 보장하지만, 모든 모호함을 제거해야 하는 부담을 명세
          작성자에게 전가합니다.
        </p>

        <div class="highlight-box" style="margin-top: 1.5rem;">
          <strong>명세 소유권 철학:</strong><br />
          다른 사람의 명세를 수정할 수 있지만, 최종 명세는 여러분의 이해와 가치를
          반영해야 합니다. 인간 의사결정자는 무엇이 만들어질지에 대한 책임을
          유지합니다.
        </div>
      </div>
    </div>

    <!-- 표어 섹션 -->
    <div class="section">
      <h2 class="section-title">💬 핵심 표어</h2>
      <div class="slogan-container">
        <div class="slogan-card">
          <div class="slogan-icon">🧠</div>
          <div class="slogan-text">
            "AI does not imagine. It executes."<br />
            <span class="slogan-sub">(AI는 상상하지 않는다. 실행할 뿐이다.)</span>
          </div>
        </div>
        <div class="slogan-card">
          <div class="slogan-icon">📜</div>
          <div class="slogan-text">
            "Spec is the contract. Spec is the code."<br />
            <span class="slogan-sub">(명세는 계약이다. 명세는 코드다.)</span>
          </div>
        </div>
        <div class="slogan-card">
          <div class="slogan-icon">⚙️</div>
          <div class="slogan-text">
            "No assumption. No improvisation. Only implementation."<br />
            <span class="slogan-sub"
              >(가정 없음. 즉흥 없음. 오직 구현만.)</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 마무리 섹션 -->
    <div class="conclusion">
      <p>
        <strong>Spec-Exact Development (SED)</strong>는 단순한 프롬프트 개발을
        넘어<br />
        명세의 완전성, 자동 검증, 절대적 일관성을 중심으로 한<br />
        <strong>AI 기반 개발 표준 철학</strong>입니다.
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

  .intro-section {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #fbbf24;
  }

  .ip-section {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border: 2px solid #3b82f6;
  }

  .philosophy-section {
    background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
    border: 2px solid #6366f1;
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
    line-height: 1.7;
  }

  /* 정보 박스 */
  .info-box {
    background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
    border: 1px solid #fbbf24;
    border-radius: 0.75rem;
    padding: 1.5rem;
    line-height: 1.7;
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

  .subsection-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #334155;
    margin: 1.5rem 0 0.75rem 0;
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

  .phase-step-description {
    margin: 0.75rem 0 1rem 0;
    color: #475569;
    line-height: 1.6;
  }

  /* 명세 컴포넌트 */
  .spec-component {
    background: #fafafa;
    border-left: 3px solid #94a3b8;
    border-radius: 0.5rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.25rem;
  }

  .spec-component.highlight-component {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-left: 3px solid #f59e0b;
  }

  .component-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
  }

  .spec-component p {
    margin: 0 0 0.75rem 0;
    color: #475569;
    line-height: 1.7;
  }

  .spec-component code {
    background: rgba(0, 0, 0, 0.05);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-family: "Courier New", monospace;
    font-size: 0.9rem;
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
    line-height: 1.6;
  }

  .slogan-sub {
    display: block;
    font-size: 0.95rem;
    margin-top: 0.25rem;
    color: #7c3aed;
    font-weight: 500;
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
