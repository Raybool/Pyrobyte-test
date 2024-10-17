import { Box } from '@/components/atoms/Box';
import React, { ReactElement } from 'react';

import styles from './styles.module.css';

type Props = {
  title: string;
  icon?: ReactElement;
  text: string;
};

export const Card: React.FC<Props> = ({ title, icon, text }) => (
  <div className={styles.container}>
    <h3>{title}</h3>

    <Box className={styles.icon} visible={!!icon}>
      {icon}
    </Box>

    <p>{text}</p>
  </div>
);
