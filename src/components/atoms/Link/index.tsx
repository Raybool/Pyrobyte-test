import { Box } from '@/components/atoms/Box';
import { Arrow } from '@/components/atoms/icons/Arrow';
import { Url } from '@/types';
import LinkNext from 'next/link';
import React from 'react';

import styles from './styles.module.css';

export type StyleType = 'link' | 'text' | 'link_underline';

type Props = {
  href: Url;
  text: string;
  style: 'link' | 'text' | 'link_underline';
};

const variantStyle: Record<Props['style'], string> = {
  link: styles.link,
  text: styles.text,
  link_underline: styles.lineUnderline,
};

export const Link: React.FC<Props> = ({ href, text, style }) => (
  <LinkNext className={variantStyle[style]} href={href}>
    {text}

    <Box visible={style === 'link'}>
      <Arrow />
    </Box>
  </LinkNext>
);
