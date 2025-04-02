import React from 'react';

const PostgresqlIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className}
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z" fill="#336791"/>
    <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill="#fff"/>
    <path d="M16 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" fill="#336791"/>
  </svg>
);

export default PostgresqlIcon; 