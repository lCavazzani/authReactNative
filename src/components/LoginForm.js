import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/index';

class LoginForm extends Component {
    state = {
        emial: '',
        password: ''
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder={'Type your email'}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    label='email'
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    placeholder={'password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    label='password'
                    secureTextEntry
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;
