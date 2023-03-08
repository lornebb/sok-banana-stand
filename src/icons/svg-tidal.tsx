import React from 'react';
import { SvgTypes } from './types';

export const SvgTidal = ({ width, height, fill }: SvgTypes) => (
  <svg 
    width={width}
    height={height}
    viewBox="0 0 384 512"
    className="mr-2 -ml-1 w-4 h-4"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    role="img"
  >
    <path
      fill={fill}
      d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H160V448c0 17.7 14.3 32 32 32s32-14.3 32-32V96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H192 32z"></path>
  </svg>
);
