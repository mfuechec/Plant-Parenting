import React from 'react';
import { Button, View } from 'react-native';

export default function PlantsAndCalendarButtons(props) {
    return (
        <View>
            <Button onPress={props.myPlantsSelected} title="My Plants" />
            <Button onPress={props.myCalendarSelected} title="My Calendar" />
        </View>
    )
}