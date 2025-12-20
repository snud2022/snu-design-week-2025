# SNU Design Week 2025 - WRAP UP

2025 서울대학교 디자인과 졸업 전시 **WRAP UP** 온라인 전시 프로젝트입니다.
![바로가기](https://2025.snudesignweek.com/)

📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [페이지 소개](#페이지-소개)
- [프로젝트 구조](#프로젝트-구조)
- [주요 기능](#주요-기능)
- [개발 환경 설정](#개발-환경-설정)

## 프로젝트 소개

WRAP UP은 4년간 모아온 짐을 꾸리는 이사의 현장을 테마로 한 졸업 전시 웹사이트입니다. 물리 엔진 기반 그래픽을 통해 독특한 사용자 경험을 제공합니다.

## 페이지 소개

총 6개의 주요 페이지로 구성되어 있으며, 모든 페이지는 반응형 디자인을 지원합니다.

### Main Page

![메인 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

Matter.js 기반 인터랙티브 물리 시뮬레이션을 제공합니다. 전시 명을 딴 WRAP UP 알파벳 형태의 물리 객체들이 중력에 따라 움직입니다.

### About Page

![소개 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

전시 소개 및 조직 정보를 제공하는 페이지입니다.

### Works Page

![작품 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

Notion Database에서 가져온 졸업 작품 목록을 갤러리로 표시합니다. 상단 필터로 class별 작품을 필터링할 수 있으며, 작품 클릭 시 상세 페이지로 이동합니다.

### People Page

![사람 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

학생 정보를 물리 엔진 기반 그리드로 표시합니다. 각 셀마다 독립적인 물리 엔진 인스턴스를 생성하며, 셀 내 class 파츠를 선택하면 상세 페이지로 이동합니다.

### Works Detail Page

![작품 상세 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

### Program Page

![프로그램 페이지](링크)

전시 기간 동안 진행되는 프로그램 일정을 안내합니다.

### Partners Page

![파트너 페이지](링크)

| desktop | tablet | mobile |
| ------- | ------ | ------ |
| 이미지  | 이미지 | 이미지 |

전시를 함께하는 파트너사와 동문 후원 현황을 소개합니다. 파트너 로고 및 후원 정보를 카드 형태로 표시합니다.

### 반응형 디자인

모든 페이지는 다양한 화면 크기에 최적화되어 있습니다:

- **모바일 (Mobile)**: 0px ~ 599px
- **태블릿 (Tablet)**: 600px ~ 1279px
- **데스크톱 (Desktop)**: 1280px 이상

`@snud2025/ui` 패키지의 `breakpoints` 상수를 사용하여 일관된 반응형 디자인을 구현했습니다.

## 프로젝트 구조

이 프로젝트는 **Turborepo 모노레포** 구조로 구성되어 있습니다.

```
snu-design-week-2025/
├── apps/
│   ├── web/                # 온라인 전시 웹사이트 (Next.js)
│   └── docs/               # 문서 사이트 (Next.js)
├── packages/
│   ├── api/                # Notion API 호출 로직 및 에러 처리
│   ├── ui/                 # 공유 React 컴포넌트 라이브러리
│   ├── eslint-config/      # ESLint 설정
│   └── typescript-config/  # TypeScript 설정
├── pnpm-workspace.yaml     # pnpm 워크스페이스 설정
├── turbo.json              # Turborepo 설정
└── vercel.json             # Vercel 설정
```

**의존성 방향**: packages → apps 순서로 단방향 의존성을 유지합니다.

### 모노레포 워크플로우

**개발 시**:

```bash
# 모든 패키지 동시 개발
pnpm dev

# 특정 앱만 개발 (의존성 패키지는 자동 빌드)
pnpm dev --filter=web
```

**빌드 시**:

```bash
# Turborepo가 의존성 순서에 따라 자동 빌드
# 1. @snud2025/typescript-config 빌드
# 2. @snud2025/eslint-config 빌드
# 3. @snud2025/api 빌드
# 4. @snud2025/ui 빌드
# 5. apps/web 빌드
pnpm build
```

### pnpm Workspace 및 Catalog

pnpm workspace를 사용하여 모노레포를 관리합니다. `catalog` 기능으로 의존성 버전을 중앙에서 관리합니다.

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
catalog:
  next: "15.5.7"
  react: "^19.1.0"
```

```json
{
  "dependencies": {
    "next": "catalog:",
    "@snud2025/ui": "workspace:*"
  }
}
```

## 주요 기능

### 1. Notion Database 연동 및 Notion 페이지 렌더링

#### Notion Database 연동

작품과 학생 정보는 Notion Database에서 관리되며, 웹사이트에서 실시간으로 가져옵니다.

- **Works DB** (`NOTION_SNU_WORKS_DB`): 작품 정보
- **People DB** (`NOTION_SNU_PEOPLE_DB`): 학생 정보

Next.js App Router의 서버 컴포넌트에서 데이터를 페칭합니다.

```typescript
// apps/web/app/works/[id]/page.tsx
const [allNotionWorks, recordMap] = await Promise.all([
  getWorks(), // 전체 작품 목록
  getWorkRecordMap(id).catch(() => null), // 상세 내용
]);
```

#### Notion 페이지 렌더링

`react-notion-x`를 사용하여 Notion 페이지를 React 컴포넌트로 렌더링합니다.

#### Notion 이미지 처리

Notion API에서 받아온 이미지 URL은 만료 시간(약 1시간)이 있어 직접 사용 시 이미지가 깨질 수 있습니다. 이를 방지하기 위해 Notion 웹 게시 링크로 변환하여 사용합니다.

```typescript
// packages/ui/src/utils/getImageUrl.ts
export function getImageUrl(imageUrl: string, pageId: string): string {
  return `https://${NOTION_SITE_DOMAIN}/image/${encodeURIComponent(imageUrl)}?table=block&id=${pageId}&cache=v2`;
}
```

#### Notion 데이터 변환

Notion API의 동적 타입 데이터를 안전하게 변환하는 유틸리티 함수를 사용합니다:

```typescript
// apps/web/app/works/utils/transformWorks.ts
export function transformWork(notionWork: NotionWork): ProjectDetail {
  try {
    const properties = notionWork.properties;

    // 기본 정보 추출
    const nameKo = extractText(properties.작품이름) || "제목 없음";
    const nameEn = extractText(properties.작품이름_영문) || "Untitled";
    const studentNameKo = extractText(properties.학생이름) || "";
    const studentNameEn = extractText(properties.학생이름_영문) || "";
    const email = properties.Email?.email || "";
    const instagram = extractText(properties["인스타 아이디"]) || "";

    // filterIndex: 수업 정보에서 추출
    let filterIndex = 0;
    if (
      typeof properties.filterIndex === "object" &&
      "number" in properties.filterIndex &&
      properties.filterIndex.number !== null
    ) {
      filterIndex = properties.filterIndex.number;
    } else if (properties.수업) {
      filterIndex = getFilterIndexFromClass(properties.수업);
    }

    const projectType = getCategoryByIndex(filterIndex) || "BRAND";
    const thumbnailUrl = extractCoverUrl(notionWork);

    // 통합 프로젝트 여부 판단
    const isIntegratedProject =
      properties.다른작품?.relation && properties.다른작품.relation.length > 0
        ? false
        : undefined;

    return {
      id: notionWork.id,
      projectType,
      filterIndex,
      nameKo,
      nameEn,
      studentNameKo,
      studentNameEn,
      thumbnailUrl,
      email,
      instagram,
      isIntegratedProject,
    };
  } catch {
    // 기본값 반환으로 안정성 보장
    return {
      /* 기본값 */
    };
  }
}
```

### 2. 캐싱 전략

Next.js의 `unstable_cache`를 활용하여 데이터를 캐싱하고, 개발 환경에서는 캐시를 비활성화하여 실시간 업데이트를 확인할 수 있습니다:

```typescript
// apps/web/services/common/getDatabase.ts
export const getNotionDatabase = cache(
  async <T>(
    client: Client,
    databaseId: string,
    cacheKey?: string,
    revalidateSeconds
  ): Promise<T[] | []> => {
    return unstable_cache(
      async () => {
        return await queryNotionDatabase<T>(client, databaseId, sorts);
      },
      [
        cacheKey || `notion-database-${databaseId}`,
        ...(process.env.NODE_ENV === "development"
          ? [Date.now().toString()]
          : []),
      ],
      {
        revalidate:
          process.env.NODE_ENV === "development" ? false : revalidateSeconds,
        tags: ["notion-database", `notion-database-${databaseId}`],
      }
    )();
  }
);
```

프로덕션에서는 10분(600초) 캐시를 유지하고, 개발 환경에서는 캐시를 비활성화합니다.

### 3. Matter.js 물리 엔진

#### 메인 그래픽 (`PhysicsScene`)

홈페이지의 인터랙티브 물리 시뮬레이션입니다.

#### People 페이지 (`PhysicsCell`)

각 셀마다 독립적인 물리 엔진 인스턴스를 생성하여 DOM 요소와 동기화합니다:

```typescript
// apps/web/app/people/components/PhysicsCell/PhysicsCell.tsx
const tick = () => {
  Engine.update(engine, 1000 / 60); // 물리 시뮬레이션 실행

  // DOM 요소에 위치와 회전 반영
  for (let i = 0; i < bodies.length; i++) {
    const b = bodies[i];
    wrapper.style.left = `${b.position.x - w / 2}px`;
    wrapper.style.top = `${b.position.y - h / 2}px`;
    wrapper.style.transform = `rotate(${b.angle}rad)`;
  }
  raf = requestAnimationFrame(tick);
};
```

### 4. API 에러 핸들러

Notion API 호출 시 발생하는 에러를 타입별로 구분하여 처리합니다.

#### 1단계: 에러 타입 정의

```typescript
// packages/api/src/error.ts
export class ClientError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ClientError";
  }
}

export class ServerError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ServerError";
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
```

#### 2단계: 에러 파싱 함수 구현

```typescript
// packages/api/src/error.ts
export function parseError(err: unknown): never {
  if (isNotionClientError(err)) {
    if (err instanceof APIResponseError) {
      const status = err.status;
      // 클라이언트 에러 (4xx)
      if (status >= 400 && status < 500) {
        throw new ClientError(status, message);
      }
      // 서버 에러 (5xx)
      if (status >= 500) {
        throw new ServerError(status, message);
      }
    }
    // 네트워크 에러
    throw new NetworkError(err.message);
  }
  // 알 수 없는 에러
  throw new Error("Unknown error occurred");
}
```

#### 3단계: API 호출 시 에러 처리 적용

```typescript
// packages/api/src/request.ts
export async function queryNotionDatabase<T>(
  client: Client,
  databaseId: string
): Promise<T[]> {
  try {
    const response = await client.databases.query({
      database_id: databaseId,
    });
    return response.results as T[];
  } catch (error) {
    parseError(error); // 에러 타입에 따라 적절히 처리
  }
}
```

이를 통해 클라이언트 에러, 서버 에러, 네트워크 에러를 명확히 구분하여 각각에 맞는 에러 핸들링이 가능합니다.

## 개발 환경 설정

### 환경 변수

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 변수를 설정합니다:

```env
# Notion API
NOTION_DB_API_KEY=your_notion_api_key
NOTION_SNU_WORKS_DB=your_works_database_id
NOTION_SNU_PEOPLE_DB=your_people_database_id

NEXT_PUBLIC_NOTION_SITE_DOMAIN=your_notion_site_domain
```

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (모든 앱)
pnpm dev

# 특정 앱만 실행
pnpm dev --filter=web
pnpm dev --filter=docs

# 빌드
pnpm build

# 린트
pnpm lint

# 포맷팅
pnpm format
```

## 라이선스

이 프로젝트는 서울대학교 디자인과 졸업 전시를 위한 프로젝트입니다.
