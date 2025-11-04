<script>
  /**
   * 회원 정보 수정 페이지
   *
   * 사용자의 프로필 정보를 수정하는 페이지입니다.
   * 다음 기능을 제공합니다:
   * - 프로필 사진 업로드 (Firebase Storage)
   * - 닉네임 변경 (displayName)
   * - 성별 선택 (gender)
   * - 생년월일 선택 (dateOfBirth)
   *
   * Firebase Auth와 Realtime Database를 사용하여 데이터를 저장합니다.
   */

  import { t } from '../lib/stores/i18n.ts';
  import { login } from '../lib/utils/firebase-login-user.svelte.ts';
  import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { storage } from '../lib/utils/firebase.js';
  import { onDestroy, onMount } from 'svelte';
  import { setPageTitle } from '../lib/stores/pageTitle.ts';
  import { Camera, X } from 'lucide-svelte';

  // ============================================================================
  // 반응형 상태 관리
  // ============================================================================

  /**
   * 폼 데이터 (사용자가 수정하는 값)
   * @type {Object}
   */
  let formData = $state({
    displayName: '',
    gender: '', // 'male', 'female', 'other', ''
    dateOfBirth: '', // YYYY-MM-DD 형식
    photoUrl: ''
  });

  /**
   * 프로필 사진 미리보기
   * @type {string | null}
   */
  let photoPreview = $state(null);

  /**
   * 파일 입력 요소 참조
   * @type {HTMLInputElement | null}
   */
  let fileInput = $state(null);

  /**
   * 저장 중 상태
   * @type {boolean}
   */
  let isSaving = $state(false);
  /**
   * 사진 업로드/삭제 중 상태
   * @type {boolean}
   */
  let isPhotoUpdating = $state(false);

  /**
   * 성공 메시지
   * @type {string | null}
   */
  let successMessage = $state(null);

  /**
   * 에러 메시지
   * @type {string | null}
   */
  let errorMessage = $state(null);

  /**
   * 메시지 타이머
   */
  let successTimer = null;
  let errorTimer = null;

  function showSuccessMessage(message) {
    successMessage = message;
    if (successTimer) {
      clearTimeout(successTimer);
    }
    successTimer = setTimeout(() => {
      successMessage = null;
      successTimer = null;
    }, 3000);
  }

  function showErrorMessage(message) {
    errorMessage = message;
    if (errorTimer) {
      clearTimeout(errorTimer);
    }
    errorTimer = setTimeout(() => {
      errorMessage = null;
      errorTimer = null;
    }, 5000);
  }

  onDestroy(() => {
    if (successTimer) {
      clearTimeout(successTimer);
    }
    if (errorTimer) {
      clearTimeout(errorTimer);
    }
  });

  // ============================================================================
  // 초기화 효과
  // ============================================================================

  /**
   * 컴포넌트 마운트 시 페이지 제목 설정
   */
  onMount(() => {
    setPageTitle($t('프로필수정'));
  });

  /**
   * 컴포넌트 마운트 시 로그인한 사용자의 정보를 폼에 로드
   */
  $effect(() => {
    if (login.data) {
      formData.displayName = login.data.displayName || '';
      formData.gender = login.data.gender || '';
      formData.dateOfBirth = login.data.dateOfBirth || '';
      const initialPhoto = login.data.photoUrl ?? login.data.photoURL ?? '';
      formData.photoUrl = initialPhoto;
      photoPreview = initialPhoto || null;
    }
  });

  // ============================================================================
  // 메서드 (함수)
  // ============================================================================

  /**
   * 파일 선택 창 열기
   */
  function handlePhotoButtonClick() {
    if (isPhotoUpdating) return;
    fileInput?.click();
  }

  /**
   * 프로필 사진 파일 선택 처리
   *
   * 선택한 이미지 파일을 미리보기로 표시합니다.
   * @param {Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }} event - 파일 입력 이벤트
   */
  async function handlePhotoChange(event) {
    const input = event.currentTarget;
    const file = input?.files?.[0];
    if (!file) return;

    if (isPhotoUpdating) {
      showErrorMessage($t('사진작업진행중'));
      return;
    }

    if (!login.isAuthenticated || !login.uid) {
      showErrorMessage($t('로그인필요'));
      return;
    }

    // 파일 타입 확인
    if (!file.type.startsWith('image/')) {
      showErrorMessage($t('이미지파일만가능'));
      return;
    }

    // 파일 크기 확인 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      showErrorMessage($t('파일크기5MB제한'));
      return;
    }

    const previousPreview = photoPreview;
    const previousPhotoUrl = formData.photoUrl;

    // 미리보기 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      // readAsDataURL()은 항상 string을 반환하지만, 타입 체크를 추가
      const result = e.target?.result;
      if (typeof result === 'string') {
        photoPreview = result;
      }
    };
    reader.readAsDataURL(file);

    try {
      await uploadAndSavePhoto(file);
    } catch (error) {
      // 실패 시 이전 상태로 복구
      photoPreview = previousPreview;
      formData.photoUrl = previousPhotoUrl;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }

  /**
   * 프로필 사진 제거
   */
  async function handleRemovePhoto() {
    if (isPhotoUpdating) return;

    if (!login.isAuthenticated || !login.uid) {
      showErrorMessage($t('로그인필요'));
      return;
    }

    const previousPreview = photoPreview;
    const previousPhotoUrl = formData.photoUrl;

    photoPreview = null;
    formData.photoUrl = '';
    if (fileInput) {
      fileInput.value = '';
    }

    try {
      isPhotoUpdating = true;
      await login.updateProfile({ photoUrl: null });
      showSuccessMessage($t('프로필사진제거완료'));
    } catch (error) {
      console.error('프로필 사진 제거 오류:', error);
      showErrorMessage($t('사진제거실패', { error: error.message || $t('알수없는오류') }));
      photoPreview = previousPreview;
      formData.photoUrl = previousPhotoUrl;
    } finally {
      isPhotoUpdating = false;
    }
  }

  /**
   * Firebase Storage 업로드 및 DB 저장
   * @param {File} file - 업로드할 파일
   * @param {Object} options
   * @param {boolean} [options.showSuccess=true] - 성공 메시지 출력 여부
   * @returns {Promise<string>} 다운로드 URL
   */
  async function uploadAndSavePhoto(file, { showSuccess = true } = {}) {
    if (!login.isAuthenticated || !login.uid) {
      showErrorMessage($t('로그인필요'));
      throw new Error('User is not authenticated');
    }

    try {
      isPhotoUpdating = true;

      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const fileName = `profile_${login.uid}_${Date.now()}.${extension}`;
      const photoStorageRef = storageRef(storage, `users/${login.uid}/profile/${fileName}`);

      const snapshot = await uploadBytes(photoStorageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      formData.photoUrl = downloadURL;
      photoPreview = downloadURL;

      await login.updateProfile({ photoUrl: downloadURL });

      if (showSuccess) {
        showSuccessMessage($t('프로필사진저장완료'));
      }

      return downloadURL;
    } catch (error) {
      console.error('프로필 사진 업로드 오류:', error);
      showErrorMessage($t('사진저장실패', { error: error.message || $t('알수없는오류') }));
      throw error;
    } finally {
      isPhotoUpdating = false;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }

  /**
   * 폼 제출 - 모든 정보 저장
   *
   * Firebase Storage에 이미지를 업로드하고,
   * Realtime Database에 사용자 정보를 저장합니다.
   */
  async function handleSubmit(event) {
    event.preventDefault();
    isSaving = true;
    errorMessage = null;
    successMessage = null;

    try {
      // 1. 프로필 사진 업로드 (변경된 경우)
      let photoUrl = formData.photoUrl;
      const file = fileInput?.files?.[0];

      if (file) {
        try {
          photoUrl = await uploadAndSavePhoto(file, { showSuccess: false });
        } catch (error) {
          // 업로드 실패 시 폼 저장 중단
          isSaving = false;
          return;
        }
      }

      // 2. 데이터베이스에 모든 정보 저장
      const updateData = {
        displayName: formData.displayName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        photoUrl: photoUrl || null
      };

      // Firebase Auth 및 Realtime Database 업데이트
      await login.updateProfile(updateData);

      showSuccessMessage($t('프로필업데이트완료'));
      console.log('프로필 업데이트 완료:', updateData);
    } catch (error) {
      console.error('프로필 업데이트 오류:', error);
      showErrorMessage($t('프로필업데이트실패', { error: error.message || $t('알수없는오류') }));
    } finally {
      isSaving = false;
    }
  }

  /**
   * 뒤로가기
   */
  function goBack() {
    window.history.pushState({}, '', '/menu');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
</script>

<!-- 회원 정보 수정 페이지 -->
<div class="profile-container">
  <!-- 프로필 수정 폼 -->
  <form class="profile-form" onsubmit={handleSubmit}>
    <!-- ========================================================================
         프로필 사진 섹션
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label">{$t('프로필사진')}</label>

      <div class="photo-area">
        <input
          type="file"
          accept="image/*"
          bind:this={fileInput}
          onchange={handlePhotoChange}
          style="display: none;"
          aria-label={$t('프로필사진선택')}
        />

        <div class="photo-wrapper">
          <button
            type="button"
            class="photo-trigger"
            onclick={handlePhotoButtonClick}
            disabled={isSaving || isPhotoUpdating}
            aria-label={photoPreview ? $t('프로필사진변경') : $t('프로필사진추가')}
          >
            {#if photoPreview}
              <div
                class="photo-image"
                style={`background-image: url("${photoPreview}")`}
                aria-hidden="true"
              ></div>
            {:else}
              <div class="photo-placeholder">
                <span class="placeholder-icon">📷</span>
                <span class="placeholder-text">{$t('사진없음')}</span>
              </div>
            {/if}
          </button>

          {#if photoPreview}
            <button
              type="button"
              class="photo-remove-button"
              onclick={handleRemovePhoto}
              disabled={isSaving || isPhotoUpdating}
              aria-label={$t('프로필사진제거')}
            >
              <X size={18} stroke-width={3} />
            </button>
          {/if}
          <span class="camera-badge" aria-hidden="true">
            <Camera size={20} stroke-width={2} />
          </span>
        </div>

        <p class="photo-instruction">{$t('프로필사진클릭변경')}</p>

        {#if isPhotoUpdating}
          <p class="upload-status">{$t('사진저장중')}</p>
        {/if}
      </div>
    </div>

    <!-- ========================================================================
         닉네임 입력 필드
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="displayName">{$t('닉네임')}</label>
      <input
        type="text"
        id="displayName"
        class="form-input"
        placeholder={$t('닉네임입력')}
        bind:value={formData.displayName}
        maxlength="50"
        disabled={isSaving}
        required
      />
      <p class="form-helper">{$t('닉네임최대50자')}</p>
    </div>

    <!-- ========================================================================
         성별 선택
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="gender">{$t('성별')}</label>
      <select
        id="gender"
        class="form-select"
        bind:value={formData.gender}
        disabled={isSaving}
      >
        <option value="">{$t('선택하지않음')}</option>
        <option value="male">{$t('남자')}</option>
        <option value="female">{$t('여자')}</option>
        <option value="other">{$t('기타')}</option>
      </select>
    </div>

    <!-- ========================================================================
         생년월일 선택
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="dateOfBirth">{$t('생년월일')}</label>
      <input
        type="date"
        id="dateOfBirth"
        class="form-input"
        bind:value={formData.dateOfBirth}
        disabled={isSaving}
      />
      <p class="form-helper">{$t('생년월일형식')}</p>
    </div>

    <!-- ========================================================================
         상태 메시지
         ======================================================================== -->
    {#if successMessage}
      <div class="message-box success-message">
        ✅ {successMessage}
      </div>
    {/if}

    {#if errorMessage}
      <div class="message-box error-message">
        ⚠️ {errorMessage}
      </div>
    {/if}

    <!-- ========================================================================
         버튼 그룹
         ======================================================================== -->
    <div class="form-buttons">
      <button
        type="submit"
        class="btn-primary btn-large"
        disabled={isSaving || isPhotoUpdating || !login.isAuthenticated}
      >
        {isSaving ? $t('저장중') : $t('저장')}
      </button>
      <button
        type="button"
        class="btn-secondary btn-large"
        onclick={goBack}
        disabled={isSaving}
      >
        {$t('취소')}
      </button>
    </div>
  </form>
</div>

<style>
  /* ============================================================================
     페이지 컨테이너
     ============================================================================ */
  .profile-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  /* ============================================================================
     폼 스타일
     ============================================================================ */
  .profile-form {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  /* ============================================================================
     폼 섹션
     ============================================================================ */
  .form-section {
    margin-bottom: 2rem;
  }

  .form-section:last-of-type {
    margin-bottom: 1.5rem;
  }

  /* ============================================================================
     폼 라벨
     ============================================================================ */
  .form-label {
    display: block;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  /* ============================================================================
     프로필 사진 섹션
     ============================================================================ */
  .photo-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .photo-wrapper {
    position: relative;
    width: 180px;
    height: 180px;
  }

  .photo-trigger {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 0 4px #e5e7eb;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .photo-trigger:hover:not(:disabled) {
    transform: scale(1.01);
    border-color: #2563eb;
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
  }

  .photo-trigger:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 4px;
  }

  .photo-trigger:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .photo-image {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .photo-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    color: #6b7280;
    border-radius: 50%;
    background-color: #f3f4f6;
  }

  .placeholder-icon {
    font-size: 2.5rem;
  }

  .placeholder-text {
    font-size: 0.9rem;
  }

  .camera-badge {
    position: absolute;
    bottom: 16px;
    right: 16px;
    transform: translate(40%, 40%);
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    background-color: #0f172a;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.3);
    pointer-events: none;
  }

  .photo-remove-button {
    position: absolute;
    top: 18px;
    right: 18px;
    transform: translate(50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 9999px;
    background-color: #ef4444;
    color: #ffffff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 26px rgba(239, 68, 68, 0.35);
    cursor: pointer;
  }

  .photo-remove-button:hover:not(:disabled) {
    background-color: #dc2626;
  }

  .photo-remove-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .photo-instruction {
    margin-top: 0.25rem;
    color: #4b5563;
    font-size: 0.95rem;
    text-align: center;
  }

  .upload-status {
    margin-top: 0.75rem;
    color: #2563eb;
    font-size: 0.875rem;
  }

  /* ============================================================================
     입력 필드 & 선택박스
     ============================================================================ */
  .form-input,
  .form-select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    color: #111827;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .form-input:focus,
  .form-select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-input:disabled,
  .form-select:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
  }

  /* ============================================================================
     폼 헬퍼 텍스트
     ============================================================================ */
  .form-helper {
    margin: 0.5rem 0 0 0;
    font-size: 0.8rem;
    color: #6b7280;
  }

  /* ============================================================================
     메시지 박스
     ============================================================================ */
  .message-box {
    padding: 1rem;
    border-radius: 0.375rem;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .success-message {
    background-color: #d1fae5;
    border: 1px solid #6ee7b7;
    color: #065f46;
  }

  .error-message {
    background-color: #fee2e2;
    border: 1px solid #fca5a5;
    color: #7f1d1d;
  }

  /* ============================================================================
     버튼 스타일
     ============================================================================ */
  .btn-primary,
  .btn-secondary {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s, opacity 0.2s;
  }

  .btn-primary {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .btn-primary:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .btn-secondary {
    background-color: #e5e7eb;
    color: #111827;
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: #d1d5db;
  }

  .btn-primary:disabled,
  .btn-secondary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* 큰 버튼 */
  .btn-large {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }

  /* ============================================================================
     버튼 그룹
     ============================================================================ */
  .form-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .form-buttons button {
    flex: 1;
    min-width: 150px;
  }

  /* ============================================================================
     반응형 디자인
     ============================================================================ */
  @media (max-width: 640px) {
    .profile-container {
      padding: 1rem 0.75rem;
    }

    .profile-form {
      padding: 1.5rem;
    }

    .page-header h1 {
      font-size: 1.5rem;
    }

    .photo-preview-container {
      padding: 1.5rem;
    }

    .photo-buttons {
      flex-direction: column;
    }

    .photo-buttons button {
      width: 100%;
    }

    .form-buttons {
      flex-direction: column;
    }

    .form-buttons button {
      width: 100%;
    }
  }
</style>
