import { shape, string, number } from 'prop-types';

export const ProductType = shape({
  id: string,
  photo: string,
  price: number,
  title: string,
  color: string,
});
