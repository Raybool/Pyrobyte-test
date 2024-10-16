import lock from '@/components/atoms/icons/lock.svg';
import { Url } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  href: Url;
};

export const Lock: React.FC<Props> = ({ href }) => (
  <Link className={styles.link} href={href}>
    <Image src={lock} alt="Login" />
  </Link>
);
