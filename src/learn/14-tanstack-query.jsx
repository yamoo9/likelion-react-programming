import Spinner from '@/components/Spinner';
import { numberWithComma } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

async function fetchProducts() {
  const response = await fetch(
    `https://pb-demo-app.pockethost.io/api/collections/products/records`
  );
  return await response.json();
}

function TanStackQueryLibrary() {
  const { isLoading, data, isError, error } = useQuery(
    ['products'],
    fetchProducts,
    {
      retry: 2,
      // refetchOnWindowFocus: false,
      // staleTime: 1000 * 60 * 3,
    }
  );

  // const { isLoading, data, isError, error } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: fetchProducts,
  //   // staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
  // });

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
        <title>@tanstack/query - Learn</title>
      </Helmet>
      <h2 className="headline text-sky-500">
        Tanstack(React) Query 라이브러리 활용
      </h2>
      <ul className="grid grid-cols-3 gap-2">
        {data &&
          data.items?.map((item) => (
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
          ))}
      </ul>
    </div>
  );
}

export default TanStackQueryLibrary;
