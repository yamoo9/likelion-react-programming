import { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductItem from '@/hooks/useProductItem';
import Spinner from '@/components/Spinner';

const initialFormState = {
  title: '',
  color: '',
  price: 0,
};

function ProductEdit() {
  const titleId = useId();
  const colorId = useId();
  const priceId = useId();

  const { productId } = useParams();
  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault(); // ← 이유
    
    // client → server(pb)
    // Content-Type: application/json
    fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error);
    });

  }

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title}({data.color}) 수정 폼</h2>
        <form onSubmit={handleEditProduct}>
          {/* title */}
          <div>
            <label htmlFor={titleId}>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              value={formState.title}
              onChange={handleChangeInput}
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor={colorId}>컬러</label>
            <input
              type="text"
              name="color"
              id={colorId}
              value={formState.color}
              onChange={handleChangeInput}
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId}>프라이스</label>
            <input
              type="number"
              name="price"
              id={priceId}
              value={formState.price}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button type="submit">수정</button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
