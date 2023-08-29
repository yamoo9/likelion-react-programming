import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import cover from '@/assets/cover.jpg';
import sleeveless from '@/assets/slim-fit-ribbed-sleeveless.png';

function Assets() {
  return (
    <>
      <Helmet>
        <title>Assets - ReactBird</title>
      </Helmet>
      <div className="relative grid place-content-center bg-center bg-cover min-h-[100%]">
        <motion.img
          src={cover}
          alt=""
          className="w-full h-auto sepia-[0.66] blur-[1px]"
        />
        <motion.img
          src={sleeveless}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 w-1/3 h-auto sepia-[0.66] blur-[1px]"
        />
      </div>
    </>
  );
}

export default Assets;
