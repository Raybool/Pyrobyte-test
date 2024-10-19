'use client';

import { MadeBySeparateLine } from '@/components/atoms/SeparateLine';
import { IconButton } from '@/components/atoms/buttons/IconButton';
import { PureByte } from '@/components/atoms/icons/PureBite';
import { PureByteSmall } from '@/components/atoms/icons/PureByteSmall';
import { Shield } from '@/components/atoms/icons/Shield';
import React, { useRef } from 'react';

import styles from './styles.module.css';

export const MadeByFooter: React.FC = () => {
  const { current: windowWidth } = useRef(window.innerWidth);

  if (windowWidth <= 360) {
    return (
      <div className={styles.container}>
        <IconButton
          onClick={console.log}
          Icon={Shield}
          title="Privacy policy"
          type="noBackground"
        />

        <p className="txt-small">© 2022. All rights reserved.</p>

        <MadeBySeparateLine />

        <div className={styles.logo}>
          <PureByteSmall />
        </div>
      </div>
    );
  }

  return (
    <>
      <MadeBySeparateLine />

      <div className={styles.container}>
        <p className="txt-small">© 2022. All rights reserved.</p>

        <div className={styles.logo}>
          <PureByte />
        </div>

        <IconButton
          onClick={console.log}
          Icon={Shield}
          title="Privacy policy"
          type="noBackground"
        />
      </div>
    </>
  );
};
