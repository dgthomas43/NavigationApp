import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

export default class AuthLoading extends Component {

    constructor() {
        super();
        this.loadApp();
    }

    loadApp = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <ActivityIndicator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})