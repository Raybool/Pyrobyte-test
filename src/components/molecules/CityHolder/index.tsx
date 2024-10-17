import { MapMark } from '@/components/atoms/icons/MapMark';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  place: string;
};

export const CityHolder: React.FC<Props> = ({ place }) => (
  <div className={styles.container}>
    <MapMark />

    <p className={styles.title}>{place}</p>
  </div>
);
