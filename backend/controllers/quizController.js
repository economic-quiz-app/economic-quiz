import {HTTP_STATUS} from '../constants/httpStatusCode.js';
import {SERVER_HOST} from '../constants/server.js';
import loadQuizzes from '../services/loadQuizzes.js';

/** @import { Controller } from '../types.js' */

const quizController = {
  /** @type {Controller} */
  async getQuizzes(request, response) {
    try {
      const {searchParams} = new URL(request.url ?? '/', SERVER_HOST);
      const isRandom = searchParams.get('random') === 'true';
      const countParam = searchParams.get('count');
      const count = countParam !== null ? Number(countParam) : null;
      let quizzes = await loadQuizzes();

      if (count !== null && (!Number.isInteger(count) || quizzes.length < count || count <= 0)) {
        response.writeHead(HTTP_STATUS.BAD_REQUEST, {'Content-Type': 'application/json; charset=utf-8'});
        response.end(JSON.stringify({message: '유효하지 않은 count 값입니다.'}));

        return;
      }

      if (isRandom) {
        quizzes = quizzes.sort(() => Math.random() - 0.5);
      }

      if (count !== null) {
        quizzes = quizzes.slice(0, count);
      }

      response.writeHead(HTTP_STATUS.OK, {'Content-Type': 'application/json; charset=utf-8'});
      response.end(JSON.stringify(quizzes));
    } catch (error) {
      console.error('퀴즈 불러오기 에러:', error);
      response.writeHead(HTTP_STATUS.INTERNAL_SERVER_ERROR, {'Content-Type': 'text/plain; charset=utf-8'});
      response.end('서버 내부 에러가 발생했습니다.');
    }
  },

  /** @type {Controller} */
  async getQuizById(_request, response, params) {
    try {
      const id = Number(params?.id);

      if (!Number.isInteger(id) || id <= 0) {
        response.writeHead(HTTP_STATUS.BAD_REQUEST, {'Content-Type': 'application/json; charset=utf-8'});
        response.end(JSON.stringify({message: '유효하지 않은 퀴즈 ID입니다.'}));

        return;
      }

      const quizzes = await loadQuizzes();
      const quiz = quizzes.find(quizz => quizz.id === id);

      if (!quiz) {
        response.writeHead(HTTP_STATUS.NOT_FOUND, {'Content-Type': 'application/json; charset=utf-8'});
        response.end(JSON.stringify({message: '퀴즈를 찾을 수 없습니다.'}));

        return;
      }

      response.writeHead(HTTP_STATUS.OK, {'Content-Type': 'application/json; charset=utf-8'});
      response.end(JSON.stringify(quiz));
    } catch (error) {
      console.error('퀴즈 불러오기 에러:', error);
      response.writeHead(HTTP_STATUS.INTERNAL_SERVER_ERROR, {'Content-Type': 'text/plain; charset=utf-8'});
      response.end('서버 내부 에러가 발생했습니다.');
    }
  }
};

export default quizController;
