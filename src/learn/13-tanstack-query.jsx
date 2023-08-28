import Spinner from '@/components/Spinner';
import { numberWithComma } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function TanstackQueryLibrary() {
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
    return <Spinner size={160} />;
  }

  if (isError) {
    return <div role="alert">{error.toString()}</div>;
  }

  return (
    <>
      <Helmet>
        <title>@tanstack/query - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">
        Tanstack(React) Query 라이브러리 활용
      </h2>
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
    </>
  );
}

export default TanstackQueryLibrary;
