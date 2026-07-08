import request from 'supertest';
import {describe, it} from 'vitest';

import app from './app.js';
import {HTTP_STATUS} from './constants/httpStatusCode.js';

const {OK, NOT_FOUND} = HTTP_STATUS;

describe('Render Health Check - GET /healthz', () => {
  it('서버가 정상이면 OK를 반환한다', async () => {
    await request(app).get('/healthz').expect(OK, 'OK');
  });
});

describe('정의되지 않은 경로', () => {
  it(`등록되지 않은 경로로 요청하면 ${NOT_FOUND}를 반환한다`, async () => {
    await request(app).get('/no-such-path').expect(NOT_FOUND);
  });
});
