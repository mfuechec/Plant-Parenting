import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export default function MyCalendar(props) {
    return (
        <View>
            <ImageBackground style={styles.meme} source={require('./tenor.gif')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    meme: {
        width: '100%',
        height: '100%'
    }
})