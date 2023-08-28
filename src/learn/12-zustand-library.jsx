import { useListStore } from '@/store/list';
import { string } from 'prop-types';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

function ZustandLibrary() {
  return (
    <>
      <Helmet>
        <title>Zustand Library - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">Zustand 라이브러리 활용</h2>

      <details>
        <summary>Zustand 발음 어떻게 해야할까요?</summary>

        <p className="mt-4 pl-4 leading-normal text-sm">
          독일어 Zu는 혀끝을 아래 이에 붙이고 <q>ㅊ</q> 또는 <q>ㅅ</q>과
          비슷하게 발음하는{' '}
          <q>
            <a
              href="https://namu.wiki/w/%EC%B9%98%EA%B2%BD%EC%9D%8C#%ED%8C%8C%EC%B0%B0"
              target="_blank"
              rel="noreferrer"
              className="text-sky-600"
            >
              치경 파찰음
            </a>
          </q>
          으로 현재 한국인이 발음하기 힘듭니다. 발음 기호를 보면{' '}
          <u>tsuu·schtant</u>이고, 발음을 들어보면 <q>츄(또는 슈)슈탄트</q>
          라고 들립니다.
        </p>

        <ul className="pl-6 my-5 flex flex-col gap-2 list-image-[url('/link.svg')] text-slate-500">
          <li>
            <a
              href="https://bit.ly/3Lmebx5"
              rel="noreferrer"
              target="_blank"
              className="hover:text-slate-950"
            >
              zustand 발음 - Google 검색
            </a>
          </li>
          <li>
            <a
              href="http://berlinreport.com/bbs/board.php?bo_table=deutschqna&wr_id=31160"
              rel="noreferrer"
              target="_blank"
              className="hover:text-slate-950"
            >
              <q>zu 발음이 어려워요.</q> - 베를린 리포트
            </a>
          </li>
          <li>
            <a
              href="https://namu.wiki/w/%EB%8F%85%EC%9D%BC%EC%96%B4/%EB%B0%9C%EC%9D%8C#toc"
              rel="noreferrer"
              target="_blank"
              className="hover:text-slate-950"
            >
              독일어 / 발음 - 나무위키
            </a>
          </li>
          <li>
            <a
              href="https://bit.ly/3KYeFsJ"
              rel="noreferrer"
              target="_blank"
              className="hover:text-slate-950"
            >
              독일어 갤러리 - 디시인사이드
            </a>
          </li>
        </ul>
      </details>

      <AddItemControl />
      <ItemList />
    </>
  );
}

export default ZustandLibrary;

function AddItemControl() {
  const itemRef = useRef(null);
  const addItem = useListStore((state) => state.addItem);

  const handleAddItem = () => {
    const newItemTitle = itemRef.current.value;
    addItem(newItemTitle);
    itemRef.current.value = '';
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        ref={itemRef}
        aria-label="학습 주제 추가"
        placeholder="예) Zustand 발음 10번 하기"
        className="py-1 px-2 border-b border-b-slate-400 mr-2"
      />
      <button type="button" onClick={handleAddItem}>
        추가
      </button>
    </div>
  );
}

function ItemList() {
  const list = useListStore((state) => state.list);

  return (
    <ul className="my-8">
      {list?.map((item) => (
        <Item key={item.id} id={item.id} />
      ))}
    </ul>
  );
}

function Item({ id }) {
  const item = useListStore((state) =>
    state.list.find((item) => item.id === id)
  );
  const deleteItem = useListStore((state) => state.deleteItem);
  const handleDeleteItem = (deleteId) => {
    deleteItem(deleteId);
  };

  return (
    <li>
      {item.title}{' '}
      <button type="button" onClick={() => handleDeleteItem(item.id)}>
        삭제
      </button>
    </li>
  );
}

Item.propTypes = {
  id: string.isRequired,
};
