import { useEffect, useState } from "react";

function QuestionTimer({ duration, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  useEffect(() => {
    const timeout = setTimeout(onTimeout, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={duration * 1000}
      className={mode}
    />
  );
}

export default QuestionTimer;
