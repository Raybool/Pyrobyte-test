'use client';

import { Button } from '@/components/atoms/buttons/Button';
import { Close } from '@/components/atoms/icons/Close';
import { Input } from '@/components/molecules/Input';
import { SelectorDelivery } from '@/components/molecules/SelectorDelivery';
import { Tooltip } from '@/components/molecules/Tooltip';
import { TypeDelivery } from '@/types';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import styles from './styles.module.css';

export const PanelToParcel: React.FC = () => {
  const [typeDelivery, setTypeDelivery] = useState<TypeDelivery>('medium');

  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
      dropLocation: '502 86th St, Brooklyn, NY 11209',
      typeDelivery,
    },
    onSubmit: () => console.log(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h3>Send a Parcel</h3>

        <Tooltip text="A commission is a piece of work that someone is asked to do and is paid for." />
      </div>

      <div className={styles.selectorBox}>
        <SelectorDelivery activeType={typeDelivery} onClick={setTypeDelivery} />
      </div>

      <div className={styles.inputBox}>
        <Input
          id="pickupLocation"
          onChange={formik.handleChange}
          value={formik.values.pickupLocation}
          label="Pickup location"
          placeholder="location"
        />

        <Input
          id="dropLocation"
          onChange={formik.handleChange}
          value={formik.values.dropLocation}
          label="Drop location"
          placeholder="location"
        />
      </div>

      <div className={styles.buttonBox}>
        <Button label="Order" onClick={console.log} style="default" />

        <Button
          label="Clear All"
          onClick={() => formik.resetForm()}
          style="gray"
          icon={<Close />}
        />
      </div>
    </div>
  );
};
