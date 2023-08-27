import { Helmet } from 'react-helmet-async';

function ZustandLibrary() {
  return (
    <>
      <Helmet>
        <title>Zustand Library - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">
        {/* 참고: 
          http://berlinreport.com/bbs/board.php?bo_table=deutschqna&wr_id=31160 
          https://namu.wiki/w/%EB%8F%85%EC%9D%BC%EC%96%B4/%EB%B0%9C%EC%9D%8C#toc
          https://bit.ly/3Lmebx5
          https://bit.ly/3KYeFsJ

          독일어 Zu는 혀끝을 아래 이에 붙이고 'ㅊ' 또는 'ㅅ'과 비슷하게 발음하는 "치경 파찰음"으로 현재 한국인이 발음하기 힘듭니다.
          발음 기호를 보면 tsuu·schtant 이고, 발음을 들어보면 "츄(또는 슈)슈탄트"라고 들립니다.

        */}
        Zustand(츄슈탄트) 라이브러리 활용
      </h2>
    </>
  );
}

export default ZustandLibrary;
