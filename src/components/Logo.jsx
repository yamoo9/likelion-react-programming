import { number } from 'prop-types';
import { motion } from 'framer-motion';

export function Logo({ size = 100, ...restProps }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      {...restProps}
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  size: number,
};

/* -------------------------------------------------------------------------- */

const createIconVariants = (color) => ({
  hidden: {
    pathLength: 0,
    fill: `${color}00`,
  },
  visible: {
    pathLength: 1,
    fill: `${color}FF`,
  },
});

export function FramerLogo({ size = 60 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 20.3335H16V27.0002L9 20.3335Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-blue-400 stroke-[0.3px]"
        variants={createIconVariants('#0055FF')}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 0.75, ease: 'easeInOut' },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M16 13.6665H9V20.3332H23L16 13.6665Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-blue-400 stroke-[0.3px]"
        variants={createIconVariants('#00AAFF')}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 0.75, delay: 0.25, ease: 'easeInOut' },
          fill: { duration: 1, delay: 0.25, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M9 7L16 13.6667H23V7H9Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-blue-400 stroke-[0.3px]"
        variants={createIconVariants('#88DDFF')}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 0.75, delay: 0.5, ease: 'easeInOut' },
          fill: { duration: 1, delay: 0.5, ease: [1, 0, 0.8, 1] },
        }}
      />
    </svg>
  );
}

FramerLogo.propTypes = {
  size: number,
};
