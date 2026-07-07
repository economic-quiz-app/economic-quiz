import dotenv from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';

dotenv.config();

const connectDb = () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI가 설정되지 않았습니다.');
  }

  return new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });
};

/** @param {import('mongodb').Db} database */
const getQuizzes = database => database.collection('quizzes').find().toArray();

const loadQuizzes = async (client = connectDb()) => {
  try {
    const database = client.db('economic-quiz-app');

    return await getQuizzes(database);
  } finally {
    await client.close().catch(closeError => {
      console.error('MongoDB 연결 종료 실패:', closeError);
    });
  }
};

export {connectDb, getQuizzes};
export default loadQuizzes;
