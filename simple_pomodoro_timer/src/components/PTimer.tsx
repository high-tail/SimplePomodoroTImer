import React from "react";
import { Container } from "react-bootstrap";

import Clock from "../tools/Clock";
import Setting from "./Setting";

const PTimer: React.FC = () => {
  const [timer, setTimer] = React.useState(1500);

  return (
    <>
      <Container fluid id="pomodoro">
        <div className="d-flex justify-content-center align-items-center border-bottom">
          <div className="h1 text-bold pt-3 text-center">Simple Pomodoro Timer</div>
        </div>
        <div className="displayArea mx-auto mt-5">
          <Clock countdown={timer} />
        </div>
        <div className="settingArea mx-auto">
          <div className="d-flex justify-content-end">
            <Setting countTimer={timer} setTimer={setTimer} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default PTimer;
