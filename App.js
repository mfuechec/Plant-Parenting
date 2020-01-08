import React from 'react';
import Home from './components/Home.js';
import Login from './components/Login.js';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: '',
      logSelected: false,
      usernameInput: '',
      passwordInput: ''
    }
    this.logging = this.logging.bind(this);
    this.register = this.register.bind(this);
    this.typingUserName = this.typingUserName.bind(this);
    this.typingPassword = this.typingPassword.bind(this);
  }

  logging() {
    this.setState({
      logSelected: true
    })
  }

  register() {
    // Check if username already exists

    this.setState({
      loggedIn: true,
      user: this.state.usernameInput,
      usernameInput: ''
    })

  }

  typingUserName(event) {
    this.setState({
      usernameInput: event
    })
  }

  typingPassword(event) {
    this.setState({
      passwordInput: event
    })
  }

  render() {
    if (this.state.loggedIn === false) {
      if (this.state.logSelected === false) {
        return (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} >Plant Parenthood</Text>
            </View>
            <Home pressed={this.logging} />
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} >Plant Parenthood</Text>
            </View>
            <Login typingPassword={this.typingPassword} typingUserName={this.typingUserName} submitted={this.register} />
          </View>
        )
      }
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} >Plant Parenthood</Text>
          </View>
          <View style={styles.buttonContainer}>
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
    width: 450
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 96,
    paddingVertical: 30,
    fontSize: 25,
    backgroundColor: 'green'
  },

  buttons: {

  },

  logInButton: {
    fontSize: 50
  }

});
