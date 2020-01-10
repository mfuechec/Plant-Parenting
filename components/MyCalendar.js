import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

export default function MyCalendar(props) {
    return (
        <View>
            <Video source={{uri: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'}} ref={(ref) => {this.player = ref}}/>
        </View>
    )
}