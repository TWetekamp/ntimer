import { Table } from "react-bootstrap";

const Tasklist = () => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Tasklist History - Comprehensive list of your active and closed tasks</legend>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                    {/* <th>Select/Filter Task</th> */}
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Task</th>
                    <th>Task Description</th>
                    <th>Task Notes</th>
                    <th>Task Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>8-1-2021</td>
                    <td>1:45:34</td>
                    <td>Active</td>
                    <td>New U/I Purchase</td>
                    <td>New U/I purchase new products</td>
                    <td>Reviewing examples</td>
                    <td>Enhancement</td>
                </tr>
                <tr>
                    <td>8-2-2021</td>
                    <td>0:45:34</td>
                    <td>Active</td>
                    <td>New U/I Purchase</td>
                    <td>New U/I purchase new products</td>
                    <td>Customizing design</td>
                    <td>Enhancement</td>
                </tr>
                <tr>
                    <td>7-12-2021</td>
                    <td>0:34:23</td>
                    <td>Active</td>
                    <td>Fix CSS Issue</td>
                    <td>Items overlapping on new user p</td>
                    <td>Analyzing CSS changes</td>
                    <td>Break-Fix</td>
                </tr>
                <tr>
                    <td>7-15-2021</td>
                    <td>2:44:23</td>
                    <td>Active</td>
                    <td>Fix CSS Issue</td>
                    <td>Items overlapping on new user p</td>
                    <td>Modifying header CSS</td>
                    <td>Break-Fix</td>
                </tr>
                <tr>
                    <td>6-14-2021</td>
                    <td>0:14:44</td>
                    <td>Closed</td>
                    <td>Modify Home Page</td>
                    <td>Update Home Page - Security</td>
                    <td>Review vulnerabilities</td>
                    <td>Refactor</td>
                </tr>
                <tr>
                    <td>6-18-2021</td>
                    <td>0:29:21</td>
                    <td>Closed</td>
                    <td>Modify Home Page</td>
                    <td>Update Home Page - Security</td>
                    <td>Breaking out changes into groups</td>
                    <td>Refactor</td>
                </tr>
              </tbody>
            </Table>
            <p></p>
          </form>
        </div>
      </div>
    )
};

export default Tasklist;