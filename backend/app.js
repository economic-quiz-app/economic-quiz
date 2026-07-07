import cors from 'cors';
import express from 'express';

import {CORS_OPTIONS} from './constants/cors.js';
import quizRouter from './routers/quizRouter.js';

const app = express();

app.use(cors(CORS_OPTIONS));
app.use('/quizzes', quizRouter);

app.get('/healthz', (_request, response) => {
  response.send('OK');
});

export default app;
