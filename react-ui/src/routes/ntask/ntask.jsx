import { connect } from 'react-redux';
import { Table, Form, Button } from "react-bootstrap";
import TaskDisplay from "../../components/taskform/taskDisplay";
import TaskForm from "../../components/taskform/TaskForm";
import TaskDescDisplay from "../../components/taskDescForm/TaskDescDisplay";
import TaskDescForm from "../../components/taskDescForm/TaskDescForm";
import { addTask } from "../../redux/actions";


const Ntask = ({ addTask }) => {
  const handleSubmit = e => {
    e.preventDefault()
    addTask()
  }
    return (
      <div>
        <div className="y-wrap">
          <form onSubmit={handleSubmit}>
            <legend>Add new tasks and information</legend>
            <TaskDisplay />
            <TaskDescDisplay />
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                    <th>Task</th>
                    <th>Task Description</th>
                    <th>Task Notes</th>
                    <th>Task Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><TaskForm /></td>
                  <td><TaskDescForm /></td>
                  <td><Form.Control placeholder="Estimated Size" /></td>
                  <td><Form.Control placeholder="Task Category" /></td>
                </tr>
              </tbody>
            </Table>
            <Button variant="dark">Add Task</Button>{' '}
          </form>
        </div>
      </div>
    )
};

const mapDispatchToProps = dispatch => ({
  addTask: username => dispatch(addTask("username"))
});

export default connect(null, mapDispatchToProps) (Ntask);