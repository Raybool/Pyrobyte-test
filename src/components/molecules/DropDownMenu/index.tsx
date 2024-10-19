'use client';

import { Button } from '@/components/atoms/buttons/Button';
import { Burger } from '@/components/atoms/icons/Burger';
import { Close } from '@/components/atoms/icons/Close';
import { CityHolder } from '@/components/molecules/CityHolder';
import { InputSearch } from '@/components/molecules/InputSearch';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import styles from './styles.module.css';

export const DropDownMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { current: windowHeight } = useRef(window.innerHeight);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsActive(true)}>
        <Burger />
      </button>

      {isActive && (
        <div
          style={{ height: windowHeight }}
          className={styles.menu}
          onBlur={() => setIsActive(false)}
        >
          <div>
            <div className={styles.headMenu}>
              <CityHolder place="NY, Manhattan" />

              <button onClick={() => setIsActive(false)}>
                <Close size={20} />
              </button>
            </div>

            <InputSearch placeholder="Track a package" isTwoV />

            <div className={styles.linkBox}>
              <Link href={''}>Send a Parcel</Link>

              <Link href={''}>Become a Courier</Link>

              <Link href={''}>Affiliate Program</Link>

              <Link href={''}>Help & Support</Link>
            </div>
          </div>

          <Button
            label="Take a complex order"
            onClick={console.log}
            style="default"
          />
        </div>
      )}
    </div>
  );
};
