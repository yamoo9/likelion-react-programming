import GoToButton from "./GoToButton";
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      
      <GoToButton 
        direction="down" 
        label="스크롤 다운" 
        onClick={() => {
          // side effect
          const practiceElement = getNode('.Practice');
          console.log(practiceElement)
        }}
      />

      <GoToButton 
        direction="up" 
        label="스크롤 업" 
        onClick={() => {
          console.log('go to up');
        }} 
      />
    </div>
  );
}

export default Controller;
