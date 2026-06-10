import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {ChoiceButton, ChoiceList} from '../styles/QuizButton.styles.js';

function QuizButton({choices, onAnswer, disabled, selectedIndex}) {
  return (
    <ChoiceList component="ul">
      {choices.map((choice, index) => (
        <li key={index}>
          <ChoiceButton
            component="button"
            className={selectedIndex === index ? 'selected' : ''}
            onClick={() => onAnswer(index)}
            disabled={disabled}
          >
            {selectedIndex === index ? (
              <RadioButtonCheckedIcon sx={{fontSize: 20, flexShrink: 0}} />
            ) : (
              <RadioButtonUncheckedIcon sx={{fontSize: 20, flexShrink: 0, color: '#bbb'}} />
            )}
            {choice}
          </ChoiceButton>
        </li>
      ))}
    </ChoiceList>
  );
}

export default QuizButton;
