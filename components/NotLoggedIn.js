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
                <ImageBackground style={styles.flower1} source={require('./sunflower.gif')} />
                <ImageBackground style={styles.flower2} source={require('./potted.gif')}/>
                <Text style={styles.title} >Plant Parenthood</Text>
              </View>
            </View>
            <View>
              <Home pressed={props.logging} />
            </View>
          </View>
        );
    } else {
        return (
          <View style={styles.mainContainer}>
            <View>
                <View style={styles.titleContainer}>
                    <ImageBackground style={styles.flower1} source={require('./sunflower.gif')} />
                    <ImageBackground style={styles.flower2} source={require('./potted.gif')}/>
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

  flower1: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -75,
    left: 100
  },

  flower2: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -25,
    left: 300
  }
  
});
  