---
name: snsweb
version: 1.0.0
description: 게시판 카테고리 관리 가이드의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 게시판에서 사용하는 카테고리를 정의하고 UI에 적용하는 방법을 정리합니다.

## Requirements
- 카테고리 목록은 [데이터베이스 구조 가이드](./snsweb-firebase-database.md#카테고리-설정)에 명시된 값을 기반으로 관리합니다.
- 카테고리 값과 라벨은 중앙 상수(`FORUM_CATEGORIES`)로 관리하여 중복을 피합니다.

## Detail Items

### 카테고리 관리
- 카테고리 설정은 데이터베이스 구조 문서를 참고하세요.
- **📖 참고 문서**: [데이터베이스 구조 가이드 - 카테고리 설정](./snsweb-firebase-database.md#카테고리-설정)

### 카테고리 사용 방법

```svelte
<script>
  import { FORUM_CATEGORIES } from '../lib/constants/forum.js';

  let selectedCategory = 'community';
</script>

<!-- Select 드롭다운에서 사용 -->
<select bind:value={selectedCategory}>
  {#each FORUM_CATEGORIES as category (category.value)}
    <option value={category.value}>
      {category.label}
    </option>
  {/each}
</select>

<!-- 카테고리 탭에서 사용 -->
<div class="category-tabs">
  {#each FORUM_CATEGORIES as category (category.value)}
    <a
      href={`/forum?category=${category.value}`}
      class="tab {currentCategory === category.value ? 'active' : ''}"
    >
      {category.label}
    </a>
  {/each}
</div>
```
