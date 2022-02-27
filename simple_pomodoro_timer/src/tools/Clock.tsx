import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { StopCircle, PlayCircle } from "react-bootstrap-icons";

import Time from "../utils/Time";

type ClockPropsType = {
  countdown: number;
};

type OnClickPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Clock: React.FC<ClockPropsType> = ({ countdown }) => {
  const [time, setTime] = useState(Time.getTimeFromSeconds(countdown));
  const [count, setCount] = useState(countdown);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        updateTimer(count > 0 ? count - 1 : 0);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count, isRunning]);

  useEffect(() => {
    setTime(Time.getTimeFromSeconds(countdown));
    setCount(countdown);
  }, [countdown])

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    setTime(Time.getTimeFromSeconds(countdown));
    setCount(countdown);
    setIsRunning(false);
  };

  const updateTimer = (count: number) => {
    setCount(count);
    setTime(Time.getTimeFromSeconds(count));
    if (count === 0) {
      setIsRunning(false);
    }
  };

  const StartButton: React.FC<OnClickPropsType> = ({ onClick }) => {
    return (
      <Button size="lg" variant="light" className="mx-1" onClick={onClick}>
        Start{" "}
        <span>
          <PlayCircle />
        </span>
      </Button>
    );
  };

  const StopButton: React.FC<OnClickPropsType> = ({ onClick }) => {
    return (
      <Button variant="danger" size="lg" className="mx-1" onClick={onClick}>
        Stop{" "}
        <span>
          <StopCircle />
        </span>
      </Button>
    );
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-md-center my-3 p-3">
        <p className="text-center" id="displayTime">
          {Time.format(time)}
        </p>
        <div className="mx-auto">
          {isRunning ? (
            <StopButton onClick={stopTimer} />
          ) : (
            <StartButton onClick={startTimer} />
          )}
          <Button
            variant="secondary"
            size="lg"
            className="mx-1"
            onClick={resetTimer}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};
export default Clock;
