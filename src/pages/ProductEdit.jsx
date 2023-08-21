import { useParams } from 'react-router-dom';

function ProductEdit() {
  const { productName } = useParams();

  return <div>ProductEdit {productName} </div>;
}

export default ProductEdit;
