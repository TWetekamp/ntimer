// import { useState } from "react";
import { connect } from "react-redux";
import { updateTaskdesc } from "../../redux/actions";

const TaskdescForm = ({ updateTaskdesc, taskdesc }) => {

  const handleChange = e => {
    const taskdesc = e.target.value;
    updateTaskdesc(taskdesc);
  };

  return <input onChange={handleChange} value={taskdesc} />;

};

const mapStateToProps = state => ({
    Taskdesc: state.taskdesc
});

const mapDispatchToProps = dispatch => ({
    updateTaskdesc: taskdesc => dispatch(updateTaskdesc(taskdesc))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskdescForm);