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

  it('MONGO_URI 형식이 잘못되면 에러를 던진다', () => {
    vi.stubEnv('MONGO_URI', 'not-a-valid-uri');

    expect(() => connectDb()).toThrow('Invalid scheme');
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

  it('database를 전달하지 않으면 에러를 던진다', () => {
    expect(() => getQuizzes()).toThrow(TypeError);
  });

  it('database에 collection 메서드가 없으면 에러를 던진다', () => {
    expect(() => getQuizzes({})).toThrow(TypeError);
  });
});

describe('loadQuizzes', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('쿼리와 close가 모두 성공하면 조회 결과를 반환하고 client를 닫는다', async () => {
    const toArray = vi.fn().mockResolvedValue(createQuizzes());
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const db = vi.fn(() => ({collection}));
    const close = vi.fn().mockResolvedValue(undefined);
    const fakeClient = {db, close};
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await loadQuizzes(fakeClient);

    expect(result).toEqual(createQuizzes());
    expect(db).toHaveBeenCalledWith('economic-quiz-app');
    expect(close).toHaveBeenCalled();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('쿼리는 성공하고 close가 실패하면, 조회 결과는 그대로 반환하고 close 에러는 로그만 남긴다', async () => {
    const closeError = new Error('close 실패');
    const toArray = vi.fn().mockResolvedValue(createQuizzes());
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const db = vi.fn(() => ({collection}));
    const close = vi.fn().mockRejectedValue(closeError);
    const fakeClient = {db, close};
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await loadQuizzes(fakeClient);

    expect(result).toEqual(createQuizzes());
    expect(consoleErrorSpy).toHaveBeenCalledWith('MongoDB 연결 종료 실패:', closeError);
  });

  it('쿼리가 실패하고 close는 성공하면, 원래 에러를 그대로 던진다', async () => {
    const queryError = new Error('쿼리 실패');
    const toArray = vi.fn().mockRejectedValue(queryError);
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const db = vi.fn(() => ({collection}));
    const close = vi.fn().mockResolvedValue(undefined);
    const fakeClient = {db, close};
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await expect(loadQuizzes(fakeClient)).rejects.toThrow('쿼리 실패');
    expect(close).toHaveBeenCalled();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
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
