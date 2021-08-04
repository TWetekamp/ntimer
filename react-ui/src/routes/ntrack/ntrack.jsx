import { Table, Form } from "react-bootstrap";
import { NTstopWatch } from '../../components/stopwatch/ntstopWatch';
// import { ntaskRed } from '../../redux/reducers/ntaskRed';
// import { nTaskDisplay } from '../../components/taskform/nTaskDisplay';

const Ntrack = () => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Tasks in work today</legend>
            {/* <Button variant="dark">Pause All</Button>{' '} <span>Pause all stopwatches</span> */}
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
                    <NTstopWatch />
                    {/* <td>New U/I Purchase</td> */}
                    <td><nTaskDisplay /></td>
                    <td>New U/I purchase new products</td>
                    <Form.Control type="text" placeholder="Enter notes as needed." />
                    <td>Enhancement</td>
                </tr>
                <tr>
                    <NTstopWatch />
                    <td>Fix CSS Issue</td>
                    <td>Items overlapping on new user p</td>
                    <Form.Control placeholder="Analyzing  CSS changes" />
                    <td>Break-Fix</td>
                </tr>
                <tr>
                    <NTstopWatch />
                    <td>Modify Home Page</td>
                    <td>Update Home Page - Security</td>
                    <Form.Control placeholder="Review vulnerabilities" />
                    <td>Refactor</td>
                </tr>
              </tbody>
            </Table>
            {/* <p></p>
            <Button variant="dark">Capture and Save Stopwatches</Button>{' '} */}
          </form>
        </div>
      </div>
    )
};

export default Ntrack;