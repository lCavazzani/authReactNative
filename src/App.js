import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAaVu2OlZBzPukS4938TU8c4NO5me1nbYA',
            authDomain: 'authreactnative-a04f1.firebaseapp.com',
            databaseURL: 'https://authreactnative-a04f1.firebaseio.com',
            projectId: 'authreactnative-a04f1',
            storageBucket: 'authreactnative-a04f1.appspot.com',
            messagingSenderId: '6051571834'
          });
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}
export default App;
