import { Link } from '@/components/atoms/Link';
import { Lock } from '@/components/atoms/Lock';
import logo from '@/components/atoms/icons/logo.svg';
import { CityHolder } from '@/components/molecules/CityHolder';
import { InputSearch } from '@/components/molecules/InputSearch';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Image src={logo} alt="Logo" />

      <CityHolder place="NY, Manhattan" />

      <InputSearch />

      <Link href="" text="Send a Parcel" style="text" />

      <Link href="" text="Become a Courier" style="text" />

      <Lock href="" />
    </header>
  );
};
