import { GetSearchResultsResponse, SearchParam } from '@type/data';
import axios from 'axios';

const getSearchResults = async (param: SearchParam): Promise<GetSearchResultsResponse> => {
  const response = await axios.get(`${process.env.REACT_APP_API_URI}`, { params: param });
  return response.data;
};

export default getSearchResults;
