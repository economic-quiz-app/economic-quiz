import {ChoiceButton, ChoiceList} from '../styles/QuizButton.styles.js';

// 보기 버튼 목록 — 답변 선택 후 className으로 정답/오답 색상 전환
// btn-correct / btn-wrong 스타일은 QuizButton.styles.js에서 정의
function QuizButton({choices, onAnswer, disabled, selectedIndex, correctIndex}) {
  const getClassName = index => {
    if (!disabled) return '';
    if (index === correctIndex) return 'btn-correct';
    if (index === selectedIndex) return 'btn-wrong';
    return '';
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
