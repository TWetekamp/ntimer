import { Col, Row, Form, Button } from "react-bootstrap";

const Ntask = () => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Add new tasks and information</legend>
            <Form>
              <Form.Row>
                <Col xs={2}>
                    <Form.Control placeholder="Task" />
                </Col>
                <Col>
                    <Form.Control placeholder="Task Description" />
                </Col>
                <Col>
                    <Form.Control placeholder="Estimated Size" />
                </Col>
                <Col>
                    <Form.Control placeholder="Task Category" />
                </Col>
              </Form.Row>
            </Form>
            <p></p>
            <Button variant="dark">Add Task</Button>{' '}
          </form>
        </div>
      </div>
    )
};

export default Ntask;