import app from './app.js';
import {SERVER} from './constants/server.js';

const server = app.listen(SERVER.PORT, () => {
  console.log(`repository: https://github.com/economic-quiz-app/economic-quiz`);
  console.log(`Server is running on ${SERVER.HOST}:${SERVER.PORT}`);
  console.log(`url: https://quiz-api-jpp7.onrender.com`);
  console.log('web: https://economic-quiz.netlify.app');
});

server.on('error', error => {
  console.error('Server error:', error);
});
