import { config } from '../config/consfig';
import { ApiSlice } from './api.package';

const apiSlice = new ApiSlice(config);

export { apiSlice };
