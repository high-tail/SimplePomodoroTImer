import React from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";

import Time from "../utils/Time";

type SettingModalPropsType = {
  countTimer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

const SettingModal: React.FC<SettingModalPropsType> = ({
  countTimer,
  setTimer,
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Button variant="secondary" size="lg" onClick={() => setShow(true)}>
        Setting{" "}
        <span>
          <Gear />
        </span>
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Timer Setting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Time (minutes)</h4>
          <Form className="d-flex justify-content-center">
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2" className="text-secondary">
                Pomodoro
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  defaultValue={Time.getMinutesFromSeconds(countTimer)}
                  onChange={(e) =>
                    setTimer(Time.getSecondsFromMinutes(parseInt(e.target.value)))
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size='lg' onClick={() => {
            setShow(false)
            }}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Setting: React.FC<SettingModalPropsType> = ({ countTimer, setTimer }) => {
  return (
    <>
      <SettingModal countTimer={countTimer} setTimer={setTimer} />
    </>
  );
};
export default Setting;
