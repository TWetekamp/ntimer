import { connect } from "react-redux";

const TaskDisplay = ({ taskname }) => {
    return <p>Display { taskname }</p>
};

const mapStateToProps = state => ({
    taskname: state.taskname
});

export default connect(mapStateToProps)(TaskDisplay);