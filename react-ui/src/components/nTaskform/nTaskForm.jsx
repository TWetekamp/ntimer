// import { useState } from "react";
import { connect } from "react-redux";
import { updateTaskname } from "../redux/actions";

const TasknameForm = ({ updateTaskname, taskname }) => {

  const handleChange = e => {
    const taskname = e.target.value;
    updateTaskname(taskname);
  };

  return <input onChange={handleChange} value={taskname} />;

};

const mapStateToProps = state => ({
    Taskname: state.taskname
});

const mapDispatchToProps = dispatch => ({
    updateTaskname: taskname => dispatch(updateTaskname(taskname))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasknameForm);