import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class UserPassword extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput 
                    placeholder='Username or email'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10
    }
})