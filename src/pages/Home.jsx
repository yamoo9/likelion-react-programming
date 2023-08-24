import pb from '@/api/pocketbase';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useEffect } from 'react';

function Home() {
  useDocumentTitle('홈');

  useEffect(() => {
    // 로그인
    // 사용자 브라우저 로컬 스토리지에 저장
    const { isValid, model, token } = pb.authStore;
    console.log(isValid); // boolean
    console.log(model); // null or { id, email, ... }
    console.log(token); // '' or 'unique_token_data'
  }, []);

  // 로그아웃
  // 사용자 브라우저 로컬 스토리지에 저장된 데이터를 삭제
  const handleSignOut = () => pb.authStore.clear();

  return (
    <div className="grid place-content-center bg-hero bg-center bg-cover min-h-[calc(100vh_-_200px)]">
      <h2 className="text-white tracking-widest font-extralight text-4xl uppercase">
        Shop<span className="text-[60px] text-yellow-400">.</span>
      </h2>
      {pb.authStore.isValid && (
        <button
          type="button"
          onClick={handleSignOut}
          className="text-white text-4xl p-4"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Home;
