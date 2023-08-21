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
  const priceId = useId();
  const colorId = useId();

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

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title} 수정 폼</h2>
        <form>
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
          {/* price */}
        </form>
      </>
    );
  }
}

export default ProductEdit;
