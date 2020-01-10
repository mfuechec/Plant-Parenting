import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import { StyleSheet, Dimensions, Text, View, ImageBackground } from 'react-native';

export default function NotLoggedIn(props) {
    if (props.logSelected === false) {
        return (
          <View style={styles.mainContainer}>
            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.title} >Plant Parenthood</Text>
              </View>
            </View>
            <View>
            <Home pressed={props.logging} />
            <ImageBackground style={styles.imgBackground} source={require('./blackAndWhitePlant.gif')}/>
            </View>
          </View>
        );
    } else {
        return (
          <View style={styles.mainContainer}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Plant Parenthood</Text>
                </View>
            </View>
            <View>
              <Login typingPassword={props.typingPassword} typingUserName={props.typingUserName} submitted={props.submitted} />
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
    alignItems: 'center'
  },
  
  titleContainer: {
    width: 450,
    marginTop: 200,
    alignItems: 'center'
  },

  title: {
    fontSize: 25,
  },

  imgBackground: {
    marginTop: 25,
    width: 250,
    height: '68%',
    overflow: 'visible',

},
  
});
  