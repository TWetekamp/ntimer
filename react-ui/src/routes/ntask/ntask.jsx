import { useState } from 'react';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import { addTask } from "../../redux/actions";


const Ntask = ({ addTask, username }) => {

  const [task, setTask] = useState({
    category: '',
    description: '',
    notes: '',
    task: ''
  });

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    const copy = Object.assign({}, task, {
      ...task,
      [key]: value
    });
    console.log(copy);
    setTask(copy);
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTask(task);
    setTask({
      category: '',
      description: '',
      notes: '',
      task: ''
    })
  };

    return (
      <div>
        <div className="y-wrap">
        <p>USERNAME: {username}</p>
          <form onSubmit={handleSubmit}>
            <legend>Add new tasks and information</legend>
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
                <td><input name="task" onChange={handleChange} value={task.task} /></td>
                <td><input name="description" onChange={handleChange} value={task.description} /></td>
                <td><input name="notes" onChange={handleChange} value={task.notes} /></td>
                <td><input name="category" onChange={handleChange} value={task.category} /></td>
                </tr>
              </tbody>
            </Table>
            {/* <Button variant="dark">Add Task</Button>{' '} */}
            <button variant="dark">Add Tasks</button>
          </form>
        </div>
      </div>
    )
};

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps) (Ntask);