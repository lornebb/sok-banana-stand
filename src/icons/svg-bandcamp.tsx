import React from 'react';
import { SvgTypes } from './types';

export const SvgBandcamp = ({ width, height, fill }: SvgTypes) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className="mr-2 -ml-1 w-4 h-4"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="paypal"
    role="img"
  >
    <path
      fill={fill}
      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"
    />
  </svg>
);
