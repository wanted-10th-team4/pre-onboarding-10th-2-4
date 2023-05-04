import { GetSearchResultsResponse, SearchParam } from '@type/data';
import { getCacheByKey, setCacheByExpireTime } from '@utils/cache';
import { CACHE_EXPIRE_TIME } from '@utils/constant';
import axios from 'axios';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const getSearchResults = async (param: SearchParam): Promise<GetSearchResultsResponse> => {
  const cacheItem = await getCacheByKey(param.name);
  if (cacheItem) return cacheItem;

  console.info('calling api');
  const response = await axios.get(`${PROXY}${process.env.REACT_APP_API_URI}`, { params: param });

  setCacheByExpireTime({ key: param.name, value: response.data, expireTime: CACHE_EXPIRE_TIME });
  return response.data;
};

export default getSearchResults;
