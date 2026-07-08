import request from 'supertest';
import {describe, it} from 'vitest';

import app from './app.js';
import {HTTP_STATUS} from './constants/httpStatusCode.js';

const {OK} = HTTP_STATUS;

describe('Render Health Check - GET /healthz', () => {
  it('서버가 정상이면 OK를 반환한다', async () => {
    await request(app).get('/healthz').expect(OK, 'OK');
  });
});
