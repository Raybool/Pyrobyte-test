'use client';

import React, { ChangeEvent, useState } from 'react';

import styles from './styles.module.css';

type Props = {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  placeholder?: string;
};

export const Input: React.FC<Props> = ({
  onChange,
  value,
  label,
  id,
  placeholder,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <label
      className={`${styles.container} ${isHover && !isActive && styles.containerHover}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className={styles.label}>{label}</span>

      <input
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        id={id}
        name={id}
        placeholder={placeholder}
        className={`${styles.input} txt-small`}
        onChange={onChange}
        type="text"
        value={value}
      />
    </label>
  );
};
