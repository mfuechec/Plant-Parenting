import React from 'react';
import PlantsAndCalendarButtons from './PlantsAndCalendarButtons.js';
import { StyleSheet, Text, View } from 'react-native';

export default function LoggedIn(props) {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} >Plant Parenthood</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.plantsAndCalendarContainer}>
              <PlantsAndCalendarButtons myPlantsSelected={props.myPlantsSelected} style={styles.myPlantsButton} myCalendarSelected={props.myCalendarSelected} style={styles.myCalendarButton} />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({

    window: {
        backgroundColor: 'lightgreen'
    },
  
    mainContainer: {
      display: 'flex',
      flexDirection: 'column'
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
        height: 650,
        justifyContent: 'center'
    },

    buttonContainer: {
        backgroundColor: 'lightgreen',
        height: 750
    },

  });
  