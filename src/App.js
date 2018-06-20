import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common/index';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text> Test Text </Text>
            </View>
        );
    }
}
export default App;
