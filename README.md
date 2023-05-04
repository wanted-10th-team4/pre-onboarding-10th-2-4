## Best Search - 2주차 과제

## 목차

- 프로젝트소개
- 기능소개
- 실행
- 개발환경
- 기술스택
- 프로젝트 파일 구조
- 팀소개

## 프로젝트 소개

저희 팀의 프로젝트는 Best Search입니다.

사이트의 검색 영역을 클론하여 검색창을 구현했습니다.
검색창에 검색어를 입력했을 때 해당하는 검색어를 추천해주는 기능을 구현했습니다.

이 프로젝트는 10명의 팀원 모두 함께 진행하였으며, 각자 과제를 수행한 후 결과물을 통해서 팀원들끼리 토론하여 가장 적절하다고 생각하는 방식을 도출하였습니다.

#### Best Practice인 이유

### 📍 API 호출별로 로컬 캐싱 구현

![캐시스토리지](https://user-images.githubusercontent.com/61536153/236210631-748d87fd-856b-47ef-8a96-61f276a0ba4b.gif)

- API 호출 시 Cache Storage를 확인하여 캐싱된 데이터가 있다면 API 호출을 하지 않고 캐싱된 데이터를 사용하도록 구현했습니다.
- expire time을 24시간으로 설정하여 expire time이 지나면 Cache Storage에서 캐싱된 데이터를 지우고 최신 데이터를 받아오도록 구현했습니다.
- Local Storage는 최대 5MB 저장이 가능하지만 Cache Storage는 크롬의 경우 디스크 최대 용량의 80% 까지 저장할 수 있습니다. Cache Storage 비동기 방식이기 때문에 Local Storage 보다 부하가 적습니다. Local Storage는 String 타입만 지원하지만 Cache Storage는 다양한 타입을 지원합니다.

https://github.com/wanted-10th-team4/pre-onboarding-10th-2-4/blob/e51c20b744ee3b63ae4f15707ced4d4e9e0aa111/src/utils/cache.ts#L1-L23

https://github.com/wanted-10th-team4/pre-onboarding-10th-2-4/blob/e51c20b744ee3b63ae4f15707ced4d4e9e0aa111/src/api/search.ts#L1-L19

<br/>
<br/>

### 📍 검색어 입력마다 API가 호출되지 않도록 API 호출 횟수 줄이기

![디바운싱](https://user-images.githubusercontent.com/61536153/236210532-53741dbe-756e-4ad9-81f6-c4ad1e3c52e8.gif)

- useDebounce custom hook을 생성하여 검색어에 debounce를 적용하였고 사용자가 검색어 입력을 시작한 후 500ms동안 입력이 없으면 API가 호출되도록 구현했습니다.

https://github.com/wanted-10th-team4/pre-onboarding-10th-2-4/blob/214a9bddb10f1f03ae9e83cc2f34940dbec3e4d4/src/hooks/useDebounce.ts#L1-L15

https://github.com/wanted-10th-team4/pre-onboarding-10th-2-4/blob/214a9bddb10f1f03ae9e83cc2f34940dbec3e4d4/src/components/SearchInput/index.tsx#L16-L29

<br/>
<br/>

### 📍 키보드만으로 추천 검색어들로 이동 가능하도록 구현

![키보드이동](https://user-images.githubusercontent.com/61536153/236210693-44ebba6b-10ed-418f-9047-f062a0730791.gif)

- 검색창에서 onKeyDown 이벤트가 발생했을 때 event.key 값이 ArrowDown, ArrowUp일 경우 selectedIndex가 변경되게 했고 추천 검색어의 index와 selectedIndex가 같을 때 background-color가 변경되도록 구현했습니다.

https://github.com/wanted-10th-team4/pre-onboarding-10th-2-4/blob/214a9bddb10f1f03ae9e83cc2f34940dbec3e4d4/src/components/SearchInput/Input.tsx#L27-L49

  <br/>

## 기능소개

#### 배포 링크: [Best Search](https://soft-swan-d92d77.netlify.app/)

## 실행방법

#### install

```
npm install
```

#### start

```
npm start
```

## 개발환경

- 테스트 환경 : Chrome browser
- IDE : Visual Studio Code 1.71.0 (Universal)
- 인프라 : Vercel
- 주요 라이브러리
  - React : 18.2.0
  - TypeScript : 4.9.5
  - React-router-dom : 6.10.0
  - Styled-components : 5.3.10,

## 기술스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"></code>

#### Language

<code><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></code>
<code><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/></code>

#### deploy

<code><img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/></code>

## 프로젝트 파일 구조

```
📦BestToDo
├── .github
│   └── ISSUE_TEMPLATE
├── .husky
├── 📂public
└── 📂src
    ├── 📂api
    ├── 📂components
    │   └── 📂common
    │   └── 📂Landing
    │   └── 📂Recommendation
    │   └── 📂SearchInput
    ├── 📂hooks
    ├── 📂pages
    │   └── 📂LandingPage
    ├── 📂types
    └── 📂utils

```

## 팀소개

|          [wet6123](https://github.com/wet6123)           |          [1two13](https://github.com/1two13)           |          [plumpsqrl9744](https://github.com/plumpsqrl9744)           |          [tkdgh3050](https://github.com/tkdgh3050)           |          [senasoon](https://github.com/senasoon)           |
| :------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------: |
| ![wet6123의 프로필 사진](https://github.com/wet6123.png) | ![1two13의 프로필 사진](https://github.com/1two13.png) | ![plumpsqrl9744의 프로필 사진](https://github.com/plumpsqrl9744.png) | ![tkdgh3050의 프로필 사진](https://github.com/tkdgh3050.png) | ![senasoon의 프로필 사진](https://github.com/senasoon.png) |

|          [5thwin](https://github.com/5thwin)           |          [yminj1029](https://github.com/yminj1029)           |          [Leeseunghwan7305](https://github.com/Leeseunghwan7305)           |          [JKyEun](https://github.com/JKyEun)           |          [chyerin802](https://github.com/chyerin802)           |
| :----------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------: |
| ![5thwin의 프로필 사진](https://github.com/5thwin.png) | ![yminj1029의 프로필 사진](https://github.com/yminj1029.png) | ![Leeseunghwan7305의 프로필 사진](https://github.com/Leeseunghwan7305.png) | ![JKyEun의 프로필 사진](https://github.com/JKyEun.png) | ![chyerin802의 프로필 사진](https://github.com/chyerin802.png) |
