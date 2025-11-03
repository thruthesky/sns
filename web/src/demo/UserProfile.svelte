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

  import { t } from '../lib/stores/i18n.js';
  import { login } from '../lib/utils/firebase-login-user.svelte.js';
  import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { storage } from '../lib/utils/firebase.js';

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
    photoURL: ''
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
   * 성공 메시지
   * @type {string | null}
   */
  let successMessage = $state(null);

  /**
   * 에러 메시지
   * @type {string | null}
   */
  let errorMessage = $state(null);

  // ============================================================================
  // 초기화 효과
  // ============================================================================

  /**
   * 컴포넌트 마운트 시 로그인한 사용자의 정보를 폼에 로드
   */
  $effect(() => {
    if (login.data) {
      formData.displayName = login.data.displayName || '';
      formData.gender = login.data.gender || '';
      formData.dateOfBirth = login.data.dateOfBirth || '';
      formData.photoURL = login.data.photoURL || '';
      photoPreview = login.data.photoURL || null;
    }
  });

  // ============================================================================
  // 메서드 (함수)
  // ============================================================================

  /**
   * 파일 선택 창 열기
   */
  function handlePhotoButtonClick() {
    fileInput?.click();
  }

  /**
   * 프로필 사진 파일 선택 처리
   *
   * 선택한 이미지 파일을 미리보기로 표시합니다.
   * @param {Event} event - 파일 입력 이벤트
   */
  function handlePhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 타입 확인
    if (!file.type.startsWith('image/')) {
      errorMessage = '이미지 파일만 선택 가능합니다.';
      setTimeout(() => { errorMessage = null; }, 5000);
      return;
    }

    // 파일 크기 확인 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      errorMessage = '파일 크기는 5MB 이하여야 합니다.';
      setTimeout(() => { errorMessage = null; }, 5000);
      return;
    }

    // 미리보기 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

  /**
   * 프로필 사진 제거
   */
  function handleRemovePhoto() {
    photoPreview = null;
    formData.photoURL = '';
    if (fileInput) {
      fileInput.value = '';
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
      let photoURL = formData.photoURL;
      const file = fileInput?.files?.[0];

      if (file) {
        // 새 파일이 선택된 경우 Firebase Storage에 업로드
        const fileName = `profile_${login.uid}_${Date.now()}.${file.name.split('.').pop()}`;
        const photoStorageRef = storageRef(storage, `users/${login.uid}/profile/${fileName}`);

        // 파일 업로드
        const snapshot = await uploadBytes(photoStorageRef, file);
        photoURL = await getDownloadURL(snapshot.ref);

        console.log('프로필 사진 업로드 완료:', photoURL);
      }

      // 2. 데이터베이스에 모든 정보 저장
      const updateData = {
        displayName: formData.displayName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        photoURL: photoURL || null
      };

      // Firebase Auth 및 Realtime Database 업데이트
      await login.updateProfile(updateData);

      successMessage = '프로필이 성공적으로 업데이트되었습니다!';
      console.log('프로필 업데이트 완료:', updateData);

      // 3초 후 메시지 초기화
      setTimeout(() => { successMessage = null; }, 3000);
    } catch (error) {
      console.error('프로필 업데이트 오류:', error);
      errorMessage = `오류: ${error.message || '알 수 없는 오류가 발생했습니다'}`;
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
  <!-- 페이지 헤더 -->
  <div class="page-header">
    <h1>회원 정보 수정</h1>
    <p>프로필 정보를 수정하세요</p>
  </div>

  <!-- 프로필 수정 폼 -->
  <form class="profile-form" onsubmit={handleSubmit}>
    <!-- ========================================================================
         프로필 사진 섹션
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label">프로필 사진</label>

      <!-- 프로필 사진 미리보기 -->
      <div class="photo-preview-container">
        {#if photoPreview}
          <!-- 선택된 사진 표시 -->
          <div class="photo-preview">
            <img src={photoPreview} alt="프로필 사진 미리보기" />
          </div>
        {:else}
          <!-- 기본 아바타 -->
          <div class="photo-placeholder">
            <div class="placeholder-icon">📷</div>
            <p>프로필 사진이 없습니다</p>
          </div>
        {/if}
      </div>

      <!-- 숨겨진 파일 입력 -->
      <input
        type="file"
        accept="image/*"
        bind:this={fileInput}
        onchange={handlePhotoChange}
        style="display: none;"
        aria-label="프로필 사진 선택"
      />

      <!-- 사진 업로드/변경 버튼들 -->
      <div class="photo-buttons">
        <button
          type="button"
          class="btn-primary"
          onclick={handlePhotoButtonClick}
          disabled={isSaving}
        >
          📤 {photoPreview ? '사진 변경' : '사진 선택'}
        </button>
        {#if photoPreview}
          <button
            type="button"
            class="btn-secondary"
            onclick={handleRemovePhoto}
            disabled={isSaving}
          >
            🗑️ 사진 제거
          </button>
        {/if}
      </div>
    </div>

    <!-- ========================================================================
         닉네임 입력 필드
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="displayName">닉네임</label>
      <input
        type="text"
        id="displayName"
        class="form-input"
        placeholder="닉네임을 입력하세요"
        bind:value={formData.displayName}
        maxlength="50"
        disabled={isSaving}
        required
      />
      <p class="form-helper">최대 50자까지 입력할 수 있습니다</p>
    </div>

    <!-- ========================================================================
         성별 선택
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="gender">성별</label>
      <select
        id="gender"
        class="form-select"
        bind:value={formData.gender}
        disabled={isSaving}
      >
        <option value="">선택하지 않음</option>
        <option value="male">남자</option>
        <option value="female">여자</option>
        <option value="other">기타</option>
      </select>
    </div>

    <!-- ========================================================================
         생년월일 선택
         ======================================================================== -->
    <div class="form-section">
      <label class="form-label" for="dateOfBirth">생년월일</label>
      <input
        type="date"
        id="dateOfBirth"
        class="form-input"
        bind:value={formData.dateOfBirth}
        disabled={isSaving}
      />
      <p class="form-helper">YYYY-MM-DD 형식으로 선택해주세요</p>
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
        disabled={isSaving || !login.isAuthenticated}
      >
        {isSaving ? '저장 중...' : '저장'}
      </button>
      <button
        type="button"
        class="btn-secondary btn-large"
        onclick={goBack}
        disabled={isSaving}
      >
        취소
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
     페이지 헤더
     ============================================================================ */
  .page-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .page-header h1 {
    font-size: 1.875rem;
    font-weight: bold;
    color: #111827;
    margin: 0 0 0.5rem 0;
  }

  .page-header p {
    color: #6b7280;
    font-size: 0.95rem;
    margin: 0;
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
  .photo-preview-container {
    background-color: #f9fafb;
    border: 2px dashed #d1d5db;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .photo-preview {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }

  .photo-preview img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .photo-placeholder {
    color: #6b7280;
  }

  .placeholder-icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .photo-placeholder p {
    margin: 0;
    font-size: 0.95rem;
  }

  /* 사진 버튼 그룹 */
  .photo-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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
