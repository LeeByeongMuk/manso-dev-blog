import { http, HttpResponse } from 'msw';

import postData from '@lib/mocks/data/post.json';
import { getHandlerURI } from '@shared/utils/url';

export const postHandler = [
  http.get(getHandlerURI('/api/posts'), () => {
    return HttpResponse.json(postData.getAll);
  }),
  http.get(getHandlerURI('/api/posts/categories'), () => {
    return HttpResponse.json(postData.getCategories);
  }),
  http.get(getHandlerURI('/api/posts/:category/:slug'), () => {
    return HttpResponse.json(postData.getPostDetail);
  }),
];
