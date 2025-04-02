import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  style = {}, 
  icon,
  variant = "primary" 
}) => {
  const baseStyles = {
    primary: {
      backgroundColor: "var(--primary)",
      color: "white",
    },
    secondary: {
      backgroundColor: "var(--secondary)",
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      border: "2px solid var(--primary)",
      color: "var(--primary)",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all ${className}`}
      style={{ ...baseStyles[variant], ...style }}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {icon && <span className="text-xl">{icon}</span>}
      </div>
    </motion.button>
  );
};

export default Button; 