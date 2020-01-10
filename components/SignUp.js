import React from 'react';
import { Button, View } from 'react-native';

export default function SignUp(props) {
    return (
        <View style={styles.formContainer}>
            <Input style={styles.inputs} onChangeText={props.typingUserName} placeholder='Username' />
            <Input style={styles.inputs} onChangeText={props.typingPassword} placeholder='Password' />
            <Button onPress={props.submitted} title="Register" />
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