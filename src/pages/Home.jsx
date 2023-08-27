import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - ReactBird</title>
      </Helmet>
      <div className="grid place-content-center bg-hero bg-center bg-cover min-h-[100%]">
        <motion.h2
          drag
          dragConstraints={{ top: -2, right: 2, bottom: 2, left: -2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94, opacity: 0.8 }}
          className="text-white tracking-widest font-extralight text-4xl uppercase"
        >
          Shop<span className="text-[60px] text-yellow-400">.</span>
        </motion.h2>
      </div>
    </>
  );
}

export default Home;
