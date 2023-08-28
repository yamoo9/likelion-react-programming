import Spinner from '@/components/Spinner';
import { numberWithComma } from '@/utils';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

function InfineteQuery() {
  const totalPageRef = useRef(0);
  const [page, setPage] = useState(1);
  const [perPage] = useState(2);

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProductsData(page = 1, perPage = 3) {
      try {
        const response = await fetch(
          `https://pb-demo-app.pockethost.io/api/collections/products/records?page=${page}&perPage=${perPage}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setData((prevData) => {
          let prevItems = [];
          if (prevData) {
            prevItems = prevData.items;
          }
          return {
            ...prevData,
            ...data,
            items: [...prevItems, ...data.items],
          };
        });
        totalPageRef.current = data.totalPages;
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsData(page, perPage);

    return () => {
      controller.abort();
    };
  }, [page, perPage, totalPageRef]);

  const isError = !!error;

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Infinete Query - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">인피니트 쿼리 (Infinete Query)</h2>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur">
          <Spinner
            size={160}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          />
        </div>
      )}
      {isError && <div role="alert">{error.toString()}</div>}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data &&
          data.items?.map((item) => {
            return (
              <li key={item.id} className="flex flex-col gap-1 my-4">
                <strong
                  title={`${item.title} (${item.color})`}
                  className="overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {item.title} ({item.color})
                </strong>
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
      <div className="mt-12 flex items-center gap-2">
        {data && (
          <button
            type="button"
            disabled={page === totalPageRef.current}
            onClick={() => {
              setPage((page) => page + 1);
            }}
            className="p-1 bg-slate-50 rounded border border-slate-200 disabled:cursor-not-allowed disabled:text-slate-400 hover:shadow-lg"
            aria-label="Read More"
            title="Read More"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default InfineteQuery;
