import { SetCacheProps } from '@type/props';

export const getCacheByKey = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    const parseItem = JSON.parse(item);
    if (parseItem.expiry > new Date().getTime()) return parseItem.value;
    localStorage.removeItem(key);
  }
  return null;
};

export const setCacheByExpireTime = ({ key, value, expireTime = 0 }: SetCacheProps) => {
  const item = {
    value,
    expiry: new Date().getTime() + expireTime,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
