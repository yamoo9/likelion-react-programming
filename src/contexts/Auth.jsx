// 컨텍스트
// 1. 컨텍스트 생성 (React.createContext)
// 2. 컨텍스트 프로바이더를 앱을 감쌈
// 3. 컨텍스트 프로바이더를 사용해 값(value) 공급(provide)

// 컴포넌트
// 1. useContext 훅을 사용해서 공급된 컨텍스트 값을 주입(injection)
// 2. JSX 또는 이벤트 핸들러 내부에서 값을 사용

/* -------------------------------------------------------------------------- */

import { createContext, useEffect, useState, useContext } from 'react';
import pb from '@/api/pocketbase';

// Context 생성
const AuthContext = createContext();

// 초기 인증 상태
const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

// Context.Provider 래퍼 컴포넌트 작성
function AuthProvider({ displayName = 'AuthProvider', children }) {
  // 인증 상태
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    const unsub = pb.authStore.onChange((token, model) => {
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });

    return () => {
      unsub?.();
    };
  }, []);

  // 메서드: 할 수 있는 기능
  // 회원가입, 로그인, 로그아웃, 가입탈퇴
  // 서버는 대기 시간 (비동기 요청/응답)
  const signUp = async (registerUser) => {
    return await pb.collection('users').create(registerUser);
  };

  const signIn = async (usernameOrEmail, password) => {
    return await pb
      .collection('users')
      .authWithPassword(usernameOrEmail, password);
  };

  const signOut = async () => {
    return await pb.authStore.clear();
  };

  const secession = async (recordId) => {
    return await pb.collection('users').delete(recordId);
  };

  const authValue = {
    ...authState,
    signUp,
    signIn,
    signOut,
    secession,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// 커스텀 훅
// 인증 정보를 앱 어디서나 손쉽게 주입 받아 쓸 수 있도록 하는 함수
export const useAuth = () => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }

  return authValue;
};
