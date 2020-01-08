import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: ''
    }
  }
  render() {
    if (this.state.loggedIn === false) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} >Plant Parenthood</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.logInButton} title="Log in" />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} >Plant Parenthood</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.buttons} title="Log in" />
            <Button style={styles.buttons} title="My Plants" />
            <Button style={styles.buttons} title="Calendar" />
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },

  titleContainer: {
    width: 500
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 115,
    paddingVertical: 35,
    fontSize: 25,
    backgroundColor: 'green'
  },

  buttonContainer: {
    backgroundColor: 'lightgreen',
    display: 'flex',
    flexDirection: 'column',
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttons: {

  },

  logInButton: {
    fontSize: 50
  }

});
