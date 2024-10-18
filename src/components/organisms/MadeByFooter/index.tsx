import { MadeBySeparateLine } from '@/components/atoms/SeparateLine';
import { IconButton } from '@/components/atoms/buttons/IconButton';
import { PureByte } from '@/components/atoms/icons/PureBite';
import { Shield } from '@/components/atoms/icons/Shield';
import React from 'react';

import styles from './styles.module.css';

export const MadeByFooter: React.FC = () => (
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
