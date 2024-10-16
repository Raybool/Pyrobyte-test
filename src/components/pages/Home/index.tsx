import { Link } from '@/components/atoms/Link';
import { Header } from '@/components/organisms/Header';
import { PanelToParcel } from '@/components/organisms/PanelToParcel';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

export const Home: React.FC = () => (
  <div className={styles.container}>
    <Header />

    <main className={styles.mainContainer}>
      <div className={styles.mainBox}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Our service started work in New York</h1>

          <p className={styles.subtitle}>
            We make delivery exactly at the time you need - we can start to
            fulfill the order a few minutes after it arrives, or we can deliver
            on a specific day and hour.
          </p>

          <Link href="" text="Read more" style="link" />
        </div>

        <div className={styles.videoBox}>
          <h3>How it works</h3>

          <Image
            src="/images/Video.png"
            alt="How it works"
            width={374}
            height={232}
          />
        </div>

        <div className={styles.rightBox}>
          <PanelToParcel />
        </div>
      </div>
    </main>
  </div>
);
