'use client';

import { Search } from '@/components/atoms/icons/Search';
import { SearchV2 } from '@/components/atoms/icons/SearchV2';
import React, { useState } from 'react';

import styles from './styles.module.css';

type Props = {
  placeholder: string;
  isTwoV?: boolean;
};

export const InputSearch: React.FC<Props> = ({ placeholder, isTwoV }) => {
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
        placeholder={placeholder}
      />

      <div className={styles.icon}>
        {!isTwoV && <Search fill={isActive ? undefined : '#c2d2f4'} />}
        {isTwoV && <SearchV2 />}
      </div>
    </div>
  );
};
