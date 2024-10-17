import { OnCar } from '@/components/atoms/icons/OnCar';
import { OnFoot } from '@/components/atoms/icons/OnFoot';
import { OnTruck } from '@/components/atoms/icons/OnTruck';
import { TypeDelivery } from '@/types';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  activeType: TypeDelivery;
  onClick: (type: TypeDelivery) => void;
};

export const SelectorDelivery: React.FC<Props> = ({ activeType, onClick }) => (
  <div className={styles.container}>
    <button
      className={`${styles.button} ${styles.left} ${activeType === 'light' && styles.buttonActive}`}
      onClick={() => onClick('light')}
    >
      <OnFoot />
      up to 10lb
    </button>

    <button
      className={`${styles.button} ${styles.center} ${activeType === 'medium' && styles.buttonActive}`}
      onClick={() => onClick('medium')}
    >
      <OnCar />
      up to 130lb
    </button>

    <button
      className={`${styles.button} ${styles.right} ${activeType === 'heavy' && styles.buttonActive}`}
      onClick={() => onClick('heavy')}
    >
      <OnTruck />
      over 130lb
    </button>
  </div>
);
