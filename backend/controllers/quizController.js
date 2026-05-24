import http from "node:http";
import readQuizFile from "../services/readQuizFile.js";

const QUIZZES = await readQuizFile();

const SERVER = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/api/questions") {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "http://localhost:5173",
    });
    response.end(JSON.stringify(QUIZZES));
    return;
  }

  response.writeHead(404);
  response.end();
});

SERVER.listen(8080);

SERVER.on("listening", () => {
  console.log("Server is running on http://localhost:8080");
});

SERVER.on("error", err => {
  console.error("Server error:", err);
});
