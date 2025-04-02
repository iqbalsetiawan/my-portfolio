import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "", style = {} }) => {
  return (
    <section
      id={id}
      className={`py-24 ${className}`}
      style={style}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ title, subtitle, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className="text-4xl font-bold text-center mb-4"
        style={{ color: theme.primary }}
      >
        {title}
      </h2>
      <p
        className="text-center max-w-lg mx-auto mb-3"
        style={{ color: theme.subtext }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Section; 