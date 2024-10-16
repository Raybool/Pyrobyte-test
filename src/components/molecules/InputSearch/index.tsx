'use client';

import { Search } from '@/components/atoms/icons/Search';
import React, { useState } from 'react';

import styles from './styles.module.css';

type Props = {};

export const InputSearch: React.FC<Props> = ({}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.container}>
      <input
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${styles.searchInput} ${isHover && !isActive && styles.searchInputHover} txt-small`}
        type="search"
        placeholder="Track a Package"
      />

      <div className={styles.icon}>
        <Search fill={isActive ? undefined : '#c2d2f4'} />
      </div>
    </div>
  );
};
