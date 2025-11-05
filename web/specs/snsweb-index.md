SNS 웹 개발 지침
- 본 문서는 SNS 웹 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 합니다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 합니다.

# 워크플로우
- [ ] 웹 개발 할 때에는 항상(반드시) [SNS 커스텀 엘리먼트 개발 지침](./sns-custom-elements.md) 문서를 참고 해야 하며 개발자에게 이 문서를 참고한다고 알려줍니다.
- [ ] **Firebase 데이터베이스를 사용할 때에는 반드시** [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) 문서를 참고 해야 합니다. AppCheck는 비용이 매우 비싸므로 완전한 Security Rules를 구현해야 합니다.
- [ ] CSS 스타일 디자인 할 때에는 반드시, Tailwind CSS를 사용해야 한다.
  - [ ] 이 때, `class="..."` 방식으로 스타일을 지정하지 않으며, `<style>` 태그 내에서 Tailwind 지시자를 사용하여 스타일을 지정해야 합니다. 아래의 [CSS 디자인](#css-디자인) 섹션을 참고하세요.
  - [ ] 만약, `class="..."` 방식으로 된 스타일이 있다면, 반드시 이를 `<style>` 태그 내의 Tailwind 지시자로 변경해야 합니다.

---

## 기술 스택

**플랫폼**: Svelte 5 (버전: `svelte@5.43.2`)

- **개발 방식**: Svelte + Vite 라이브러리 모드
- **빌드 설정**: `customElement: true` 방식으로 Web Components 생성
- **CSS**: Tailwind CSS
- **아이콘**: lucide-svelte (https://lucide.dev/guide/packages/lucide-svelte)
- **목적**: www.philgo.com 및 www.sonub.com 등 다양한 Philgo 플랫폼에서 **동일한 컴포넌트 공유 및 재사용**

---

## 관련 문서

- [SNS 프로젝트 전체 개요](../../specs/sns.md) - 서비스 기획 및 전체 개요
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md) - Custom Elements 개발 상세 가이드
- [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - Firebase Security Rules 구현 (AppCheck 비용 절감, **필수**)
- [프로젝트 개발 지침](../CLAUDE.md) - 전체 프로젝트 개발 워크플로우 및 규칙
- [웹 프로젝트 README](../README.md) - 웹 프로젝트 사용법 및 설정

### 외부 문서
- [Svelte 5 Custom Elements 공식 문서](https://svelte.dev/docs/svelte/custom-elements)
- [Svelte MCP 문서](https://svelte.dev/docs/mcp/overview)
- [Firebase Security Rules 공식 문서](https://firebase.google.com/docs/database/security)



## CSS 디자인
- Tailwind CSS를 사용하여 스타일을 지정합니다.
- 스타일 지정은 반드시 `<style>` 태그 내에서 Tailwind 지시자를 사용하여 지정해야 합니다.
- 예제:

```svelte
<style>
  .example {
    @apply text-lg font-bold text-blue-500;
  }
</style>

<div class="example">
  Tailwind CSS를 사용한 예제입니다.
</div>
```