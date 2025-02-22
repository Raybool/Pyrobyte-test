import React from 'react';

type Props = {
  fill?: string;
};

export const Info: React.FC<Props> = ({ fill = '#DDE7FD' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill={fill} />
    <path
      d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11Z"
      fill="white"
    />
    <path
      d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7Z"
      fill="white"
    />
  </svg>
);
