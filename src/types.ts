import { UrlObject } from 'url';

export type Url = string | UrlObject;

export type TypeDelivery = 'light' | 'medium' | 'heavy';

export type LinkType = {
  title: string;
  href: Url;
};
