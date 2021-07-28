import { Table, Button } from "react-bootstrap";

const Tasksum = () => {
return (
    <div>
    <div className="y-wrap">
        <form>
        <legend>Review your active and closed tasks</legend>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                {/* <th>Select/Filter Task</th> */}
                <th>Close/Re-start</th>
                <th>Start Date</th>
                <th>Finish Date</th>
                <th>Accumulated Time</th>
                <th>Status</th>
                <th>Task</th>
                <th>Task Description</th>
                <th>Task Category</th>
                <th>Size</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <Button variant="dark">Close</Button>{' '}
                <td>8-1-2021</td>
                <td>8-2-2021</td>
                <td>2:31:08</td>
                <td>Active</td>
                <td>New U/I Purchase</td>
                <td>New U/I purchase new products</td>
                <td>Enhancement</td>
                <td>5 Story Points</td>
            </tr>
            <tr>
                <Button variant="dark">Close</Button>{' '}
                <td>7-12-2021</td>
                <td>7-15-2021</td>
                <td>3:18:46</td>
                <td>Active</td>
                <td>Fix CSS Issue</td>
                <td>Items overlapping on new user p</td>
                <td>Break-Fix</td>
                <td>8 Story Points</td>
            </tr>
            <tr>
                <Button variant="dark">Re-start</Button>{' '}
                <td>6-14-2021</td>
                <td>6-18-2021</td>
                <td>2:52:16</td>
                <td>Closed</td>
                <td>Modify Home Page</td>
                <td>Update Home Page - Security</td>
                <td>Refactor</td>
                <td>13 Story Points</td>
            </tr>
            </tbody>
        </Table>
        <p></p>
        </form>
    </div>      
    </div>
  );
};

export default Tasksum;