import { Info } from '@/components/atoms/icons/Info';
import React, { useState } from 'react';

import styles from './styles.module.css';

type Props = {
  text: string;
};

export const Tooltip: React.FC<Props> = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsActive((s) => !s)}
        onBlur={() => setIsActive(false)}
      >
        <Info fill={isActive ? '#1D253C' : undefined} />
      </button>

      {isActive && (
        <div className={styles.popup}>
          <p className={`txt-small`}>{text}</p>
        </div>
      )}
    </div>
  );
};
