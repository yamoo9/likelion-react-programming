import Spinner from '@/components/Spinner';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useProductList from '@/hooks/useProductList';
import { getPbImageURL, numberWithComma } from '@/utils';
import { motion } from 'framer-motion';
import { number, shape, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0,
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.4 },
    },
  },
};

function Products() {
  useDocumentTitle('제품 목록');
  const { isLoading, data } = useProductList();

  if (isLoading) {
    return <Spinner size={160} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>Product List - ReactBird</title>
        </Helmet>
        <div className="container mx-auto">
          <h2 className="text-indigo-950 dark:text-sky-400/90 text-center text-2xl uppercase mt-5 mb-7">
            Products
          </h2>
          <motion.ul
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={list}
            initial="hidden"
            animate="visible"
          >
            {data.items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </motion.ul>
        </div>
      </>
    );
  }
}

export default Products;

function ProductItem({ item, ...restProps }) {
  return (
    <motion.li
      key={item.id}
      className="justify-self-center"
      variants={listItem}
      {...restProps}
    >
      <Link to={`/product/edit/${item.id}`}>
        <figure>
          <motion.img
            className="h-min-[160px] object-cover mx-auto rounded border border-slate-300/60 shadow-md mb-4"
            src={getPbImageURL(item, 'photo')}
            alt=""
            whileHover={{ scale: 1.04 }}
          />
          <figcaption className="flex flex-col gap-1 items-center mt-2">
            <span className="text-sm text-center text-slate-600 dark:text-zinc-300/80">
              {item.title}
              <br />
              <span
                className={`inline-flex rounded-full w-2.5 h-2.5 dark:outline-1 dark:outline-double dark:outline-stone-400/50 ${
                  item.color.toLowerCase() === 'blue'
                    ? 'bg-sky-600'
                    : 'bg-black'
                }`}
              ></span>{' '}
              {item.color}
            </span>
            <span className="font-semibold text-sm text-zinc-600 dark:text-zinc-500">
              {numberWithComma(item.price)}
            </span>
          </figcaption>
        </figure>
      </Link>
    </motion.li>
  );
}

ProductItem.propTypes = {
  item: shape({
    id: string,
    title: string,
    color: string,
    price: number,
  }),
};
