# Gallery Frontend

Gallery 프로젝트의 React 기반 프론트엔드 애플리케이션입니다.

## 주요 기능

- **홈페이지**: 월례집담회, 공개/비공개 컨설팅 갤러리 카드 표시
- **검색**: 월례집담회 및 컨설팅 데이터 검색
- **이미지 뷰어**: OpenSeadragon 기반 고해상도 이미지 뷰어
- **반응형 디자인**: 모바일 및 데스크톱 지원
- **TypeScript**: 타입 안전성 보장

## 기술 스택

| 분류 | 기술 |
| - | - |
| 💻 Runtime / Package Manager | ![Node.js](https://img.shields.io/badge/node-%5E22-green?logo=node.js&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-%5E10.5-orange?logo=pnpm&logoColor=white) |
| ⚡ Frontend / Build Tools| ![Vite](https://img.shields.io/badge/vite-%5E7.1.7-blue?logo=vite) ![React](https://img.shields.io/badge/react-%5E18.3.1-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-~5.8.3-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/tailwind-^4.1.13-06B6D4?logo=tailwind-css&logoColor=white) ![Sass](https://img.shields.io/badge/sass-^1.93.2-CC6699?logo=sass&logoColor=white) |
| 🌐 HTTP / API | ![Axios](https://img.shields.io/badge/axios-1.10.0-5A29E4?logo=axios&logoColor=white) |
| 🖼 Image Viewer / Utilities | ![OpenSeadragon](https://img.shields.io/badge/OpenSeadragon-5.0.1-lightgrey) |

## 설치 및 실행

### 1. 노드버전 & 패키지매니저 설정 (필수!)

> 패키지매니저 `pnpm` 사용으로 초기 설치 필요

- node v22 이상으로 설치 및 설정 (nvm 사용 권장)
- pnpm 패키지매니저 글로벌 추가

```bash
# 노드 22 이상 버전으로 설정 후, 아니면 버전 명시해서 설치 ex)pnpm@10.5
npm i -g pnpm
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 환경변수 설정

> base로 .env 세팅 후 실행 환경`(dev | prod)`에 따라 해당 env를 override해서 최종 세팅된 env로 서비스 구동
>
> - vite dev → .env + .env.local + .env.development + .env.development.local
> - vite build --mode production → .env + .env.local + .env.production + .env.production.local

- 공통

  ```bash
  # .env

  VITE_SERVER_PROTOCOL=http
  ```

- 개발환경

  ```bash
  # .env.development

  # Dev - Setting server and deepzoom
  VITE_API_BASE_URL=http://localhost:8080
  VITE_DEEPZOOM_PORT=8081
  ```

- 운영환경

  ```bash
  # .env.production

  # 필요 시 배포환경에서는 보안 프로토콜 적용 가능
  # VITE_SERVER_PROTOCOL=https

  # Prod - Setting server and deepzoom
  VITE_API_BASE_URL=http://{SERVER_IP}:{PORT}
  VITE_DEEPZOOM_PORT={PORT}
  ```

- 사용예시

  ```typescript
  import.meta.env.VITE_SERVER_PROTOCOL;
  import.meta.env.VITE_API_BASE_URL;
  import.meta.env.VITE_DEEPZOOM_PORT;
  ```

#### 3.1. vite 환경 설정

서비스 실행 포트 설정

```bash
# vite.config.ts
export default defineConfig({
  ...
  server: {
    port: 8080, // 커스텀 포트
    strictPort: true  // 동일포트 실행 에러처리
  }
  ...
})
```

### 4. 개발 서버 실행

```bash
pnpm dev
```

### 5. 프로덕션 빌드

```bash
# 선행 - pnpm install
pnpm build
```

### 6. 프리뷰 실행

> HMR(Hot Module Replacement) 적용x - 개발환경처럼 변경사항 실시간 반영x <br/>
> 실제 배포 환경과 유사하게 테스트 필요한 경우 사용 (dist/ 빌드 산출물을 기반으로 실행)

```bash
# 선행 - pnpm build
pnpm preview
```

## API 연동

백엔드 API와의 연동을 위해 `src/shared/apis/` 디렉토리에 API 클라이언트가 구현되어 있습니다.

### 주요 API 엔드포인트

- **Monthly Gallery**: `/api/monthly/last/three`
- **Public Consulting**: `/api/consult/last/three`
- **Private Consulting**: `/api/consult/private_last/three`
- **Search**: `/api/search/monthly/`, `/api/search/publicConsult/`
- **Comments**: `/api/monthly/comment/write`
- **Files**: `/api/file/upload`, `/api/file/download/`
- **Vote**: `/api/vote/generate`, `/api/vote/voting`

## 컴포넌트 구조

### 공통 컴포넌트

- `Header`: 네비게이션 헤더
- `Footer`: 푸터
- `GalleryCard`: 갤러리 아이템 카드

### 페이지 컴포넌트

- `HomePage`: 메인 홈페이지
- `SearchPage`: 검색 결과 페이지
- `ViewerPage`: 이미지 뷰어 페이지
- `MonthlyPage`: 월례집담회 페이지
- `ConsultPage`: 컨설팅 페이지

## 스타일링

`Tailwinds css` + `Module SCSS` 조합으로 기본적인 스타일링은 Tailwinds를 기반으로 하며 복잡한 애니메이션이나 디테일한 설정이 필요한 경우 SCSS를 module css 방식으로 사용하여 진행

## 개발 가이드

1. 새로운 페이지를 추가할 때는 `src/modules/` 디렉토리에 모듈을 생성하세요.
2. 재사용 가능한 컴포넌트는 `src/shared/components/` 디렉토리에 추가하세요.
3. API 호출은 `src/shared/apis/` 디렉토리의 메서드를 사용하세요.
4. TypeScript 타입은 `src/shared/types/` 디렉토리에 정의하세요.
5. UI 컴포넌트는 `shadcn` 사용중이며 컴포넌트 추가는 밑에 가이드를 참고하세요.

### `shadcn UI component` 추가

> [Shadcn UI Components 공식문서](https://ui.shadcn.com/docs/components)

1. `"shadcn": "pnpm dlx shadcn@latest add"` 기본 명령 스크립트 작성해둔 상태

    > 동시에 여러 컴포넌트 설치하고 싶다면 직접 명령어 입력하는 방식으로 진행하세요. </br>
    > `pnpm dlx shadcn@latest add component1, component2, component3`

    ```bash
    pnpm run shadcn [원하는 UI component] 
    ```

2. 추가된 UI 컴포넌트 옮겨주기

    > 추가하면 `~/Galley-Client/src/components/ui` 경로에 자동으로 추가되는데 경로는 shadcn 고정 경로 </br>
    > 현재 프로젝트 구조에서는 `src/components` 안쓰고 있어서 gitignore에 추가해둔 상태 (커밋방지)

    추가된 경로에서 프로젝트 UI 컴포넌트 관리 경로(`~/Galley-Client/src/shared/components/ui`)로 구조에 맞게 옮겨주세요 </br>
    파일만 바로 옮기면 사용 안되는 경우도 있어서 약간의 코드수정이나 파일 분리 정도의 작업이 필요할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
