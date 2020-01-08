import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Login(props) {
    return (
        <View style={styles.buttonContainer}>
            <Button style={styles.logInButton} onPress={props.pressed} title="Log in" />
        </View>
    )
}

const styles = StyleSheet.create({
    logInButton: {
        fontSize: 100,
    },

    buttonContainer: {
        backgroundColor: 'lightgreen',
        display: 'flex',
        flexDirection: 'column',
        height: 750,
        alignItems: 'center',
        justifyContent: 'center'
    },
})