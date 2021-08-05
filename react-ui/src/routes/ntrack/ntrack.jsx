import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import { NTstopWatch } from '../../components/stopwatch/ntstopWatch';

const Ntrack = ({ tasks }) => {
  
  // const theTasks = tasks.map((task, index) => {
  //   return <li key={index}>{task.task}</li>;
  // })

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
                {tasks.map((task,index ) => {
                  return (
                    <tr key={index}>
                      <NTstopWatch />
                      <td>{task.task}</td>
                      <td>{task.description}</td>
                      <td>{task.notes}</td>
                      <td>{task.category}</td>
                </tr>
                  )
                })}
              </tbody>
            </Table>
          </form>
          <div>
            {/* <ul>
              {theTasks}
            </ul> */}
          </div>
        </div>
      </div>
    )
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Ntrack);