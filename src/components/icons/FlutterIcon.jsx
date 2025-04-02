import React from 'react';

const FlutterIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className}
    viewBox="0.29 0.22 77.26 95.75" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M48.75 95.97L22.84 70.23L37.16 55.66L77.55 95.97z" fill="#02539A"/>
      <g fill="#45D1FD">
        <path d="M22.52 70.25L48.2 44.57H77.07L37.12 84.52z" fillOpacity="0.85"/>
        <path d="M0.29 47.85L14.87 62.42L77.07 0.22H48.05z"/>
      </g>
    </g>
  </svg>
);

export default FlutterIcon;