import {MongoClient} from 'mongodb';
import {afterEach, describe, expect, it, vi} from 'vitest';

import {createQuizzes} from '../fixtures/quizzes.js';
import loadQuizzes, {connectDb, getQuizzes} from './loadQuizzes.js';

describe('DB 연결 테스트', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('MONGO_URI가 없으면 에러를 던진다', () => {
    vi.stubEnv('MONGO_URI', undefined);

    expect(() => connectDb()).toThrow('MONGO_URI가 설정되지 않았습니다.');
  });

  it('MONGO_URI가 있으면 MongoClient 인스턴스를 반환한다', () => {
    vi.stubEnv('MONGO_URI', 'mongodb://localhost:27017');

    expect(connectDb()).toBeInstanceOf(MongoClient);
  });
});

describe('getQuizzes', () => {
  it('quizzes 컬렉션에서 전체 문서를 조회한다', async () => {
    const toArray = vi.fn().mockResolvedValue(createQuizzes());
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const fakeDatabase = {collection};

    const result = await getQuizzes(fakeDatabase);

    expect(collection).toHaveBeenCalledWith('quizzes');
    expect(result).toEqual(createQuizzes());
  });
});

describe('loadQuizzes', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('쿼리 실패 후 client.close()도 실패하면, 원래 에러는 유지하고 close 에러는 로그만 남긴다', async () => {
    const queryError = new Error('쿼리 실패');
    const closeError = new Error('close 실패');
    const toArray = vi.fn().mockRejectedValue(queryError);
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const db = vi.fn(() => ({collection}));
    const close = vi.fn().mockRejectedValue(closeError);
    const fakeClient = {db, close};
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(loadQuizzes(fakeClient)).rejects.toThrow('쿼리 실패');
    expect(consoleErrorSpy).toHaveBeenCalledWith('MongoDB 연결 종료 실패:', closeError);
  });
});
