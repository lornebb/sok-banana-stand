import React from 'react';
import { SvgTypes } from './types';

export const SvgBandcamp = ({ width, height, fill }: SvgTypes) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={fill}
      d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M29.36,32H13l7.64-14H37L29.36,32z"
    />
  </svg>
);
