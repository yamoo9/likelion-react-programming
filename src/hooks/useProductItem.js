import useFetchData from './useFetchData';

const getEndpoint = (productId) =>
  `${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`;

function useProductItem(productId) {
  return useFetchData(getEndpoint(productId));
}

export default useProductItem;
