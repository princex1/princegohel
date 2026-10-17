import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  x = -50,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // snappy yet smooth cubic-bezier curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
