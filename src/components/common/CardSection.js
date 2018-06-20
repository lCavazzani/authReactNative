import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );

//this props.children receives the Components inside the Card where it's in use

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection }; 
