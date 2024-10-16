import { Box } from '@/components/atoms/Box';
import { Arrow } from '@/components/atoms/icons/Arrow';
import { Url } from '@/types';
import LinkNext from 'next/link';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  href: Url;
  text: string;
  style: 'link' | 'text' | 'link_underline';
};

const getStyle = (style: Props['style']) => {
  switch (style) {
    case 'link':
      return styles.link;
    case 'text':
      return styles.text;
    case 'link_underline':
      return styles.lineUnderline;
  }
};

export const Link: React.FC<Props> = ({ href, text, style }) => {
  const compStyle = getStyle(style);
  return (
    <LinkNext className={compStyle} href={href}>
      {text}

      <Box visible={style === 'link'}>
        <Arrow />
      </Box>
    </LinkNext>
  );
};
