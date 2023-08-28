import Spinner from '@/components/Spinner';
import { numberWithComma } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function DataFetchAndUX() {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchProductsData(page = 1, perPage = 50) {
      try {
        const response = await fetch(
          `https://pb-demo-app.pockethost.io/api/collections/products/records?page=${page}&perPage=${perPage}`
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsData();
  }, []);

  const isError = !!error;

  if (isLoading) {
    return (
      <div className="grid place-content-center h-full">
        <Spinner size={160} />
      </div>
    );
  }

  if (isError) {
    return <div role="alert">{error.toString()}</div>;
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Data Fetcing & User eXperience - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">
        데이터 가져오기 &amp; 사용자 경험(UX)
      </h2>
      <p className="mb-4 text-slate-600">
        사용자 입장에서 과제의 데이터 가져오기 경험에 대해 이야기 해봅시다.
      </p>
      <ul className="flex flex-col gap-1">
        <li>
          <a
            className="text-slate-500 hover:text-slate-900"
            href="https://life-drama.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            🎥 인생 드라마
          </a>
        </li>
        <li>
          <a
            className="text-slate-500 hover:text-slate-900"
            href="https://kakaogoods.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            😺 세숑 &amp; 모찌
          </a>
        </li>
      </ul>
      <hr className="my-4" />
      <p className="mb-4 text-slate-600">
        한 번 가져온 서버의 데이터를 캐싱(cache)한다면?
        <br />
        사용자 경험이 향상될 것입니다. 😃
      </p>
      <ul className="grid grid-cols-3 gap-2">
        {data?.items?.map((item) => {
          console.log(item);
          return (
            <li key={item.id} className="flex flex-col gap-1 my-4">
              <strong>{item.title}</strong>
              <img
                src={
                  !item.photo
                    ? 'https://placehold.co/191x291?text=PHOTO'
                    : `https://pb-demo-app.pockethost.io/api/files/${item.collectionId}/${item.id}/${item.photo}`
                }
                alt=""
              />
              <span>{numberWithComma(item.price)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataFetchAndUX;
