import { connect } from "react-redux";

const nTaskDisplay = ({ taskname }) => {
    return <p>{ taskname }</p>
};

const mapStateToProps = state => ({
    taskname: state.taskname
});

export default connect(mapStateToProps)(nTaskDisplay);