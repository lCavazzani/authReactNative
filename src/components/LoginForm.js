import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common/index';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Falied', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                <Text style={styles.errorTextStyle}> {this.state.error} </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20, 
        color: 'red',
        alignSelf: 'center'
    }
};
export default LoginForm;
