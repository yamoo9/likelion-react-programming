# 8. 21(월)

## 과제 검토

1. 이미지 경로 문제
1. 성능 문제 (디바운싱으로 해결)

## 데이터 CRUD

1. React Router 동적 라우팅(Dynamic Routing)
1. PocketBase 데이터 읽기/쓰기/수정/삭제
1. 폼 상태(Form State) 관리

## 인증

1. PocketBase 인증(Authentication)
1. 회원가입(Signup)
1. 로그인(Signin)


# 8. 18(금)

## 커스텀 훅 & 클라이언트 측 라우팅

1. 커스텀 훅(Custom Hook)을 사용해 재사용 로직(logic)을 분리합니다.
1. 클라이언트 사이드 라우팅(CSR) 적용 방법을 학습합니다.
    - React Router v6.4+ 라이브러리 설치
    - React Router 컴포넌트를 활용해 라우터(Router) 구성

## 컴포넌트 간 상태 공유 및 DOM 접근/조작

1. 속성(props) 전달
1. 상태 끌어올리기(Lifting state up)
1. 프롭스 드릴링(Props Drilling) 현상
1. 컨텍스트(Context)를 사용한 상태 공급
1. Refs를 활용해 값을 참조하는 방법
1. Refs를 활용해 DOM에 접근/조작하는 방법


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