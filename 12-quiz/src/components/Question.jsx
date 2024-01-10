import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

function Question({ question, onSelectAnswer, onQuestionSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 5;
  if (answer.selectedAnswer) {
    timer = 1;
  }

  if (answer.isCorrect !== null) {
    timer = 1.5;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === question.answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1500);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        duration={timer}
        onTimeout={answer.selectedAnswer === "" ? onQuestionSkip : null}
        mode={answerState}
      />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
