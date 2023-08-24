import { getPbImageURL, numberWithComma } from '@/utils';
import { shape, string, number } from 'prop-types';

export default function ProductItem({ item }) {
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

export const PRODUCT_TYPE = shape({
  id: string,
  photo: string,
  price: number,
  title: string,
  color: string,
});

ProductItem.propTypes = {
  item: PRODUCT_TYPE.isRequired
}


