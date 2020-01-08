import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

export default function Login(props) {
    return (
        <View style={styles.formContainer}>
            <Input onChangeText={props.typingUserName} placeholder='Username' />
            <Input onChangeText={props.typingPassword} placeholder='Password' />
            <Button onPress={props.submitted} title="Register" />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'lightgreen',
        display: 'flex',
        flexDirection: 'column',
        height: 750,
        alignItems: 'center',
        justifyContent: 'center'
    },
})