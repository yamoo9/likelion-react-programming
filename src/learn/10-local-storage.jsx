import useStorage from '@/hooks/useStorage';
import { useRef } from 'react';

function LocalStorage() {
  const inputRef = useRef(null);
  const { storageData, update, remove } = useStorage('yamoo9');

  return (
    <>
      <h2>로컬 스토리지 관리</h2>

      <div className='flex gap-2'>
        <button
          onClick={() => {
            update(inputRef.current.value)
          }}
          type="button"
          className="border border-slate-300 p-2 my-2"
        >
          저장
        </button>
        <button
          onClick={() => {
            remove()
          }}
          type="button"
          className="border border-red-300 p-2 my-2"
        >
          삭제
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="storage-data">스토리지 데이터</label>
        <input
          ref={inputRef}
          type="text"
          id="storage-data"
          placeholder="기억할 메시지 작성"
          className="border border-slate-300"
        />

        <p>{storageData ? '데이터가 있음' : '데이터 없음'}</p>
      </div>
    </>
  );
}

export default LocalStorage;
