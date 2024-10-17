'use client';

import { Button } from '@/components/atoms/buttons/Button';
import { Close } from '@/components/atoms/icons/Close';
import { Input } from '@/components/molecules/Input';
import { SelectorDelivery } from '@/components/molecules/SelectorDelivery';
import { TypeDelivery } from '@/types';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import styles from './styles.module.css';

type Props = {};

export const PanelToParcel: React.FC<Props> = () => {
  const [typeDelivery, setTypeDelivery] = useState<TypeDelivery>('light');

  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
      dropLocation: '502 86th St, Brooklyn, NY 11209',
      typeDelivery,
    },
    onSubmit(values, formikHelpers) {},
  });

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h3>Send a Parcel</h3>

        {/* TODO: add tooltip */}
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
