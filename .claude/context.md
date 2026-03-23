# Project Context: [Portfolio]

## 1. Project Overview

- **Type**: Monorepo managed by **Turborepo**.
- **Nature**: Static Client-side Website (No Backend/Server).
- **Core Goal**: showcase professional projects and skills through iterative versions.

## 2. Project Structure (Monorepo)

- **Root**: Global configuration (Turborepo, PNPM).
- **`apps/`**: Contains different versions of the portfolio.
  - Each directory under `apps/` is a standalone project but may share configurations.
- **`packages/`**: configurations (ESLint, Prettier, TSconfig).

## 3. Versioning Strategy

- 이 프로젝트는 포트폴리오의 변천사를 기록하기 위해 버전별로 별도의 디렉토리를 유지한다.
- **Current Active Version**: `/apps/version4`
- **Legacy Versions**: `/apps/version1`, `/apps/version2`, `/apps/version3` (Reference only).
- **Rule**: 모든 신규 기능 개발과 수정은 별도의 지시가 없는 한 **`/apps/version4`** 내에서만 수행한다. 다른 버전의 코드를 수정하지 않도록 주의하라.

## 4. Technical Constraints

- **Static Only**: 서버 연동이 없으므로 데이터는 로컬 JSON 파일이나 상수(Constants) 파일에서 관리한다.
- **Assets**: 이미지 및 리소스는 각 앱의 `public` 폴더 내에서 관리한다.
