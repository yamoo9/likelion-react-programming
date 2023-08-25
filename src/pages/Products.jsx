import Spinner from '@/components/Spinner';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useProductList from '@/hooks/useProductList';
import { getPbImageURL, numberWithComma } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// import { useProducts } from '@/api/useProducts';
// import { useEffect } from 'react';
// const { status, data: sdkData, getProductList } = useProducts();

// useEffect(() => {
//   getProductList()
//     .then(() => {
//       console.log(status)
//       console.log(sdkData)
//     })
//     .catch(() => {
//       // console.log(status)
//     })
// }, []);

// data null 속성 가질 수 없음
// data { ..., items: [] } PB에서 전달된 객체

function Products() {
  useDocumentTitle('제품 목록');
  const { isLoading, data } = useProductList();

  if (isLoading) {
    return <Spinner size={160} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>Product List - ReactBird</title>
        </Helmet>
        <div>
          <h1 className="text-indigo-950 text-2xl mb-5">Products</h1>
          <ul className="grid grid-cols-3">
            {data.items.map((item) => (
              <li key={item.id} className="justify-self-center">
                <Link to={`/product/edit/${item.id}`}>
                  <figure>
                    <img
                      className="h-[160px] object-cover mx-auto"
                      src={getPbImageURL(item, 'photo')}
                      alt=""
                    />
                    <figcaption className="flex flex-col gap-1 items-center mt-2">
                      <span>
                        {item.title}({item.color})
                      </span>
                      <span className="font-semibold">
                        {numberWithComma(item.price)}
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Products;
