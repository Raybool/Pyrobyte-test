import { LinkType } from '@/types';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  title: string;
  links: LinkType[];
};

export const Menu: React.FC<Props> = ({ title, links }) => (
  <div className={styles.container}>
    <p className={styles.title}>{title}</p>

    <div className={styles.line}></div>

    <div className={styles.linksBox}>
      {links.map(({ href, title }) => (
        <Link key={`${href} ${title}`} className={styles.link} href={href}>
          {title}
        </Link>
      ))}
    </div>
  </div>
);
