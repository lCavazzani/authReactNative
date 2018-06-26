import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null,
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAaVu2OlZBzPukS4938TU8c4NO5me1nbYA',
            authDomain: 'authreactnative-a04f1.firebaseapp.com',
            databaseURL: 'https://authreactnative-a04f1.firebaseio.com',
            projectId: 'authreactnative-a04f1',
            storageBucket: 'authreactnative-a04f1.appspot.com',
            messagingSenderId: '6051571834'
          });

          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({ loggedIn: true });
              } else {
                this.setState({ loggedIn: false });
              }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <CardSection>
                    <Button>
                        Log out
                    </Button>
                </CardSection>
            );
            case false:
            return <LoginForm />;

            default:
            return (
                <View style={{ flex: 1 }}>
                    <Spinner size='large' />
                </View>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
