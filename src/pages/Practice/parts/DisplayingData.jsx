// 유틸리티 함수 호출
import { getRandom } from '@/utils/getRandomMinMax';

function DisplayingData({ statusMessage }) {

  return (
    <>
      <dt hidden>데이터 바인딩(data binding)</dt>
      <dd hidden>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* displaying data */}

          {/* 1-1. statusMessage 배열의 원소 중 하나의 값을 화면에 표시합니다. */}
          {/* { statusMessage } */}
          {/* { statusMessage[0] } */}
          {/* { statusMessage[1] } */}
          {/* { statusMessage[2] } */}
          {/* { statusMessage[3] } */}
          {/* { statusMessage[4] } undefined */}

          {/* [🚨 오류] 객체 타입은 React의 자식 타입으로 적절하지 않습니다. */}
          {/* { reactLibrary } */}

          {/* 1-2. 랜덤 숫자 인덱스의 원소 값 표시 도전! */}

          {/* JSX는 JavaScript 표현식(Expression) 그러므로 항상 결과 값을 반환 */}
          {/* JSX 안에서는 문을 사용할 수 없다. (❌ if, for, while, switch ..) */}
          {/* {statusMessage[Math.floor(Math.random() * statusMessage.length)]} */}
          {/* 유틸리티 함수를 사용하면 클린 코드 작성 가능 */}
          {statusMessage[getRandom(statusMessage.length - 1)]}
        </span>
      </dd>
    </>
  )
}

export default DisplayingData