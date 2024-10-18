import { ETC } from '@/components/atoms/icons/ETC';
import React, { CSSProperties } from 'react';

import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  styles?: CSSProperties;
};

export const ShowMoreButton: React.FC<Props> = ({ onClick }) => (
  <button className={styles.container} onClick={onClick}>
    <ETC />
  </button>
);
