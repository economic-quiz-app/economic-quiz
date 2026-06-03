import http from 'node:http';

import {HTTP_STATUS} from './constants/httpStatusCode.js';
import {SERVER_HOST, SERVER_PORT} from './constants/server.js';
import quizRouter from './routers/quizRouter.js';

const server = http.createServer();

server.on('request', async (request, response) => {
  const {method, url} = request;

  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  if (!method || !url) {
    response.writeHead(HTTP_STATUS.BAD_REQUEST, {'Content-Type': 'text/plain'});
    response.end('Invalid request');

    return;
  }

  if (!quizRouter.hasMethod(method)) {
    response.writeHead(HTTP_STATUS.METHOD_NOT_ALLOWED, {'Content-Type': 'text/plain'});
    response.end(`Method is not allowed: ${method}`);

    return;
  }

  const [path] = url.split('?');
  const result = quizRouter.findController(method, path);

  if (!result) {
    response.writeHead(HTTP_STATUS.NOT_FOUND, {'Content-Type': 'text/plain'});
    response.end('Not Found');

    return;
  }

  const {controller, params} = result;

  await controller(request, response, params);
});

server.on('listening', () => {
  console.log(`Server is running on ${SERVER_HOST}:${SERVER_PORT}`);
});

server.on('error', error => {
  console.error('Server error:', error);
});

server.listen(SERVER_PORT);
