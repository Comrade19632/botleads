import React, {Component} from 'react';
import {connect} from "react-redux";
import {addLead} from "../../actions/leads";

class Form extends Component {
    state = {
        name: '',
        phone_number: '+7',
        email: '',
        message: ''
    }
    onChange = (event) => {
        const {target} = event;
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addLead({...this.state});
        this.setState({
            name: '',
            phone_number: '+7',
            email: '',
            message: ''
        })
    }

    render() {
        const {name, phone_number, email, message} = this.state;
        return (
            <div className='card card-body mt-4 mb-4 p-4 rounded'>
                <h1>Add lead</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="from-group">
                        <label>Name</label>
                        <input
                            className='form-control rounded '
                            type="text"
                            name='name'
                            onChange={this.onChange}
                            value={name}/>
                    </div>
                    <div className="from-group">
                        <label>Phone number</label>
                        <input
                            className='form-control rounded '
                            type="tel"
                            name='phone_number'
                            onChange={this.onChange}
                            value={phone_number}/>
                    </div>
                    <div className="from-group">
                        <label>Email</label>
                        <input
                            className='form-control rounded '
                            type="email"
                            name='email'
                            onChange={this.onChange}
                            value={email}/>
                    </div>
                    <div className="from-group">
                        <label>Message</label>
                        <input
                            className='form-control rounded '
                            type="text"
                            name='message'
                            onChange={this.onChange}
                            value={message}/>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-primary rounded mt-1'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {addLead})(Form);