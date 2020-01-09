import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, ScrollView, Button } from 'react-native';

export default function PlantInfo(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Plant Parenthood</Text>
            </View>
            <ScrollView>
                <View style={styles.plantName}>
                    <Image source={{uri: props.imageUrl}} style={{width: 100, height: 100}} />
                    <Text>{props.plantName}</Text>
                    <Text>( {props.scientificName} )</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.otherNames}>
                        <Text style={styles.akaTag}>Also knows as:</Text>
                        <Text>{props.otherNames}</Text>
                    </View>

                    <View style={styles.growingConditionsContainer}>
                        <Text style={styles.growingConditions}>Growing Conditions</Text> 
                        <Text>{props.soil}</Text>
                        <Text>{props.climate}</Text>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.descriptionTag}>Description</Text>
                        <Text >{props.description}</Text>
                    </View>

                    <Button onPress={props.backToMyPlants} title='Back'/>
                </View>
            </ScrollView>
        </View>
    )
}

/*          --- props names ---
plantName
scientificName
otherNames
imageUrl
description
uses
propogation
soil
climate
health
*/


const styles = StyleSheet.create({
  
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'lightgreen',
        alignItems: 'center'
      },

      titleContainer: {
        width: 450,
        alignItems: 'center'
      },
    
      title: {
        display: 'flex',
        paddingHorizontal: 96,
        paddingVertical: 30,
        fontSize: 25
      },

      plantName: {
          alignItems: "center",
          paddingBottom: 25
      },

      otherNames: {
          paddingBottom: 15
      },

      infoContainer: {
          width: 350
      },

      description: {

      },

      descriptionTag: {
          fontSize: 20
      },

      akaTag: {
        fontSize: 20
      },

      growingConditions: {
        fontSize: 20
      },

      growingConditionsContainer: {
          paddingBottom: 15
      }
  
});