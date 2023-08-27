import { motion, AnimatePresence } from 'framer-motion';
import { node } from 'prop-types';
import { useLocation } from 'react-router-dom';

function AnimateTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.4,
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

AnimateTransition.propTypes = {
  children: node.isRequired,
};

export default AnimateTransition;
