import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import ProductItem from './ProductItem';

const PB_PRODUCTS_ENDPOINT = `
  http://127.0.0.1:8090/api/collections/products/records
`;

function ProductList() {
  const { data, isLoading, error } = useFetchData(PB_PRODUCTS_ENDPOINT);

  // 로딩 중인 경우 화면
  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  // 오류가 발생한 경우 화면
  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-3 m-10">
      {data &&
        data.items &&
        data.items?.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
}

export default ProductList;
