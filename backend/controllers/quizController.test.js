import request from 'supertest';
import {beforeEach, describe, expect, it, vi} from 'vitest';

import app from '../app.js';
import {HTTP_STATUS} from '../constants/httpStatusCode.js';
import {createQuizzes} from '../fixtures/quizzes.js';
import loadQuizzes from '../services/loadQuizzes.js';

const {OK, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR} = HTTP_STATUS;

vi.mock('../services/loadQuizzes.js');

describe('GET /quizzes', () => {
  beforeEach(() => {
    loadQuizzes.mockResolvedValue(createQuizzes());
  });

  it('전체 퀴즈 목록을 반환한다', async () => {
    await request(app).get('/quizzes').expect(OK, createQuizzes());
  });

  it(`count가 정수가 아니면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes?count=abc').expect(BAD_REQUEST);
  });

  it(`count가 0 이하이면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes?count=0').expect(BAD_REQUEST);
  });

  it(`count가 정수가 아닌 실수이면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes?count=1.5').expect(BAD_REQUEST);
  });

  it(`count가 전체 개수를 초과하면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes?count=10').expect(BAD_REQUEST);
  });

  it('count만큼 잘라서 반환한다', async () => {
    const response = await request(app).get('/quizzes?count=2').expect(OK);

    expect(response.body).toHaveLength(2);
  });

  it('random=true면 무작위 순서로 반환한다 (구성 원소는 동일)', async () => {
    const response = await request(app).get('/quizzes?random=true').expect(OK);

    expect(response.body).toHaveLength(createQuizzes().length);
    expect(response.body).toEqual(expect.arrayContaining(createQuizzes()));
  });

  it(`퀴즈가 하나도 없으면 빈 배열을 ${OK}로 반환한다`, async () => {
    loadQuizzes.mockResolvedValue([]);

    await request(app).get('/quizzes').expect(OK, []);
  });

  it(`loadQuizzes가 실패하면 ${INTERNAL_SERVER_ERROR}을 반환한다`, async () => {
    loadQuizzes.mockRejectedValue(new Error('DB 에러'));

    await request(app).get('/quizzes').expect(INTERNAL_SERVER_ERROR);
  });
});

describe('GET /quizzes/:id', () => {
  beforeEach(() => {
    loadQuizzes.mockResolvedValue(createQuizzes());
  });

  it(`id가 정수가 아니면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes/abc').expect(BAD_REQUEST);
  });

  it(`id가 0 이하이면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes/0').expect(BAD_REQUEST);
  });

  it(`id가 정수가 아닌 실수이면 ${BAD_REQUEST}을 반환한다`, async () => {
    await request(app).get('/quizzes/1.5').expect(BAD_REQUEST);
  });

  it(`존재하지 않는 id면 ${NOT_FOUND}를 반환한다`, async () => {
    await request(app).get('/quizzes/999').expect(NOT_FOUND);
  });

  it('존재하는 id면 해당 퀴즈를 반환한다', async () => {
    await request(app).get('/quizzes/1').expect(OK, createQuizzes()[0]);
  });

  it(`퀴즈가 하나도 없으면 ${NOT_FOUND}를 반환한다`, async () => {
    loadQuizzes.mockResolvedValue([]);

    await request(app).get('/quizzes/1').expect(NOT_FOUND);
  });

  it(`loadQuizzes가 실패하면 ${INTERNAL_SERVER_ERROR}을 반환한다`, async () => {
    loadQuizzes.mockRejectedValue(new Error('DB 에러'));

    await request(app).get('/quizzes/1').expect(INTERNAL_SERVER_ERROR);
  });
});
