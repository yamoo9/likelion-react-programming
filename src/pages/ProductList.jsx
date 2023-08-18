import { getPbImageURL, numberWithComma } from "@/utils";
import { useEffect, useState } from "react"

const PB_PRODUCTS_ENDPOINT = `
  http://127.0.0.1:8090/api/collections/products/records
`;

function ProductList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // null | Error

  useEffect(() => {
    setIsLoading(true);

    async function fetchProducts() {
      try {
        const response = await fetch(PB_PRODUCTS_ENDPOINT)
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
  }, []);

  return (
    <ul>
      { data && data.items && data.items?.map(item => (
        <ProductItem key={item.id} item={item} />
      )) }
    </ul>
  )
}

function ProductItem({ item}) {
  return (
    <li>
      <figure className="flex flex-col">        
        <img src={getPbImageURL(item, 'photo')} alt="" />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [ {item.color} ]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  )
}

export default ProductList