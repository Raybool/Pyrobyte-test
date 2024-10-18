import React from 'react';

import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  Icon: React.FC;
  title: string;
  type: 'default' | 'noBackground';
};

const styleContainer: Record<Props['type'], string> = {
  default: styles.default,
  noBackground: styles.noBackground,
};

export const IconButton: React.FC<Props> = ({ onClick, Icon, title, type }) => (
  <button
    className={`${styles.container} ${styleContainer[type]}`}
    onClick={onClick}
  >
    <Icon />

    {title}
  </button>
);
