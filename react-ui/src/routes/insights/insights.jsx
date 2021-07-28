import { Table } from "react-bootstrap";

const Insights = () => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Task Metrics Review</legend>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    {/* <th>Select/Filter Task</th> */}
                    <th>Task Category</th>
                    <th>Average Task Size</th>
                    <th>Average Task Time/Effort</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Enhancement</td>
                    <td>22 Story Points</td>
                    <td>34:19:00</td>
                </tr>
                <tr>
                    <td>Break-Fix</td>
                    <td>6 Story Points</td>
                    <td>6:38:00</td>
                </tr>
                <tr>
                    <td>Refactor</td>
                    <td>12 Story Points</td>
                    <td>10:19:00</td>
                </tr>
                </tbody>
            </Table>
            <p></p>
          </form>
        </div>
      </div>
    )
};

export default Insights;