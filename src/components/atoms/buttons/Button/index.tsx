import React, { ReactElement } from 'react';

import styles from './styles.module.css';

type Props = {
  label: string;
  onClick: () => void;
  icon?: ReactElement;
  style: 'default' | 'gray' | 'yellow';
  width?: number;
};

const variantStyle: Record<Props['style'], string> = {
  default: styles.default,
  gray: styles.gray,
  yellow: styles.yellow,
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  icon,
  style,
  width,
}) => (
  <button
    style={{ width }}
    className={`${styles.container} ${variantStyle[style]}`}
    onClick={onClick}
  >
    {!!icon && icon}
    {label}
  </button>
);
