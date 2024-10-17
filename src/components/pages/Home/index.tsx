import { Link } from '@/components/atoms/Link';
import { SeparateLine } from '@/components/atoms/SeparateLine';
import { Case } from '@/components/atoms/icons/Case';
import { Courier } from '@/components/atoms/icons/Courier';
import { Support } from '@/components/atoms/icons/Support';
import { Card } from '@/components/molecules/Card';
import { Header } from '@/components/organisms/Header';
import { PanelToParcel } from '@/components/organisms/PanelToParcel';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

export const Home: React.FC = () => (
  <div className={styles.container}>
    <Header />

    <main className={styles.mainContainer}>
      <Image
        className={styles.image}
        src={'/images/StatueOfLiberty.png'}
        alt="Statue of liberty"
        width={657}
        height={712}
      />

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

      <div className={styles.marketingBox}>
        <div className={styles.marketingTextBox}>
          <h1>Express delivery market revolution</h1>

          <h4 className="subtext">
            Express courier service in the city. We are a reliable logistics
            partner for delivery services for online stores and restaurants!
          </h4>
        </div>

        <div className={styles.marketingCardBox}>
          <Card
            title="Become a Courier"
            icon={<Courier />}
            text="You choose a schedule. You decide how much and when to earn. Earnings from day one"
          />

          <Card
            title="Help & Support"
            icon={<Support />}
            text="Door-to-door delivery in 90 minutes or at your convenience"
          />

          <Card
            title="Affiliate Program"
            icon={<Case />}
            text="Use our service and feel new quality of this traditional service!"
          />
        </div>
      </div>

      <SeparateLine />
    </main>
  </div>
);
