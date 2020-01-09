import React from 'react';
import { StyleSheet, Button, View, Dimensions, Text } from 'react-native';

export default function Calendar(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Plant Parenthood</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'lightgreen'
    },
  
    titleContainer: {
      width: 450
    },
  
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 96,
      paddingVertical: 30,
      fontSize: 25,
      backgroundColor: 'lightgreen'
    },

    plantsAndCalendarContainer: {
        flex: 1,
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    buttonContainer: {
        backgroundColor: 'lightgreen',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    addNewPlantsForm: {
        position: "absolute",
        top: Dimensions.get('window').height - Dimensions.get('window').height/6,
        height: Dimensions.get('window').height/12,
        width: Dimensions.get('window').width
    }

  });