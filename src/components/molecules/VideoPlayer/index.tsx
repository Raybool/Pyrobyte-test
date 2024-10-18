'use client';

import { Play } from '@/components/atoms/icons/Play';
import Image from 'next/image';
import React, { useState } from 'react';

import styles from './styles.module.css';

type Props = {
  preview: string;
  video?: { src: string; type: string };
};

export const VideoPlayer: React.FC<Props> = ({ preview, video }) => {
  const [playVideo, setPlayVideo] = useState(false);

  if (playVideo) {
    return (
      <div className={styles.container}>
        <video className={styles.view}>
          <source src={video?.src} type={video?.type} />
        </video>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.view}
        src={preview}
        alt="Video"
        width={374}
        height={232}
      />

      <button className={styles.playButton} onClick={() => setPlayVideo(true)}>
        <Play />
      </button>
    </div>
  );
};
