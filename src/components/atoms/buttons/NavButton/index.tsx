import { NavigationArrow } from '@/components/atoms/icons/NavigationArrow';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  position: 'right' | 'left';
  onClick: () => void;
};

export const NavButton: React.FC<Props> = ({ position, onClick }) => (
  <button
    onClick={onClick}
    className={position === 'right' ? styles.right : undefined}
  >
    <NavigationArrow />
  </button>
);
