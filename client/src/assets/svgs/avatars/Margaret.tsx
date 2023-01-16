import React from 'react';

export const Margaret = () => {
  return (
    <div>
      <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <title>Margaret Brent</title>
        <mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
          <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
        </mask>
        <g mask="url(#mask__beam)">
          <rect width="36" height="36" fill="#252525"></rect>
          <rect
            x="0"
            y="0"
            width="36"
            height="36"
            transform="translate(6 6) rotate(356 18 18) scale(1.2)"
            fill="#30d9a1"
            rx="6"
          ></rect>
          <g transform="translate(4 1) rotate(6 18 18)">
            <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#000000"></path>
            <rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
            <rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
          </g>
        </g>
      </svg>
    </div>
  );
};