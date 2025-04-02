import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", style = {}, variants = {} }) => {
  return (
    <motion.div
      variants={variants}
      className={`rounded-xl shadow-lg ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Card; 