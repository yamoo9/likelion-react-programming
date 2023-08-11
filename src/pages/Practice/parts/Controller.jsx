import GoToButton from "./GoToButton";
import { getNode } from '@/utils/getNode';

function Controller() {
  // 순수 함수(pure function) 영역
  // React 렌더링 과정에서 불필요한 코드가 이 곳에 배치되면 안됩니다.

  return (
    <div role="group" className="buttonGroup">
      
      <GoToButton 
        direction="down" 
        label="스크롤 다운" 
        onClick={() => {
          // 사이드 이펙트(side effect) 영역
          // React 렌더링 과정과 상관 없이 여기에는 어떤 코드든 작성 가능합니다.
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 900, behavior: 'smooth' });
        }}
      />

      <GoToButton 
        direction="up" 
        label="스크롤 업" 
        onClick={() => {
          console.log('go to up');
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 0, behavior: 'smooth' });
        }} 
      />
    </div>
  );
}

export default Controller;
