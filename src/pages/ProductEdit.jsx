import { useParams } from 'react-router-dom';

function ProductEdit() {
  const { productId } = useParams();

  return <div>ProductEdit {productId} </div>;
}

export default ProductEdit;
