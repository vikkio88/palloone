import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    state = {
        body: null
    }
    componentWillMount() {
        const token = window.localStorage.getItem('token');
        axios.get('http://localhost:3000/user', { headers: { authorization: token } })
            .then(({ data }) => { this.setState({ body: data }) })
            .catch(() => { this.props.history.push('/') })
    }
    render() {
        return (
            <div>
                <h2>Logged in</h2>
                {JSON.stringify(this.state.body)}
            </div>
        );
    }
}

export { User };