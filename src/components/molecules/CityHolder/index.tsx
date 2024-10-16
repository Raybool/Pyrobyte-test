import mapMark from '@/components/atoms/icons/map-mark.svg';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  place: string;
};

export const CityHolder: React.FC<Props> = ({ place }) => (
  <div className={styles.container}>
    <Image src={mapMark} alt="Map Mark" />

    <p className={styles.title}>{place}</p>
  </div>
);
