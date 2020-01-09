import React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
   
export default function PlantList(props){
    return (
        <View>
            <View>
            {
                props.plantsOwned.map((item, index) => (
                    <TouchableOpacity onPress={() => props.plantSelected(item.name)} value={item.name} key={item.name} style={styles.container}>
                        <View style={styles.plantListView1}>
                            <Image source={{uri: item.imageUrl}} style={{width: 30, height: 30}} />
                        </View>
                        <View style={styles.plantListView2}>
                            <Text style = {styles.text}>{item.name}</Text>
                        </View>
                        <View style={styles.plantListView3}>
                            <Text>Number Owned: {item.numberOwned}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row'
   },
   text: {
      color: '#4f603c'
   },

   plantListView1: {
    width: Dimensions.get('window').width/6
   },

   plantListView2: {
    width: Dimensions.get('window').width/1.8
   },

   plantListView3: {
    width: Dimensions.get('window').width/4
   },
})