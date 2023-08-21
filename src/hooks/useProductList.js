import useFetchData from './useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`;

function useProductList() {
  return useFetchData(endpoint);
}

export default useProductList;