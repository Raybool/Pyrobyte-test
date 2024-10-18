import { Drop } from '@/components/atoms/icons/Drop';
import { Facebook } from '@/components/atoms/icons/Facebook';
import { Instagram } from '@/components/atoms/icons/Instagram';
import { MapLine } from '@/components/atoms/icons/MapLine';
import { Vk } from '@/components/atoms/icons/Vk';
import { YouTube } from '@/components/atoms/icons/YouTube';
import { Menu } from '@/components/molecules/Menu';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

import { menuLinks, servicesLinks } from './constants';

export const Footer: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.about}>
      <div className={styles.mapLine}>
        <MapLine />
      </div>
      <p className={styles.title}>About Whoosh</p>

      <p className="txt-small">
        Express delivery of documents and parcels for organizations, express
        delivery of correspondence, purchases and other goods
      </p>
    </div>

    <div className={styles.menusBox}>
      <Menu title="Menu" links={menuLinks} />

      <Menu title="Services" links={servicesLinks} />
    </div>

    <div className={styles.contactBox}>
      <p className={styles.title}>Contact us</p>

      <div className={styles.line}></div>

      <h2 className={styles.phone}>8 800 934 5959</h2>

      <div className={styles.addressBox}>
        <div>
          <Drop />
        </div>

        <p className="txt-small">
          2545 W. Diversey Ave.
          <br /> 3rd Floor Chicago, IL 60647
        </p>
      </div>

      <div className={styles.channelsBox}>
        <Link href={''}>
          <Facebook />
        </Link>

        <Link href={''}>
          <Vk />
        </Link>

        <Link href={''}>
          <YouTube />
        </Link>

        <Link href={''}>
          <Instagram />
        </Link>
      </div>
    </div>
  </div>
);
