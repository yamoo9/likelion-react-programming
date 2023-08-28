import Spinner from '@/components/Spinner';
import { numberWithComma } from '@/utils';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

function PaginationQuery() {
  const totalPageRef = useRef(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData([]);

    async function fetchProductsData(page = 1, perPage = 3) {
      try {
        const response = await fetch(
          `https://pb-demo-app.pockethost.io/api/collections/products/records?page=${page}&perPage=${perPage}`
        );
        const data = await response.json();
        setData(data);
        totalPageRef.current = data.totalPages;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsData(page, perPage);
  }, [page, perPage, totalPageRef]);

  const isError = !!error;

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Pagination Query - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">
        페이지네이션 쿼리 (Pagination Query)
      </h2>
      <div className="mt-12 flex items-center gap-2">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => {
            setPage((page) => page - 1);
          }}
          className="p-1 bg-slate-50 rounded border border-slate-200 disabled:cursor-not-allowed disabled:text-slate-400"
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <span>
          {page} / {totalPageRef.current}
        </span>
        <button
          type="button"
          disabled={page === totalPageRef.current}
          onClick={() => {
            setPage((page) => page + 1);
          }}
          className="p-1 bg-slate-50 rounded border border-slate-200 disabled:cursor-not-allowed disabled:text-slate-400"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <label className="flex items-center gap-2 ml-3">
          표시할 아이템 갯수 ({perPage})
          <input
            type="range"
            min={1}
            value={perPage}
            step={1}
            max={5}
            onChange={(e) => {
              setPerPage(e.target.value);
            }}
          />
        </label>
      </div>
      {isLoading && (
        <div className="grid place-content-center h-[600px]">
          <Spinner size={160} />
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
    </div>
  );
}

export default PaginationQuery;
