import React from 'react';
import IconPopular from './IconPopular.svg';
import IconFree from './IconFree.svg';

const Icon = ({iconName, width, height}) => {
  if (iconName === 'free') {
    return <IconFree width={width} height={height} />;
  }
  if (iconName === 'popular') {
    return <IconPopular width={width} height={height} />;
  }
};

export default Icon;
