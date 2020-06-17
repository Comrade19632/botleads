import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {login} from "../../actions/auth";


class Login extends Component {
    state = {
        username: '',
        password: ''
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username,this.state.password)
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const {username, password} = this.state;
        return (
            <div className='col-md-6 m-auto '>
                <div className='card card-body mt-4 mb-4 rounded'>
                    <h1>Login</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="from-group">
                            <label>Username</label>
                            <input
                                className='form-control rounded'
                                type="text"
                                name='username'
                                onChange={this.onChange}
                                value={username}/>
                        </div>
                        <div className="from-group">
                            <label>Password</label>
                            <input
                                className='form-control rounded'
                                type="password"
                                name='password'
                                onChange={this.onChange}
                                value={password}/>
                        </div>

                        <div className="form-group">
                            <button type='submit' className='btn btn-primary rounded mt-1'>Login</button>
                        </div>
                        <p>
                            Dont have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);