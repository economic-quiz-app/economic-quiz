import { ChoiceList, ChoiceButton } from "../styles/QuizButton.styles.js";

// 보기 버튼 목록 — 답변 선택 후 정답/오답에 따라 색상 변경
// selectedIndex: 사용자가 선택한 보기 인덱스
// correctIndex: 정답 인덱스
function QuizButton({ choices, onAnswer, disabled, selectedIndex, correctIndex }) {
  const getClassName = index => {
    if (!disabled) return "";
    if (index === correctIndex) return "btn-correct";
    if (index === selectedIndex) return "btn-wrong";
    return "";
  };

  return (
    <ChoiceList component="ul">
      {choices.map((choice, index) => (
        <li key={index}>
          <ChoiceButton
            component="button"
            className={getClassName(index)}
            onClick={() => onAnswer(index)}
            disabled={disabled}
          >
            {choice}
          </ChoiceButton>
        </li>
      ))}
    </ChoiceList>
  );
}

export default QuizButton;
