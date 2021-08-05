// import { useState } from 'react';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";

const Tasklist = ( { tasks } ) => {
    return (
      <div>
        <div className="y-wrap">
          <form>
            <legend>Tasklist History - Comprehensive list of your active and closed tasks</legend>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
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
                {tasks.map((task,index) => {
                  return (
                    <tr key={index}>
                      <td>8-5-2021</td>
                      <td>1:45:34</td>
                      <td>Active</td>
                      <td>{task.task}</td>
                      <td>{task.description}</td>
                      <td>{task.notes}</td>
                      <td>{task.category}</td>
                    </tr>
                      )
                    })}
              </tbody>
            </Table>
            <p></p>
          </form>
        </div>
      </div>
    )
};


const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps) (Tasklist);