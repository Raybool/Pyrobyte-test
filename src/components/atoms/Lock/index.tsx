import { Lock as LockImage } from '@/components/atoms/icons/Lock';
import { Url } from '@/types';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  href: Url;
};

export const Lock: React.FC<Props> = ({ href }) => (
  <Link className={styles.link} href={href}>
    <LockImage />
  </Link>
);
