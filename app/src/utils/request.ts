import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';

export const alovaInstance = createAlova({
  requestAdapter: adapterFetch(),
  cacheFor: null
});
