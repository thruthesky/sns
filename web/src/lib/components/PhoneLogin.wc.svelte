<svelte:options customElement="phone-login" />

<script lang="ts">
  /**
   * Phone Login Web Component
   *
   * Firebase 전화번호 인증을 사용한 로그인 컴포넌트입니다.
   *
   * 기능:
   * - 국가 번호 선택 (필리핀, 한국, 중국, 일본, 미국)
   * - 전화번호 입력
   * - SMS 인증 코드 전송
   * - SMS 코드 입력 및 로그인
   *
   * 이벤트:
   * - login-success: 로그인 성공 시 발생
   * - login-error: 로그인 실패 시 발생
   */

  import { auth } from "../utils/firebase.js";
  import {
    signInWithPhoneNumber,
    RecaptchaVerifier,
    type ConfirmationResult,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import { Phone, Send, Check } from "lucide-svelte";

  /**
   * Google reCAPTCHA 전역 객체 타입 선언
   * reCAPTCHA는 외부 스크립트에서 로드되며 window.grecaptcha 객체를 전역으로 노출합니다.
   *
   * 참고: Svelte 컴포넌트에서는 declare global을 사용할 수 없으므로
   * window.grecaptcha 사용 시 타입 단언(@ts-expect-error)을 사용합니다.
   */
  interface GreCaptcha {
    reset: (widgetId: number) => void;
    render: (container: string | HTMLElement, parameters: any) => number;
    execute: (widgetId: number) => void;
    getResponse: (widgetId: number) => string;
  }

  /**
   * 국가 코드 타입 정의
   */
  type CountryCode = {
    code: string;
    name: string;
    flag: string;
  };

  /**
   * 인증 단계 타입
   */
  type AuthStep = "phone" | "code";

  /**
   * 국가 코드 목록
   * 필리핀, 한국, 중국, 일본, 미국
   */
  const COUNTRY_CODES: CountryCode[] = [
    { code: "+63", name: "필리핀 (Philippines)", flag: "🇵🇭" },
    { code: "+82", name: "한국 (Korea)", flag: "🇰🇷" },
    { code: "+86", name: "중국 (China)", flag: "🇨🇳" },
    { code: "+81", name: "일본 (Japan)", flag: "🇯🇵" },
    { code: "+1", name: "미국 (USA)", flag: "🇺🇸" },
  ];

  /**
   * 상태 관리
   */
  let selectedCountryCode = $state<string>("+82"); // 기본값: 한국
  let phoneNumber = $state<string>(""); // 전화번호 (국가 코드 제외)
  let verificationCode = $state<string>(""); // SMS 인증 코드
  let step = $state<AuthStep>("phone"); // 'phone' | 'code'
  let loading = $state<boolean>(false);
  let error = $state<string>("");
  let recaptchaVerifier = $state<RecaptchaVerifier | null>(null);
  let confirmationResult = $state<ConfirmationResult | null>(null);
  let recaptchaWidgetId = $state<number | undefined>(undefined); // reCAPTCHA 위젯 ID 저장
  let recaptchaContainer = $state<HTMLElement | null>(null); // reCAPTCHA 컨테이너 DOM 요소 참조

  /**
   * reCAPTCHA 초기화
   * PHP 코드의 setupRecaptcha 로직을 Svelte로 변환
   *
   * 중요: Web Component의 Shadow DOM에서는 ID로 요소를 찾을 수 없으므로
   * DOM 요소 참조를 직접 전달해야 합니다.
   * @returns reCAPTCHA 위젯 ID를 반환하는 Promise
   */
  function setupRecaptcha(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        // reCAPTCHA 컨테이너가 없으면 초기화 불가
        if (!recaptchaContainer) {
          const containerError = new Error(
            "reCAPTCHA 컨테이너를 찾을 수 없습니다."
          );
          console.error(containerError);
          error = "reCAPTCHA 초기화에 실패했습니다.";
          reject(containerError);
          return;
        }

        // 기존 reCAPTCHA 인스턴스가 있으면 정리
        if (recaptchaVerifier) {
          // 이미 렌더링된 경우 reset만 수행
          // @ts-expect-error - grecaptcha는 Google reCAPTCHA 외부 스크립트에서 제공하는 전역 객체
          if (
            recaptchaWidgetId !== undefined &&
            typeof window.grecaptcha !== "undefined"
          ) {
            try {
              // @ts-expect-error - grecaptcha.reset()은 Google reCAPTCHA API 메서드
              window.grecaptcha.reset(recaptchaWidgetId);
              console.log("reCAPTCHA reset completed");
              resolve(recaptchaWidgetId);
              return;
            } catch (e) {
              console.warn("Failed to reset reCAPTCHA:", e);
            }
          }

          // reset이 실패하면 clear 시도
          try {
            recaptchaVerifier.clear();
            recaptchaVerifier = null;
            recaptchaWidgetId = undefined;
          } catch (e) {
            console.warn("Failed to clear reCAPTCHA:", e);
          }
        }

        // 새 reCAPTCHA 인스턴스 생성 - Light DOM 컨테이너의 ID를 사용하여 참조
        // invisible reCAPTCHA 설정: 사용자에게 보이지 않으며, 자동으로 백그라운드에서 검증됨
        // Google reCAPTCHA는 document.getElementById()를 사용하므로 Light DOM의 컨테이너가 필요
        recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer.id, {
          size: "invisible", // invisible 모드 활성화 - 사용자 상호작용 없이 자동 검증
          callback: () => {
            // reCAPTCHA 통과 시 자동 호출 (토큰 발급)
            console.log("reCAPTCHA verified (invisible mode)");
          },
          "expired-callback": () => {
            // 토큰 만료 시 호출: reset 또는 재생성
            console.warn("reCAPTCHA expired. Resetting...");
            // @ts-expect-error - grecaptcha는 Google reCAPTCHA 외부 스크립트에서 제공하는 전역 객체
            if (
              typeof window.grecaptcha !== "undefined" &&
              recaptchaWidgetId !== undefined
            ) {
              // 가장 빠른 방법: 위젯 리셋
              // @ts-expect-error - grecaptcha.reset()은 Google reCAPTCHA API 메서드
              window.grecaptcha.reset(recaptchaWidgetId);
            } else {
              // 상황에 따라 상태가 꼬일 수 있으므로, 안전하게 재생성
              setupRecaptcha();
            }
          },
        });

        // 사전 렌더링하여, 첫 클릭 지연 줄이기
        recaptchaVerifier
          .render()
          .then((widgetId) => {
            recaptchaWidgetId = widgetId;
            console.log("✅ reCAPTCHA 렌더링 성공!");
            console.log("  - Widget ID:", widgetId);
            console.log("  - 컨테이너 ID:", recaptchaContainer?.id);
            console.log("  - 현재 도메인:", window.location.hostname);
            resolve(widgetId);
          })
          .catch((renderError) => {
            console.error("❌ reCAPTCHA 렌더링 실패!");
            console.error("  - 에러:", renderError);
            console.error("  - 에러 코드:", renderError.code);
            console.error("  - 에러 메시지:", renderError.message);
            console.error("  - 현재 도메인:", window.location.hostname);
            console.error("  - 컨테이너 ID:", recaptchaContainer?.id);
            error = "reCAPTCHA 초기화에 실패했습니다.";
            reject(renderError);
          });
      } catch (e) {
        console.error("reCAPTCHA 초기화 실패:", e);
        error = "reCAPTCHA 초기화에 실패했습니다.";
        reject(e);
      }
    });
  }

  /**
   * 컴포넌트 마운트 시 초기화
   */
  onMount(() => {
    // 🔍 디버깅: 현재 환경 정보 출력
    console.log("=== Phone Login Debug Info ===");
    console.log("현재 도메인:", window.location.hostname);
    console.log("현재 전체 URL:", window.location.href);
    console.log("Firebase Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
    console.log("Firebase Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
    console.log("reCAPTCHA 스크립트 로드:", typeof window.grecaptcha !== "undefined");
    console.log("==============================");

    // Light DOM(document.body)에 reCAPTCHA 컨테이너 생성
    // Web Component의 Shadow DOM 외부에 배치하여 Google reCAPTCHA가 접근 가능하도록 함
    // Google reCAPTCHA는 document.getElementById()를 사용하므로 Light DOM 필수
    const lightDomContainer = document.createElement("div");
    lightDomContainer.id =
      "recaptcha-container-" + Math.random().toString(36).substr(2, 9);
    lightDomContainer.className = "recaptcha-container-light-dom";
    lightDomContainer.style.cssText = `
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: auto;
      height: auto;
      pointer-events: none;
    `;
    document.body.appendChild(lightDomContainer);

    // recaptchaContainer를 Light DOM의 요소로 설정
    recaptchaContainer = lightDomContainer;

    console.log("🔍 reCAPTCHA 컨테이너 생성:", lightDomContainer.id);

    // reCAPTCHA 초기화 실행
    setupRecaptcha();

    // 정리: 컴포넌트 언마운트 시 Light DOM 요소 제거
    return () => {
      if (lightDomContainer && lightDomContainer.parentNode) {
        lightDomContainer.parentNode.removeChild(lightDomContainer);
      }
    };
  });

  /**
   * 전화번호 형식 검증
   * @param number - 전화번호 (국가 코드 제외)
   * @returns 유효하면 true, 아니면 false
   */
  function isValidPhoneNumber(number: string): boolean {
    // 숫자만 포함되어야 하며, 6~15자리
    const phoneRegex = /^[0-9]{6,15}$/;
    return phoneRegex.test(number);
  }

  /**
   * SMS 인증 코드 전송
   * Firebase signInWithPhoneNumber 호출
   *
   * invisible reCAPTCHA 동작 방식:
   * - signInWithPhoneNumber 호출 시 자동으로 reCAPTCHA 검증이 시작됨
   * - 사용자에게는 보이지 않으며, 백그라운드에서 자동으로 검증됨
   * - 검증이 성공하면 SMS가 전송됨
   * - 의심스러운 활동이 감지되면 사용자에게 챌린지(이미지 선택 등)가 표시될 수 있음
   */
  async function sendVerificationCode(): Promise<void> {
    error = "";

    // 전화번호 검증
    if (!isValidPhoneNumber(phoneNumber)) {
      error = "올바른 전화번호를 입력해주세요 (6-15자리 숫자)";
      return;
    }

    loading = true;

    try {
      // 완전한 전화번호 생성 (국가 코드 + 전화번호)
      const fullPhoneNumber: string = `${selectedCountryCode}${phoneNumber}`;

      console.log("📱 SMS 전송 시작...");
      console.log("  - 전화번호:", fullPhoneNumber);
      console.log("  - 현재 도메인:", window.location.hostname);
      console.log("  - reCAPTCHA 준비:", recaptchaVerifier !== null);
      console.log("  - reCAPTCHA Widget ID:", recaptchaWidgetId);

      // Firebase Phone Auth - SMS 전송
      // invisible reCAPTCHA는 이 함수 호출 시 자동으로 실행되어 백그라운드에서 검증됨
      confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhoneNumber,
        recaptchaVerifier!
      );

      console.log("✅ SMS 전송 성공! (reCAPTCHA 검증 완료)");

      // SMS 코드 입력 단계로 이동
      step = "code";
    } catch (e: any) {
      console.error("❌ SMS 전송 실패!");
      console.error("  - 에러 코드:", e.code);
      console.error("  - 에러 메시지:", e.message);
      console.error("  - 현재 도메인:", window.location.hostname);
      console.error("  - Firebase Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
      console.error("  - 전체 에러 객체:", e);

      // 에러 메시지 처리
      if (e.code === "auth/invalid-phone-number") {
        error = "잘못된 전화번호 형식입니다.";
      } else if (e.code === "auth/too-many-requests") {
        error = "너무 많은 요청이 발생했습니다. 나중에 다시 시도해주세요.";
      } else if (e.code === "auth/captcha-check-failed") {
        error = `reCAPTCHA 검증 실패: 도메인이 Firebase Console에 등록되어 있는지 확인해주세요. (현재 도메인: ${window.location.hostname})`;
        console.error("🔥 reCAPTCHA 에러 해결 방법:");
        console.error("  1. Firebase Console → Authentication → Settings → Authorized domains");
        console.error(`  2. '${window.location.hostname}' 도메인을 추가하세요`);
        console.error("  3. reCAPTCHA 버전이 v2인지 확인하세요 (Sign-in method → Phone)");
      } else {
        error = `SMS 전송 실패: ${e.message}`;
      }
    } finally {
      loading = false;
    }
  }

  /**
   * SMS 인증 코드 확인 및 로그인
   */
  async function verifyCode(): Promise<void> {
    error = "";

    // 인증 코드 검증
    if (verificationCode.length !== 6) {
      error = "6자리 인증 코드를 입력해주세요.";
      return;
    }

    loading = true;

    try {
      // SMS 코드로 로그인
      const result = await confirmationResult!.confirm(verificationCode);

      console.log("Login successful:", result.user);

      // 로그인 성공 이벤트 발생
      const event = new CustomEvent("login-success", {
        detail: {
          user: result.user,
          phoneNumber: result.user.phoneNumber,
        },
      });
      dispatchEvent(event);

      // 상태 초기화
      phoneNumber = "";
      verificationCode = "";
      step = "phone";
    } catch (e: any) {
      console.error("인증 코드 확인 실패:", e);

      // 에러 메시지 처리
      if (e.code === "auth/invalid-verification-code") {
        error = "잘못된 인증 코드입니다.";
      } else if (e.code === "auth/code-expired") {
        error = "인증 코드가 만료되었습니다. 다시 시도해주세요.";
      } else {
        error = `인증 실패: ${e.message}`;
      }

      // 로그인 실패 이벤트 발생
      const errorEvent = new CustomEvent("login-error", {
        detail: { error: e.message },
      });
      dispatchEvent(errorEvent);
    } finally {
      loading = false;
    }
  }

  /**
   * 이전 단계로 돌아가기
   */
  function goBack(): void {
    step = "phone";
    verificationCode = "";
    error = "";
  }
</script>

<!-- 전화번호 로그인 폼 -->
<div class="phone-login">
  <div class="login-card">
    {#if step === "phone"}
      <!-- 단계 1: 전화번호 입력 -->
      <div class="step-phone">
        <div class="step-header">
          <Phone class="icon-large" />
          <h2 class="step-title">전화번호로 로그인</h2>
          <p class="step-description">
            전화번호를 입력하시면 SMS로 인증 코드를 보내드립니다.
          </p>
        </div>

        <!-- 국가 번호 선택 -->
        <div class="form-group">
          <label for="country-code" class="label">국가 선택</label>
          <select
            id="country-code"
            bind:value={selectedCountryCode}
            class="select"
            disabled={loading}
          >
            {#each COUNTRY_CODES as country}
              <option value={country.code}>
                {country.flag}
                {country.name} ({country.code})
              </option>
            {/each}
          </select>
        </div>

        <!-- 전화번호 입력 -->
        <div class="form-group">
          <label for="phone-number" class="label">전화번호</label>
          <div class="phone-input-group">
            <span class="country-code-display">{selectedCountryCode}</span>
            <input
              id="phone-number"
              type="tel"
              bind:value={phoneNumber}
              placeholder="1012345678"
              class="input phone-input"
              disabled={loading}
              onkeypress={(e) => {
                // 엔터키로 전송
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendVerificationCode();
                }
              }}
            />
          </div>
          <p class="input-hint">숫자만 입력해주세요 (국가 코드 제외)</p>
        </div>

        <!-- 에러 메시지 -->
        {#if error}
          <div class="error-message">
            {error}
          </div>
        {/if}

        <!-- SMS 전송 버튼 -->
        <button
          class="btn btn-primary"
          onclick={sendVerificationCode}
          disabled={loading || !phoneNumber}
        >
          {#if loading}
            <span class="loading-spinner"></span>
            전송 중...
          {:else}
            <Send class="btn-icon" />
            인증 코드 전송
          {/if}
        </button>
      </div>
    {:else if step === "code"}
      <!-- 단계 2: SMS 코드 입력 -->
      <div class="step-code">
        <div class="step-header">
          <Check class="icon-large" />
          <h2 class="step-title">인증 코드 입력</h2>
          <p class="step-description">
            {selectedCountryCode}{phoneNumber}로 전송된<br />
            6자리 인증 코드를 입력해주세요.
          </p>
        </div>

        <!-- SMS 코드 입력 -->
        <div class="form-group">
          <label for="verification-code" class="label">인증 코드</label>
          <input
            id="verification-code"
            type="text"
            bind:value={verificationCode}
            placeholder="123456"
            maxlength="6"
            class="input code-input"
            disabled={loading}
            onkeypress={(e) => {
              // 엔터키로 확인
              if (e.key === "Enter") {
                e.preventDefault();
                verifyCode();
              }
            }}
          />
          <p class="input-hint">6자리 숫자를 입력해주세요</p>
        </div>

        <!-- 에러 메시지 -->
        {#if error}
          <div class="error-message">
            {error}
          </div>
        {/if}

        <!-- 버튼 그룹 -->
        <div class="button-group">
          <button class="btn btn-secondary" onclick={goBack} disabled={loading}>
            이전으로
          </button>
          <button
            class="btn btn-primary"
            onclick={verifyCode}
            disabled={loading || verificationCode.length !== 6}
          >
            {#if loading}
              <span class="loading-spinner"></span>
              확인 중...
            {:else}
              <Check class="btn-icon" />
              로그인
            {/if}
          </button>
        </div>

        <!-- 재전송 안내 -->
        <div class="resend-hint">
          인증 코드를 받지 못하셨나요?
          <button class="link-button" onclick={goBack}> 다시 전송하기 </button>
        </div>
      </div>
    {/if}

    <!-- reCAPTCHA 컨테이너 (invisible 모드) -->
    <!--
      중요: reCAPTCHA 컨테이너는 항상 DOM에 존재해야 합니다.
      조건부 블록({#if step === 'phone'}) 밖에 위치하여 step 변경 시에도
      DOM에서 제거되지 않도록 합니다.

      ID를 사용하여 RecaptchaVerifier 초기화 시 안정적으로 컨테이너를 참조합니다.

      invisible reCAPTCHA 동작 방식:
      - 사용자에게 보이지 않으며, 백그라운드에서 자동으로 검증됨
      - 의심스러운 활동 감지 시에만 사용자에게 챌린지가 표시됨
      - reCAPTCHA 배지는 페이지 우측 하단에 자동으로 표시됨
    -->
    <div
      id="recaptcha-container"
      bind:this={recaptchaContainer}
      class="recaptcha-container"
    ></div>
  </div>
</div>

<style>
  /* 전체 컨테이너 */
  .phone-login {
    width: 100%;
    max-width: 28rem; /* max-w-md */
    margin: 0 auto;
  }

  /* 로그인 카드 */
  .login-card {
    background-color: #ffffff; /* bg-white */
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
    padding: 2rem; /* p-8 */
    border: 1px solid #e5e7eb; /* border-gray-200 */
  }

  /* 단계 헤더 */
  .step-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .icon-large {
    width: 3rem;
    height: 3rem;
    color: #3b82f6; /* text-blue-500 */
    margin: 0 auto 1rem;
  }

  .step-title {
    font-size: 1.5rem; /* text-2xl */
    font-weight: 700; /* font-bold */
    color: #111827; /* text-gray-900 */
    margin: 0 0 0.5rem 0;
  }

  .step-description {
    font-size: 0.875rem; /* text-sm */
    color: #6b7280; /* text-gray-500 */
    margin: 0;
    line-height: 1.5;
  }

  /* 폼 그룹 */
  .form-group {
    margin-bottom: 1.5rem; /* mb-6 */
  }

  .label {
    display: block;
    font-size: 0.875rem; /* text-sm */
    font-weight: 500; /* font-medium */
    color: #374151; /* text-gray-700 */
    margin-bottom: 0.5rem; /* mb-2 */
  }

  /* Select (국가 선택) */
  .select {
    width: 100%; /* w-full */
    padding: 0.75rem; /* px-3 py-3 */
    font-size: 1rem; /* text-base */
    border: 1px solid #d1d5db; /* border-gray-300 */
    border-radius: 0.375rem; /* rounded-md */
    background-color: #ffffff; /* bg-white */
    color: #111827; /* text-gray-900 */
    transition: all 0.2s;
  }

  .select:focus {
    outline: none;
    border-color: #3b82f6; /* focus:border-blue-500 */
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); /* focus:ring */
  }

  .select:disabled {
    background-color: #f3f4f6; /* disabled:bg-gray-100 */
    cursor: not-allowed;
  }

  /* 전화번호 입력 그룹 */
  .phone-input-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .country-code-display {
    display: inline-block;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937; /* text-gray-800 */
    background-color: #f3f4f6; /* bg-gray-100 */
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    min-width: 4rem;
    text-align: center;
  }

  /* Input */
  .input {
    width: 100%; /* w-full */
    padding: 0.75rem; /* px-3 py-3 */
    font-size: 1rem; /* text-base */
    border: 1px solid #d1d5db; /* border-gray-300 */
    border-radius: 0.375rem; /* rounded-md */
    background-color: #ffffff; /* bg-white */
    color: #111827; /* text-gray-900 */
    transition: all 0.2s;
  }

  .input:focus {
    outline: none;
    border-color: #3b82f6; /* focus:border-blue-500 */
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); /* focus:ring */
  }

  .input:disabled {
    background-color: #f3f4f6; /* disabled:bg-gray-100 */
    cursor: not-allowed;
  }

  .phone-input {
    flex: 1;
  }

  .code-input {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
  }

  /* 입력 힌트 */
  .input-hint {
    margin-top: 0.5rem;
    font-size: 0.75rem; /* text-xs */
    color: #6b7280; /* text-gray-500 */
  }

  /* reCAPTCHA 컨테이너 */
  /* invisible reCAPTCHA는 사용자에게 보이지 않도록 설정 */
  /* 중요: 컨테이너는 최소 크기를 유지하면서 화면 밖으로 위치 */
  /* display: none이나 visibility: hidden은 사용하면 안됨 - reCAPTCHA가 "제거된 것"으로 간주 */
  .recaptcha-container {
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: auto;
    height: auto;
    pointer-events: none;
    /* invisible 모드에서는 reCAPTCHA 배지만 페이지 우측 하단에 자동으로 표시됨 */
  }

  /* 에러 메시지 */
  .error-message {
    padding: 0.75rem 1rem;
    background-color: #fef2f2; /* bg-red-50 */
    border: 1px solid #fecaca; /* border-red-200 */
    border-radius: 0.375rem; /* rounded-md */
    color: #dc2626; /* text-red-600 */
    font-size: 0.875rem; /* text-sm */
    margin-bottom: 1rem;
  }

  /* 버튼 */
  .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem; /* px-4 py-3 */
    font-size: 1rem; /* text-base */
    font-weight: 600; /* font-semibold */
    border: none;
    border-radius: 0.375rem; /* rounded-md */
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background-color: #3b82f6; /* bg-blue-500 */
    color: #ffffff; /* text-white */
  }

  .btn-primary:hover:not(:disabled) {
    background-color: #2563eb; /* hover:bg-blue-600 */
  }

  .btn-secondary {
    background-color: #f3f4f6; /* bg-gray-100 */
    color: #374151; /* text-gray-700 */
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: #e5e7eb; /* hover:bg-gray-200 */
  }

  .btn-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* 로딩 스피너 */
  .loading-spinner {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* 버튼 그룹 */
  .button-group {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .button-group .btn {
    width: auto;
    flex: 1;
  }

  /* 재전송 힌트 */
  .resend-hint {
    text-align: center;
    font-size: 0.875rem; /* text-sm */
    color: #6b7280; /* text-gray-500 */
  }

  .link-button {
    background: none;
    border: none;
    color: #3b82f6; /* text-blue-500 */
    font-weight: 500; /* font-medium */
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
  }

  .link-button:hover {
    color: #2563eb; /* hover:text-blue-600 */
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .login-card {
      padding: 1.5rem; /* p-6 */
    }

    .step-title {
      font-size: 1.25rem; /* text-xl */
    }
  }
</style>
