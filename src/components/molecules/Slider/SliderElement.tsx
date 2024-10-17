import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  src: string;
  alt: string;
  index: number;
  width: number;
  height: number;
};

export const SliderElement: React.FC<Props> = ({
  src,
  alt,
  index,
  width,
  height,
}) => (
  <Image
    className={styles.image}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);
