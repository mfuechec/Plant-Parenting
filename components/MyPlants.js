import React from 'react';
import PlantList from './PlantList.js';
import { Button, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

export default function MyPlants(props) {
    if (props.selected === 'My Plants') {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Plant Parenthood</Text>
                </View>
                <View>
                    <Button title='Back' onPress={props.backToLogIn} />
                </View>
                <ScrollView>
                    <View style={styles.plantsAndCalendarContainer}>
                        <PlantList plantSelected={props.plantSelected} plantsOwned={props.plantsOwned} />
                    </View>
                </ScrollView>
                <View style={styles.addNewPlantsForm}>
                    <Button onPress={props.addNewPlants} title='Add New Plants'/>
                </View>
            </View>
        )
    } else if (props.selected === 'Add New Plants') {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Plant Parenthood</Text>
                </View>
                <View>
                    <Button title='Back' onPress={props.backToLogIn} />
                </View>
                <ScrollView>
                    <View style={styles.plantsAndCalendarContainer}>
                        <PlantList plantSelected={props.plantSelected} plantsOwned={props.plantsOwned} />
                    </View>
                </ScrollView>
                <View style={styles.addNewPlantsForm}>
                    <Input onChangeText={props.typingPlantName} placeholder='Plant Species' />
                    <Input onChangeText={props.typingNumberOwned} placeholder='Number Owned' />
                    <Button onPress={props.findPlantInfo} title='Add New Plants'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'lightgreen',
        position: 'relative',
        flex: 1
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
        fontSize: 25
    },

    plantsAndCalendarContainer: {
        flex: 1,
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    addNewPlantsForm: {
        position: "absolute",
        top: Dimensions.get('window').height - Dimensions.get('window').height/6,
        height: Dimensions.get('window').height/12,
        width: Dimensions.get('window').width
    },

  });