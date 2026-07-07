import {MongoClient} from 'mongodb';
import {afterEach, describe, expect, it, vi} from 'vitest';

import {connectDb, getQuizzes} from './loadQuizzes.js';

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
    const mockQuizzes = [{id: 1, question: '테스트 문제'}];
    const toArray = vi.fn().mockResolvedValue(mockQuizzes);
    const find = vi.fn(() => ({toArray}));
    const collection = vi.fn(() => ({find}));
    const fakeDatabase = {collection};

    const result = await getQuizzes(fakeDatabase);

    expect(collection).toHaveBeenCalledWith('quizzes');
    expect(result).toEqual(mockQuizzes);
  });
});
