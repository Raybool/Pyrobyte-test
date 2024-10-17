import { Box } from '@/components/atoms/icons/Box';
import React from 'react';

import styles from './styles.module.css';

export const SeparateLine: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.line}></div>

    <Box />

    <div className={styles.line}></div>
  </div>
);
