import http from "node:http";

import loadQuizzes from "../services/loadQuizzes.js";

let quizzes = [];

try {
  quizzes = await loadQuizzes();
} catch (error) {
  console.error(error);
  process.exit(1);
}

const server = http.createServer(async (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(quizzes));
});

server.listen(8080);

server.on("listening", () => {
  console.log("Server is running on http://localhost:8080");
});

server.on("error", error => {
  console.error("Server error:", error);
});
