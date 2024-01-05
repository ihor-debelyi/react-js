import { useState, useEffect } from "react";

function ProgressBar({ duration }) {
  const [running, setRunning] = useState(true);
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={duration} />;
}

export default ProgressBar;
