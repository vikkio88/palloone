import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    login = () => {
        const { username, password } = this.state;
        axios.post('http://localhost:3000/login', { username, password }).then(({data}) => {
            console.log(data);
            window.localStorage.setItem('token', data.token);
            this.props.history.push('/user');
        });
    }

    handleChange(event, field) {
        this.setState({ [field]: event.target.value });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <input type="text" placeholder="username" value={username} onChange={e => this.handleChange(e, 'username')} />
                <input type="password" name="password" value={password} onChange={e => this.handleChange(e, 'password')} />
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export { Login };