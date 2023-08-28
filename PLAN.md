###### [학습 요약](./SUMMARY.md) 보기

# 8. 29(화)

## 수업 피드백

<details>
  <summary>요약</summary>
  
  ### 응답률: 54/64(83%), -10

  - 학습 난이도: 4.43/5 (88.6)
  - 학습 만족도: 3.52/5 (70.4)
  - 진도에 대한 생각: 3.48/5 (69.6)
  - 실습시간 충분 여부: 3.46/5 (69.2)
  - 학습 상담 만족도: 3.41/5 (68.2)
  - 기초 특강 만족도: 4.11/5 (82.2)
  
  ### 아쉬웠던 점

  1. 리액트 너무 너무 어렵다. 그런데 배울 것도 너무 많다.
  1. 화면 전환을 최소화했으면 한다. (WI-FI 이슈로 수업 듣기 어려움)
  1. 8시간 강의 듣기 정말 힘들다. 진도 때문에 이해는 되지만 약간 무리다.
  1. 수업 난이도가 높은데 진도가 너무 빨라 수업 따라가기 힘들다.
  1. 초반 질문이 많아 지체되었고, 다룰 내용도 많아 진도가 느린 것처럼 느껴진다.
  1. 잘 따라가는 1/3 학생들만 챙기고, 못 따라가는 2/3 학생들은 챙기지 않는다.
  1. 한 번 흐름을 놓치면 따라가기 힘든 수업이다. 여러모로 아쉬운 수업이다.
  1. 정규 수업을 보충해야 하는 기초 수업에서 수업 외적인 추가 내용을 다뤄 아쉬웠다.
  1. 어려운 기술 용어를 쉽게 풀었다면 좀 더 이해하기 쉬웠을 것이다.
  1. 어려운 개념을 쉽게 설명하기 보다, 제대로 설명하려 해서 어렵다.
  1. API 문서 읽는 법을 천천히 진행하면 좋겠다.
  1. 솔직히 수업 시간에 자바스크립트 공부한다.
  1. 더 배우고 싶다. 진도를 나가달라.

  ### 좋았던 점

  1. 수업 전 배울 내용을 먼저 이야기 하고, 수업 끝날 때 정리해서 좋았다.
  1. 실질적인 프로젝트 개발에 중요한 부분 학습이라 도움이 많이 되었다.
  1. 학습 주제 별로 넘버링 해줘서 복습 시 해매지 않아 좋았다.
  1. 학습 문서(notion)는 수료 이후에도 열람이 가능할까?
  1. 목 상태가 안 좋음에도 열정적인 모습 보여줘서 감사했다.
  1. 적극적으로 피드백 받아 개선하려 노력한 점에 감사했다.
  1. 프로젝트 시작 전, 다양한 주제를 다뤄줘서 좋았다.
</details>


## 앱 상태 관리

- [ ] [Zustand](https://docs.pmnd.rs/zustand) 라이브러리
- [ ] [셀렉터 함수와 쉘로우](https://www.notion.so/euid/560cae85747a45aea181e86e62b131aa)
- [ ] [비동기 액션](https://www.notion.so/euid/f002c79d9b32493bb925b6c25a7e42af)
- [ ] [액션에서 상태 읽기](https://www.notion.so/euid/297cde9e53594c358586aba170d66414)
- [ ] [미들웨어](https://www.notion.so/euid/Middleware-adae517594c241618e9d77d8d9d5a78d?pvs=4#658f112c0ded47d1a00200c19fdcaea5) / [커스텀 미들웨어 구성](https://www.notion.so/euid/bb54c1d8590a4db5b12da34573565bb6)
- [ ] [Immer 미들웨어](https://www.notion.so/euid/Immer-70a57767fbbc48bdbda75baf981d99a9) / [Immer를 활용한 중첩도가 깊은 상태 변경](https://www.notion.so/euid/Immer-81d6c36501d34a39adc48d44fb457398)
- [ ] [replace 플래그](https://www.notion.so/euid/d9c0b09db68c449894a0fdbeb0376a7f?pvs=4#50cc6e2619fb42ac9c0a6b0e3ac80ff5) / [상태 덮어쓰기 옵션](https://www.notion.so/euid/5cf69dd471964f24a11692b8ac77a8cc)
- [ ] [Zustand 개발 도구 구성](https://www.notion.so/euid/Zustand-4621b0add719415d93546e7b275b46a4?pvs=4#bd049af8cc114fee9b79fe77d04e085c) / [Redux 개발자 도구](https://www.notion.so/euid/Redux-6421f508da7f4067b36ed1bc1ca13163)
- [ ] [persist 미들웨어](https://www.notion.so/euid/Persist-a1bd4094cb004fce951fbe7c049e1ab7) / [스토리지에 데이터 유지](https://www.notion.so/euid/4ba0753a7a534860882afa5e49f5954a)

### 앱 상태 관리 실습

- [ ] 사이드 메뉴 표시/감춤 상태를 앱에서 관리 (with Zustand)
- [ ] 인증(authentication) 상태 방법을 Zustand 방식으로 변경 (이전 방식과 비교)
- [ ] 테마(theme) 상태 방법을 Zustand 방식으로 변경 (이전 방식과 비교)
- [ ] 미들웨어 구성으로 손쉽게 상태 관리 (create ← [immer](https://immerjs.github.io/immer/) ← [devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko))
- [ ] [Ramda](https://ramdajs.com/) 라이브러리를 활용해 미들웨어가 포함된 createStore 유틸리티 작성<br /><details>
  <summary>createStore 유틸리티</summary>

  Ramda 라이브러리 + Redux 개발 도구 + Immer 라이브러리를 활용한 유틸리티 함수 작성
  ```js
  import pipe from 'ramda/es/pipe';
  import { produce } from 'immer';
  import { create } from 'zustand';
  import { devtools } from 'zustand/middleware';
  
  // immer 미들웨어
  const immer = (config) => (set, get, api) => 
    config((fn) => set(produce(fn)), get, api);

  // createStore 유틸리티
  export const createStore = pipe(
    devtools,
    immer,
    create
  );
  ```
</details>


## 서버 상태 관리

- [ ] [TanStack Query](https://tanstack.com/query/latest) 라이브러리<br /><small>React Query에서 변경 됨. Vue, Solid JS, Svelte에서도 사용할 수 있기 때문.</small>
- [ ] [TanStack Query를 사용하는 이유](https://www.notion.so/euid/React-Query-fcbfa56c81324a11ada4c09c6207109f?pvs=4#03fdf0215fd54fc9a6b9a764749bd6d1) - [📘](https://tanstack.com/query/latest/docs/react/overview)
- [ ] [TanStack Query v4 설치 및 초기 구성](https://www.notion.so/euid/3c27750039434fbea8669f114c2db83f) - [📘](https://tanstack.com/query/latest/docs/react/installation)<br/><small>[v5](https://tanstack.com/query/v5/docs/react/overview) 공식 문서도 있지만, 현재 v4가 Latest 버전임.</small>
- [ ] [TanStack Query 개발 도구](https://www.notion.so/euid/3c27750039434fbea8669f114c2db83f?pvs=4#584b2eaaa447462fa4ca160c805e7971) - [📘](https://tanstack.com/query/latest/docs/react/devtools)
- [ ] [데이터 가져오기](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#17a8aafb10ce4cd7a39799c91c31aee2) / [로딩 및 오류 조건 처리](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#3e2bb360d64642fbb6078f76972e5ed0) - [📘](https://tanstack.com/query/latest/docs/react/guides/queries)
- [ ] [만료 시간(Stale Time)이란?](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#13d480e11fc8473d9c6c99bb596b74b9) - [📘](https://tanstack.com/query/latest/docs/react/guides/important-defaults)
- [ ] [모든 쿼리에 기본 옵션 적용](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#13d480e11fc8473d9c6c99bb596b74b9) - [📘](https://tanstack.com/query/latest/docs/react/reference/QueryClient)
- [ ] [쿼리 별 옵션 설정](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#f70f39b314f44f2bbdcd6071e66cf350) - [📘](https://tanstack.com/query/latest/docs/react/reference/useQuery)
- [ ] [페이지네이션 쿼리](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#9d86b658c6d34057bd3b19c1c0f41377) - [📘](https://tanstack.com/query/latest/docs/react/guides/paginated-queries)
- [ ] [인피니티 쿼리](https://www.notion.so/euid/Query-30a62125b44243b6b1b8987552bacc3c?pvs=4#c945fe2e764e4f80b7e722676db446c9) - [📘](https://tanstack.com/query/latest/docs/react/guides/infinite-queries)
- [ ] [뮤테이션이란?](https://www.notion.so/euid/Mytation-5ee4a531fb024aa79bb16bb9dafc88ee?pvs=4#2dc0740aceed4c3193432e99648ca532) - [📘](https://tanstack.com/query/latest/docs/react/guides/mutations)
- [ ] [뮤테이션 → UI 업데이트](https://www.notion.so/euid/Mytation-5ee4a531fb024aa79bb16bb9dafc88ee?pvs=4#9cafc1e70e79421b925065ebe3a483b4) - [📘](https://tanstack.com/query/latest/docs/react/reference/useQueryClient) / [📘](https://tanstack.com/query/latest/docs/react/guides/updates-from-mutation-responses)
- [ ] [뮤테이션 진행 중 혹은 오류 처리](https://www.notion.so/euid/Mytation-5ee4a531fb024aa79bb16bb9dafc88ee?pvs=4#e4bcffac48ff471ea85beee3d8e087a9) - [📘](https://tanstack.com/query/latest/docs/react/guides/mutations)
- [ ] [옵티미스틱 업데이트](https://www.notion.so/euid/Mytation-5ee4a531fb024aa79bb16bb9dafc88ee?pvs=4#8989a2c9157b4567a2dfbf79be5ddb2a) - [📘](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates)

### 서버 상태 관리 실습

- [ ] 서버 데이터 캐싱
- [ ] 페이지네이션 쿼리
- [ ] 인피니티 쿼리
- [ ] 뮤테이션 → UI 업데이트

## 성능 개선

- [ ] [코드 분할 (Code Split)](https://ko.legacy.reactjs.org/docs/code-splitting.html#bundling)
- [ ] [이미지 최적화 (Optimization Images)](https://www.npmjs.com/package/@vheemstra/vite-plugin-imagemin)
- [ ] [프로덕션 버전으로 빌드(Build for Production)](https://ko.vitejs.dev/guide/build.html)
- [ ] [멋사 4기, 성능 개선 사례](https://github.com/yamoo9/likelion-FEQA/issues/286#issuecomment-1504926019) ( [BEFORE](https://github.com/yamoo9/likelion-FEQA/files/11183331/POTATO-MARKET-main.zip) → [AFTER](https://github.com/yamoo9/likelion-FEQA/files/11209558/POTATO-MARKET-review-by-yamoo9.zip) )<br /><details>
  <summary>Vite 성능 최적화 구성 (참고)</summary>
  
  Vite 이미지 최적화 플러그인 패키지를 설치합니다.

  ```bash
  pnpm add -D @vheemstra/vite-plugin-imagemin imagemin-{gifsicle,mozjpeg,pngquant,svgo,webp}
  ```

  Vite 구성 파일을 열어 최적화 구성을 추가합니다.

  ```js
  import * as path from "node:path";
  import react from "@vitejs/plugin-react";
  import { defineConfig, splitVendorChunkPlugin } from "vite";
  import viteImagemin from "@vheemstra/vite-plugin-imagemin";
  import imageminGifSicle from "imagemin-gifsicle";
  import imageminMozjpeg from "imagemin-mozjpeg";
  import imageminPngQuant from "imagemin-pngquant";
  import imageminSvgo from "imagemin-svgo";
  import imageminWebp from "imagemin-webp";

  export default defineConfig({
    // ...
    plugins: [
      react(),
      // 청크(chunk) 파일 생성 플러그인 구성
      splitVendorChunkPlugin(),
      // 이미지 최적화 플러그인 구성
      viteImagemin({
        plugins: {
          jpg: imageminMozjpeg(),
          png: imageminPngQuant(),
          gif: imageminGifSicle(),
          svg: imageminSvgo(),
        },
        makeWebp: {
          plugins: {
            jpg: imageminWebp(),
            png: imageminWebp(),
          },
        },
      }),
    ],
    // 빌드 시, 청크 파일 생성 매뉴얼 구성
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            reactRouter: ["react-router", "react-router-dom"],
          },
        },
      },
    },
  });  
  ```
</details>


## 배포

- [ ] React 애플리케이션 배포 ([vercel](https://ko.vitejs.dev/guide/static-deploy.html#vercel))
- [ ] PocketBase 데이터베이스 배포 ([pockethost.io](https://pockethost.io) / [Fly.io](https://fly.io/))


## 풀스택 프레임워크

- [ ] [Next.js](https://nextjs.org/) 프레임워크
- [ ] [Next.js 소개](https://www.notion.so/euid/2a2b409709404d7dab77aefcac7ea144)
- [ ] [Next.js 설치](https://www.notion.so/euid/bac3929223e047e1868233a92bd12759)
- [ ] [Next.js 프로젝트 구조](https://www.notion.so/euid/95b8c3ba445545f2afd932bf84f4c7d7)
- [ ] [앱 라우터(v13) vs. 페이지 라우터(v12)](https://nextjs.org/)
- [ ] [앱 라우터를 사용한 라우팅](https://www.notion.so/euid/15824eb80fad4eef832c91067730ae0f)
    - [ ] [폴더 및 파일 기반 라우팅 시스템](https://www.notion.so/euid/dd375a95636a468ab05b9ec0f3b727e2)
    - [ ] [레이아웃 & 페이지](https://www.notion.so/euid/0575b86744834c21bf623a366ca49cc7)
    - [ ] [내비게이션 & 링크](https://www.notion.so/euid/4b8feb28baa24203be743a2b5cb02da8)
    - [ ] [다이내믹 라우트](https://www.notion.so/euid/4c7f5195de374b25876278babf61f9c2)
- [ ] [Raect 서버 컴포넌트 vs. 클라이언트 컴포넌트](https://www.notion.so/euid/React-eabe527dcf5f4873a00c6c8c5fbe9a68)
- [ ] [데이터 가져오기](https://www.notion.so/euid/cb5b6c2bb6144d3397454e1453b36026)

# 8. 28(월)

## 디자인 & 애니메이션

- [x] 파비콘 / 로고 애니메이션
- [x] 페이지 전환 애니메이션 ([참고](https://www.framer.com/motion/examples/#react-router-6-page-transitions) / [createBrowserRouter 해결 방법](https://stackoverflow.com/a/74351729))
- [x] 프로덕트 리스트 페이지 시퀀스 애니메이션
- [x] 페이지 디자인(정리) 
    - [x] 회원가입
    - [x] 로그인
    - [x] 상품 등록 (페이지 제목 설정)
    - [x] 상품 수정 (페이지 제목 설정)
- [x] 반응형 디자인
    - [x] 프로덕트 페이지 (멀티 컬럼)
    - [x] `md:`, `lg:` 브레이크포인트 클래스 이름 활용
- [x] 다크 모드 디자인
    - [x] `dark:` 클래스 이름 활용

## 컴포넌트 추출

- [x] 재사용 가능하도록 반복적인 로직을 컴포넌트로 추출
    - [ ] 회원가입
    - [x] 로그인
    - [ ] 상품 등록
    - [ ] 상품 수정

## 인증 

- [x] `useStorage` 커스텀 훅 리팩터링

## 라우팅

- [x] 인증 상태 + 보호된 루트에서 새로고침 시 로그인 페이지로 이동하는 문제
- [x] 루트 보호 URL 직접 접속 시, 로그인 후 접속 URL로 연결
- [x] 브라우저 히스토리 이력 대체(replace)
    1. 루트 보호 URL 접속 시도
    1. 로그인 페이지 이동 (로그인 접속 이력 제외)
    1. 접속 URL로 연결

## PocketBase 관계 확장

- [x] 관계형 데이터베이스란? ([참고](https://cloud.google.com/learn/what-is-a-relational-database?hl=ko))
- [x] 데이터 관계 확장 요청(Expand Request)
- [x] 데이터 간 관계 설정 방법 실습

## 스타일 모듈

- [x] JSX 마크업이 복잡한 경우, CSS 모듈을 사용해 스타일 분리
- [x] 스타일 분리를 선호하지 않는다면?<br />[Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold) 확장 활용 ([Toggle](https://marketplace.visualstudio.com/items?itemName=rebornix.toggle) 확장 사용 시, 단축키 등록 가능)
- [x] Prettier + Tailwind CSS Intellisence 사용 시 너무 느리다면?<br />[Rome](https://rome.tools/) 사용 권장

## 대시보드 (관리자 페이지)

- [ ] 상품 추가(NEW)
- [ ] 상품 수정(EDIT)
- [ ] 상품 삭제(DELETE)


# 8. 25(금)

## 컴포넌트 속성(props) 검사

- [x] 속성(props) 매뉴얼 검사
- [x] [prop-types](https://www.npmjs.com/package/prop-types) 패키지 활용
- [x] Vite 개발 도구 `lint` 명령

## 인증

- [x] LocalStorage (`useStorage` 커스텀 훅)
- [x] 인증 유지 (Persist Authentication)

## 라우팅

- [x] 인증에 따른 라우팅 접근 시도 중 발생한 경고 해결 방법
    - Warning: Cannot update a component (`Ie`) while rendering a different component (`ProtectRoute`). 
    - To locate the bad setState() call inside `ProtectRoute`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
- [x] [useLocation](https://www.notion.so/euid/Advanced-v6-3-09cfe08490104dd18167f4c968de4b3f#75f0d60253834b8f93c1dc910e44e9df) 훅 (`pathname`, `search`, `hash`, `state`)

## 파일 업로드

- [x] 상품 추가(NEW)
- [x] [form](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form) 폼 요소 ([`multipart/form-data`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form#attr-enctype))
- [x] [input:file](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/file) 파일 업로드
- [x] [FormData](https://developer.mozilla.org/ko/docs/Web/API/FormData) 폼 데이터


# 8. 24(목)

## 이슈 검토

- [ ] useEffect 훅 종속성 배열(경고 & 루프 순환) 이슈

## 컴포넌트 간 상태 공유 및 DOM 접근/조작

- [x] Refs를 활용해 값을 참조하는 방법 (렌더링 ❌)
- [x] Refs를 활용해 DOM에 접근/조작하는 방법 (예: [GSAP](https://greensock.com/gsap/))

## 선언형 애니메이션 라이브러리

- [x] 선언형 프로그래밍으로 작성하는 애니메이션 ([Framer Motion](https://framer.com/motion))
- [x] 컴포넌트 (또는 애니메이션) 초기화 (고유한 `key` 속성(prop) 설정)

## 인증

- [x] 로그아웃 (Sign Out)
- [x] 인증 스토어 - PocketBase AuthStore
- [x] 인증 공급자 - React Context API
- [x] `useAuth`, `useSetAuth` 커스텀 훅
- [x] 루트 보호(Protected Route) 컴포넌트
- [x] 토스트(Toast) 알림 (참고: [react-hot-toast](https://react-hot-toast.com/docs/toast))


# 8. 23(수)

## 이슈 솔루션

1. 상품 수정 페이지로 이동할 때 가격이 0원이 되는 문제
1. 회원가입/로그인 페이지 폼 입력 성능 이슈 (디바운싱)

## 컴포넌트 간 상태 공유 및 DOM 접근/조작

1. 속성(props) 전달
1. 상태 끌어올리기(Lifting state up)
1. 프롭스 드릴링(Props Drilling) 현상
1. 컨텍스트(Context)를 사용한 상태 공급
1. React Context 개발 도구 (참고: [react-context-devtool](https://github.com/deeppatel234/react-context-devtool))


# 8. 22(화)

## 데이터 CRUD

1. PocketBase 데이터 읽기/쓰기/수정/삭제
1. 폼 상태(Form State) 관리

## 인증

1. PocketBase 인증(Authentication)
1. 회원가입(Signup)
1. 로그인(Signin)

# 8. 21(월)

## 과제 검토

1. 이미지 경로 문제
1. 성능 문제 (디바운싱으로 해결)

## 데이터 CRUD

1. React Router 동적 라우팅(Dynamic Routing)


# 8. 18(금)

## 커스텀 훅 & 클라이언트 측 라우팅

1. 커스텀 훅(Custom Hook)을 사용해 재사용 로직(logic)을 분리합니다.
1. 클라이언트 사이드 라우팅(CSR) 적용 방법을 학습합니다.
    - React Router v6.4+ 라이브러리 설치
    - React Router 컴포넌트를 활용해 라우터(Router) 구성

# 8. 17(목)

## 컴포넌트 사이드 이펙트 & 백엔드 데이터베이스 솔루션

1. 사이드 이펙트를 관리하는 이벤트 핸들러 및 useEffect 훅의 콜백 함수를 실습하고 요약 정리합니다.
    - 이펙트 콜백 함수 (effect callback function)
    - 이펙트 콜백 함수 실행 조건 설정 (dependencies)
    - 이펙트 클린업 함수 (cleanup)
1. PocketBase 다운로드 및 콜렉션 구성
    - 운영체제 별 다운로드
    - 애플리케이션 실행
    - 콜렉션, 레코드, 필드 개념
    - todos 콜렉션 생성 및 레코드 작성
    - 컴포넌트에서 useEffect 훅을 사용해 데이터 가져오기

# 8. 16(수)

## 컴포넌트 상태 관리

1. 데이터 타입 별 상태 관리 방법을 실습합니다.
    - <u>number</u> : `count`, `age`, `x`, `y`, `selectedFontWeight`
    - <u>string</u> : `firstName`, `lastName`, `message`, `selectedColor`
    - <u>boolean</u> : `isMounted`, `isVisible`, `isSubmitted`
    - <u>object</u> : `mousePosition`
    - <u>array</u> : `colors`, `fontWeights`