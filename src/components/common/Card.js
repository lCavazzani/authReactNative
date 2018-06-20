import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );

//this props.children receives the Components inside the Card where it's in use

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export { Card }; 
