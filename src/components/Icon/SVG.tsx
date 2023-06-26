import React, { CSSProperties } from 'react';

import svgs from './svgs';
import { SVGProps } from './types';
import theme from '../../theme';

const SVG = ({ name, size, color, width, height, style }: SVGProps) => {
  const compProps = {
    width: width || size,
    height: height || size,
    fill: color || theme.COLORS.PRIMARY,
    style: style as CSSProperties,
  };

  const SVGIcon = svgs[name] || svgs['all'];

  return <SVGIcon {...compProps} />;
};

export default SVG;
