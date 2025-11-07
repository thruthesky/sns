---
name: snsweb
version: 1.0.0
description: 관리자 대시보드에서 사용자 목록, 글, 댓글 목록 및 신고 내역, 각종 통계 등을 확인하고 처리하는 기능 제공.
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
---



## Overview
관리자 대시보드에서 사용자 관리, 글 및 댓글 관리, 신고 내역 확인 및 처리, 통계 대시보드 기능을 제공하는 SED 사양 문서입니다. 이 문서는 관리자 대시보드의 데이터베이스 스키마, API 엔드포인트, 라우팅, UI/UX 요구사항, 테스트 사양을 상세히 설명합니다


## Requirements

- Firebase Cloud Functions 의 설정에 관리자 UID 를 기록해야 합니다. 이 UID 는 관리자 대시보드 접근 권한 확인에 사용됩니다.


## Workflow
1. 관리자 페이지 경로는 `/admin` 으로 설정합니다.
2. 사용자 관리, 글 관리, 댓글 관리, 신고 내역 관리, 통계 대시보드 등 주요 기능별로 섹션을 나눕니다.




## Details


