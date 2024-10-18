import { Box } from '@/components/atoms/Box';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  title: string;
  Icon: React.FC;
  text: string;
};

export const Card: React.FC<Props> = ({ title, Icon, text }) => (
  <div className={styles.container}>
    <h3 className={!!Icon ? styles.icon : undefined}>{title}</h3>

    <Icon />

    <p>{text}</p>
  </div>
);

export const CardNoBack: React.FC<Props> = ({ title, Icon, text }) => (
  <div className={styles.containerNoBack}>
    <Icon />

    <h3 className={styles.title}>{title}</h3>

    <p>{text}</p>
  </div>
);
