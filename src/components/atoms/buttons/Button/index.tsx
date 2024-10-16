import { Box } from '@/components/atoms/Box';
import React, { ReactElement } from 'react';

import styles from './styles.module.css';

type Props = {
  label: string;
  onClick: () => void;
  icon?: ReactElement;
  style: 'default' | 'gray';
};

const variantStyle: Record<Props['style'], string> = {
  default: styles.default,
  gray: styles.gray,
};

export const Button: React.FC<Props> = ({ label, onClick, icon, style }) => (
  <button
    className={`${styles.container} ${variantStyle[style]}`}
    onClick={onClick}
  >
    {!!icon && icon}
    {label}
  </button>
);
