import http from "node:http";
import loadQuizzes from "../services/loadQuizzes.js";

const QUIZZES = await loadQuizzes();

const SERVER = http.createServer(async (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(QUIZZES));
});

SERVER.listen(8080);

SERVER.on("listening", () => {
  console.log("Server is running on http://localhost:8080");
});

SERVER.on("error", err => {
  console.error("Server error:", err);
});
