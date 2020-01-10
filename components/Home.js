import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Home(props) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.logInButton} onPress={props.pressed}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginButtonText: {
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },

    buttonContainer: {
        width: Dimensions.get('window').width/2,
        paddingTop: 120,
        paddingLeft: 50
    },
})