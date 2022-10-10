import React from 'react';
import { SvgTypes } from './types';

export const SvgBandcamp = ({ width, height, fill }: SvgTypes) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    className="mr-2 -ml-1 w-4 h-4"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    role="img"
  >
  
      
      <path fill={fill} d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fill-rule="evenodd" clip-rule="evenodd"></path>
  </svg>
);
