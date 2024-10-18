'use client';

import { Link } from '@/components/atoms/Link';
import { SeparateLine } from '@/components/atoms/SeparateLine';
import { Button } from '@/components/atoms/buttons/Button';
import { IconButton } from '@/components/atoms/buttons/IconButton';
import { ShowMoreButton } from '@/components/atoms/buttons/ShowMoreButton';
import { Briefcase } from '@/components/atoms/icons/Briefcase';
import { Calculation } from '@/components/atoms/icons/Calculation';
import { Case } from '@/components/atoms/icons/Case';
import { Courier } from '@/components/atoms/icons/Courier';
import { Support } from '@/components/atoms/icons/Support';
import { Card } from '@/components/molecules/Card';
import { CardNoBack } from '@/components/molecules/Card';
import { Slider } from '@/components/molecules/Slider';
import { VideoPlayer } from '@/components/molecules/VideoPlayer';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { MadeByFooter } from '@/components/organisms/MadeByFooter';
import { PanelToParcel } from '@/components/organisms/PanelToParcel';
import { sliderData, sliderDataPayment } from '@/constants/ui';
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

          <VideoPlayer preview="/images/preview.png" />
        </div>

        <div className={styles.rightBox}>
          <PanelToParcel />
        </div>
      </div>

      <div className={styles.marketingContainer}>
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
            Icon={Courier}
            text="You choose a schedule. You decide how much and when to earn. Earnings from day one"
          />

          <Card
            title="Help & Support"
            Icon={Support}
            text="Door-to-door delivery in 90 minutes or at your convenience"
          />

          <Card
            title="Affiliate Program"
            Icon={Case}
            text="Use our service and feel new quality of this traditional service!"
          />
        </div>
      </div>

      <SeparateLine />

      <div className={styles.sliderContainer}>
        <h1>Our Partners</h1>

        <div className={styles.sliderButtonBox}>
          <IconButton
            title="Let's collaborate"
            Icon={Briefcase}
            onClick={console.log}
            type="default"
          />
        </div>

        <Slider
          data={sliderData}
          spaceBetween={80}
          slidesPerView={5}
          sliderElementType="grey"
          autoplay
        />
      </div>

      <div className={styles.whatWeDoContainer}>
        <Image
          className={styles.whatWeDoImg}
          src={'/images/city.png'}
          alt="City"
          height={504}
          width={220}
        />
        <div className={styles.middleBox}>
          <div className={styles.marketingTextBox}>
            <h1>What we do</h1>

            <h4 className="subtext">
              Express courier service in the city. We are a reliable logistics
              partner for delivery services for online stores and restaurants!
            </h4>
          </div>

          <div className={styles.whatWeDoCardBox}>
            <CardNoBack
              title="Online"
              Icon={Calculation}
              text="Instant calculation of the cost in the order form, the price is updated in the process of filling out the form"
            />

            <CardNoBack
              title="Minimum paperwork"
              Icon={Calculation}
              text="You can place an order for courier or freight delivery without registration and contract."
            />

            <CardNoBack
              title="Minimum paperwork"
              Icon={Calculation}
              text="You can place an order for courier or freight delivery without registration and contract."
            />
          </div>

          <Button
            label="Get started!"
            onClick={console.log}
            style="yellow"
            width={296}
          />
        </div>
      </div>

      <div className={styles.sliderPaymentContainer}>
        <h1>Payment methods</h1>

        <Slider
          data={sliderDataPayment}
          spaceBetween={104}
          slidesPerView={6}
          sliderElementType="default"
          navigation
        />
      </div>

      <SeparateLine />

      <div className={styles.whiteTextContainer}>
        <p>
          Since 2019, LibertyWalk has successfully provided express courier
          delivery services in the city for both individuals and legal entities,
          and is also a reliable logistics partner for delivery services for
          online stores and restaurants! Express delivery of documents and
          parcels for organizations, express delivery of correspondence,
          purchases, flowers, food, gifts and goods up to 1.5 tons - the most
          frequent orders in our company.
          <br />
          <br />
          But at the same time, we do not limit the range of courier services
          and without problems we can buy and bring goods and products from the
          online store, arrange delivery for the online store, cafe,
          supermarket, restaurant or any other business. Around the clock on our
          website you can call a courier in just a minute and arrange an express
          courier delivery without unnecessary bureaucracy, negotiations and
          calls to the call center. <ShowMoreButton onClick={console.log} />
        </p>
      </div>
    </main>

    <footer className={styles.footerContainer}>
      <Footer />

      <MadeByFooter />
    </footer>
  </div>
);
