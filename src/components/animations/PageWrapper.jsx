import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full min-h-[calc(100vh-8rem)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
