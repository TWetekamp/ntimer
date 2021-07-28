import { Table, Form, Button } from "react-bootstrap";
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: true });

    return (
        <div>
          <td><Button variant="dark" onClick={start}>Start</Button>{' '}
          <Button variant="dark" onClick={pause}>Pause</Button>{' '}
          <Button variant="dark" onClick={reset}>Reset</Button>{' '}</td>
          <td><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></td>
        </div>
        // <div style={{textAlign: 'center'}}>
        //   <p>{isRunning ? 'Running' : 'Not running'}</p>
        //   <button onClick={start}>Start</button>
        //   <button onClick={pause}>Pause</button>
        //   <button onClick={reset}>Reset</button>
        // </div>
      );
    };

const Ntrack = () => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Tasks in work today</legend>
            <Button variant="dark">Pause All</Button>{' '} <span>Pause all stopwatches</span>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                    <th>Stopwatch</th>
                    <th>Task</th>
                    <th>Task Description</th>
                    <th>Task Notes</th>
                    <th>Task Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <MyStopwatch />
                    <td>New U/I Purchase</td>
                    <td>New U/I purchase new products</td>
                    <Form.Control placeholder="Enter notes as needed." />
                    <td>Enhancement</td>
                </tr>
                <tr>
                    <MyStopwatch />
                    <td>Fix CSS Issue</td>
                    <td>Items overlapping on new user p</td>
                    <Form.Control placeholder="Analyzing  CSS changes" />
                    <td>Break-Fix</td>
                </tr>
                <tr>
                    <MyStopwatch />
                    <td>Modify Home Page</td>
                    <td>Update Home Page - Security</td>
                    <Form.Control placeholder="Review vulnerabilities" />
                    <td>Refactor</td>
                </tr>
              </tbody>
            </Table>
            <p></p>
            <Button variant="dark">Capture and Save Stopwatches</Button>{' '}
          </form>
        </div>
      </div>
    )
};

export default Ntrack;