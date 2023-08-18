import { getPbImageURL, numberWithComma } from '@/utils';
import { useEffect, useState } from 'react';

const PB_PRODUCTS_ENDPOINT = `
  http://127.0.0.1:8090/api/collections/products/records
`;

function ProductList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // null | Error

  useEffect(() => {
    // 중단(abort) 컨트롤러(controller) 생성
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchProducts() {
      try {
        const response = await fetch(PB_PRODUCTS_ENDPOINT, {
          signal: controller.signal,
        });
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) → unmount (취소 1) → mount(2, 요청 1) -> 응답 1
    return () => {
      controller.abort();
    }
  }, []);

  // javascript statement
  // if (data) {
  //   if ('items' in data) {
  //     if (Array.isArray(data.items)) {
  //       return data.items.map(item => (
  //         <ProductItem key={item.id} item={item} />
  //       ))
  //     }
  //   }
  // }

  return (
    <ul className="grid grid-cols-3 m-10">
      {/* javascript expression */}
      {data &&
        data.items &&
        data.items?.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
}

function ProductItem({ item }) {
  return (
    <li>
      <figure className="flex flex-col items-start">
        <img
          src={getPbImageURL(item, 'photo')}
          className="h-96 w-auto"
          alt=""
        />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [ {item.color} ]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default ProductList;
