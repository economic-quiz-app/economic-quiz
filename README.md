# economic-quiz

## Quiz API

### GET /quizzes

전체 퀴즈 목록을 반환합니다.

**Response 200**

```json
[
  {
    "id": 1,
    "type": "OX퀴즈",
    "question": "문제 내용",
    "choices": ["O", "X"],
    "answer": 0,
    "explanation": "해설 내용"
  },
  {
    "id": 2,
    "type": "객관식",
    "question": "문제 내용",
    "choices": ["보기1", "보기2", "보기3", "보기4"],
    "answer": 2,
    "explanation": "해설 내용"
  }
]
```

| 필드          | 타입     | 설명                                      |
| ------------- | -------- | ----------------------------------------- |
| `id`          | number   | 퀴즈 ID                                   |
| `type`        | string   | 퀴즈 유형 (`"OX퀴즈"` \| `"객관식"`)      |
| `question`    | string   | 문제 내용                                 |
| `choices`     | string[] | 보기 목록 (OX: `["O", "X"]`, 객관식: 4개) |
| `answer`      | number   | 정답 인덱스 (0부터 시작)                  |
| `explanation` | string   | 해설                                      |

---

### GET /quizzes/:id

특정 ID의 퀴즈를 반환합니다.

**Path Parameters**

| 파라미터 | 타입   | 설명    |
| -------- | ------ | ------- |
| `id`     | number | 퀴즈 ID |

**Response 200**

```json
{
  "id": 1,
  "type": "OX퀴즈",
  "question": "문제 내용",
  "choices": ["O", "X"],
  "answer": 0,
  "explanation": "해설 내용"
}
```

**Error Responses**

| 상태 코드 | 조건                                |
| --------- | ----------------------------------- |
| 400       | `id`가 양의 정수가 아닌 경우        |
| 404       | 해당 ID의 퀴즈가 존재하지 않는 경우 |
