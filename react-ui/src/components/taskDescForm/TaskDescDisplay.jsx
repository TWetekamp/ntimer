import { connect } from "react-redux";

const TaskDescDisplay = ({ taskdesc }) => {
    return <p>Display { taskdesc }</p>
};

const mapStateToProps = state => ({
    taskdesc: state.taskdesc
});

export default connect(mapStateToProps)(TaskDescDisplay);