import React from "react";

const JiraIcon = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
    >
      <defs>
        <linearGradient id="A" gradientUnits="userSpaceOnUse">
          <stop offset=".18" stopColor="#0052cc" />
          <stop offset="1" stopColor="#2684ff" />
        </linearGradient>
        <linearGradient
          id="B"
          x1="42.023"
          y1="35.232"
          x2="44.133"
          y2="33.122"
          xlinkHref="#A"
        />
        <linearGradient
          xlinkHref="#A"
          id="C"
          x1="41.464"
          y1="29.159"
          x2="39.35"
          y2="31.273"
        />
      </defs>
      <g transform="matrix(6.249587 0 0 6.249587 -228.82126 -169.26286)">
        <path
          d="M46.568 31.918l-4.834-4.834-4.834 4.834a.406.406 0 0 0 0 .573l4.834 4.834 4.834-4.834a.406.406 0 0 0 0-.573zm-4.834 1.8l-1.514-1.514 1.514-1.514 1.514 1.514z"
          fill="#2684ff"
        />
        <path
          d="M41.734 30.7a2.549 2.549 0 0 1-.011-3.594L38.4 30.408l1.803 1.803z"
          fill="url(#C)"
        />
        <path
          d="M43.252 32.2l-1.518 1.518a2.549 2.549 0 0 1 0 3.606l3.32-3.32z"
          fill="url(#B)"
        />
      </g>
    </svg>
  );
};

export default JiraIcon;
