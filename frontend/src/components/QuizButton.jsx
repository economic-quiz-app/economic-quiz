import React from "react";

function QuizButton({ choices, onAnswer }) {
  return (
    <div>
      <ul>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => onAnswer(index)}>
            {choice}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default QuizButton;
