import { getRandom } from '@/utils/getRandomMinMax';

function DisplayingData({ hidden, statusMessage }) {
  return (
    <>
      <dt hidden={hidden}>데이터 바인딩(data binding)</dt>
      <dd hidden={hidden}>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {statusMessage[getRandom(statusMessage.length - 1)]}
        </span>
      </dd>
    </>
  );
}

export default DisplayingData;
