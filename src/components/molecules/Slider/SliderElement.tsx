import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'default' | 'grey';
};

export const SliderElement: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  type,
}) => (
  <Image
    className={type === 'grey' ? styles.grey : undefined}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);
