import {create} from 'apisauce';
import {AxiosRequestConfig} from 'axios';

export const image_base_url = 'https://image.tmdb.org/t/p/w300/';
const httpClient = create({
  baseURL: 'https://api.themoviedb.org/3/',
});

httpClient.addRequestTransform((request: AxiosRequestConfig) => {
  request.params['api_key'] = '909594533c98883408adef5d56143539';
});

export default httpClient;
