'use client';

import { Link } from '@/components/atoms/Link';
import { Lock } from '@/components/atoms/Lock';
import { Logo } from '@/components/atoms/icons/Logo';
import { Profile } from '@/components/atoms/icons/Profile';
import { CityHolder } from '@/components/molecules/CityHolder';
import { DropDownMenu } from '@/components/molecules/DropDownMenu';
import { InputSearch } from '@/components/molecules/InputSearch';
import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);

  if (windowWidth <= 360) {
    return (
      <header className={styles.container}>
        <button>
          <Profile />
        </button>

        <Logo />

        <DropDownMenu />
      </header>
    );
  }

  return (
    <header className={styles.container}>
      <Logo />

      <CityHolder place="NY, Manhattan" />

      <InputSearch placeholder="Track a Package" />

      <Link href="" text="Send a Parcel" style="text" />

      <Link href="" text="Become a Courier" style="text" />

      <Lock href="" />
    </header>
  );
};
