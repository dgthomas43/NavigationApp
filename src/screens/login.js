import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UserPassword from '../components/userPassword';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.logoWrapper}>
                    <Icon name='md-snow' size={96} style={styles.logo} />
                    <Text style={styles.summary}>An app to test react navigation components</Text>
                </View>
                <View>
                    <UserPassword />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#74b9ff'
    },
    logoWrapper: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        color: 'white'
    },
    summary: {
        color: 'white',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        opacity: .8
    }
})