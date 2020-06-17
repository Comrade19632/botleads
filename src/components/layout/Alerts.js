import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from 'react-redux';
import {clearMessages} from "../../actions/messages";

class Alerts extends Component {

    componentDidUpdate(prevProps) {
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            Object.entries(error.msg).map(error => alert.error(`${error[0]} : ${error[1]}`))
        }
        if (message !== prevProps.message && message !== '') {
            alert.success(message)
            this.props.clearMessages();
        }
    }

    render() {
        return (
            <Fragment/>
        );
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages.message
});

export default connect(mapStateToProps, {clearMessages})(withAlert()(Alerts));