/** @import { IncomingMessage, ServerResponse } from 'node:http' */
/** @import { Request, Response} from 'express' */
/** @import { ParsedQs  } from 'qs' */

/**
 * @typedef {Object} RawQuiz
 * @property {number} 번호 - 원본 퀴즈 번호
 * @property {"OX퀴즈" | "객관식"} 구분 - 퀴즈 유형
 * @property {string} 문제내용 - 퀴즈 문제 텍스트
 * @property {string} 보기1 - 객관식 보기 1 (OX퀴즈일 때는 없을 수 있음)
 * @property {string} 보기2 - 객관식 보기 2
 * @property {string} 보기3 - 객관식 보기 3
 * @property {string} 보기4 - 객관식 보기 4
 * @property {string} 정답 - 정답 번호 문자열 (예: "2번", "2번(X)")
 * @property {string} 해설 - 문제 정답에 대한 해설
 */

/**
 * @typedef {Object} Quiz
 * @property {number} id - 변환된 퀴즈 ID
 * @property {string} type - 퀴즈 유형 (예: "OX퀴즈", "객관식")
 * @property {string} question - 문제 내용
 * @property {string[]} choices - 보기 목록 (OX일 경우 ["O", "X"], 객관식일 경우 4개 보기)
 * @property {number} answer - 0부터 시작하는 정답 인덱스 (0: 1번 보기, 1: 2번 보기...)
 * @property {string} explanation - 퀴즈 해설
 */

/** @typedef {(request: Request, response: Response,) => Promise<void>} Controller */
/** @typedef {Record.<'GET', Object.<string, Controller>>} Route */
/** @typedef {Object<string, Controller>} StaticRoute */
/** @typedef {Object<string, { regex: RegExp, paramNames: string[], controller: Controller }>} DynamicRoute */

export {};
