import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

export default function Login(props) {
    return (
        <View style={styles.formContainer}>
            <Input style={styles.inputs} onChangeText={props.typingUserName} placeholder='Username' />
            <Input style={styles.inputs} secureTextEntry={true} onChangeText={props.typingPassword} placeholder='Password' />
            <Button onPress={props.submitted} title="Log In" />
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer: {
        width: 200,
        paddingTop: 100
    },

    inputs: {
        width: 200
    }

})