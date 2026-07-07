import dotenv from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';

dotenv.config();

const loadQuizzes = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI가 설정되지 않았습니다.');
  }

  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  try {
    const database = client.db('economic-quiz-app');
    const quizzes = await database.collection('quizzes').find().toArray();

    return quizzes;
  } finally {
    await client.close();
  }
};

export default loadQuizzes;
