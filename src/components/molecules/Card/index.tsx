import { Url } from '@/types';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  title: string;
  Icon: React.FC;
  text: string;
  link?: { href: Url; text: string };
};

export const Card: React.FC<Props> = ({ title, Icon, text }) => (
  <div className={styles.container}>
    <h3 className={styles.icon}>{title}</h3>

    <Icon />

    <p>{text}</p>
  </div>
);

export const CardNoBack: React.FC<Props> = ({ title, Icon, text, link }) => (
  <div className={styles.containerNoBack}>
    <div className={styles.iconNoBack}>
      <Icon />
    </div>

    <h3 className={styles.title}>
      {title}

      {link && (
        <Link href={link?.href}>
          <h3 className={styles.link}>{link?.text}</h3>
        </Link>
      )}
    </h3>

    <p>{text}</p>
  </div>
);
