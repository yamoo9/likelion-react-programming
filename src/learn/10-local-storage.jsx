import useStorage from '@/hooks/useStorage';

function LocalStorage() {
  const { storageData, update, remove } = useStorage('yamoo9');

  return (
    <>
      <h2>로컬 스토리지 관리</h2>

      <button
        onClick={() => {
          // update()
        }}
        type="button"
        className="border border-slate-300 p-2 my-2"
      >
        저장
      </button>

      <div className="flex flex-col gap-2">
        <label htmlFor="storage-data">스토리지 데이터</label>
        <input
          type="text"
          id="storage-data"
          placeholder="기억할 메시지 작성"
          className="border border-slate-300"
        />

        <p>{storageData ? '데이터가 존재' : '데이터 없음'}</p>
      </div>
    </>
  );
}

export default LocalStorage;
