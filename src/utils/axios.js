import axios from 'axios';
import { baseURL, key } from '@/api/tmdb/config';

const axiosCurryWithUrl = url => config => (
  axios({
    url,
    baseURL: baseURL.api,
    method: 'get',
    params: {
      api_key: key,
      ...config,
    },
  })
);

export default axiosCurryWithUrl;
