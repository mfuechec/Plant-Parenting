import React, { isValidElement } from 'react';
import NotLoggedIn from './components/NotLoggedIn.js';
import LoggedIn from './components/LoggedIn.js';
import MyPlants from './components/MyPlants.js';
import MyCalendar from './components/MyCalendar.js';
import PlantInfo from './components/PlantInfo.js';
import server from './server/server.js';
import { Alert } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: '',
      logSelected: false,
      usernameInput: '',
      passwordInput: '',
      selected: 'none',
      plantNameInput: '',
      numberOwnedInput: '',
      plantsOwned: [],
      selectedPlant: '',
      selectedPlantInfo: {}
    }
    this.logging = this.logging.bind(this);
    this.register = this.register.bind(this);
    this.typingUserName = this.typingUserName.bind(this);
    this.typingPassword = this.typingPassword.bind(this);
    this.myPlantsSelected = this.myPlantsSelected.bind(this);
    this.myCalendarSelected = this.myCalendarSelected.bind(this);
    this.addNewPlants = this.addNewPlants.bind(this);
    this.typingNumberOwned = this.typingNumberOwned.bind(this);
    this.typingPlantName = this.typingPlantName.bind(this);
    this.addPlant = this.addPlant.bind(this);
    this.findPlantInfo = this.findPlantInfo.bind(this);
    this.alert = this.alert.bind(this);
    this.plantSelected = this.plantSelected.bind(this);
    this.backToMyPlants = this.backToMyPlants.bind(this);
  }

  logging() {
    this.setState({
      logSelected: true
    })
  }

  register() {
    // Check if username already exists
    if (this.isValid(this.state.usernameInput)) {
      this.setState({
        loggedIn: true,
        user: this.state.usernameInput,
        usernameInput: ''
      })
    } else {
      // popup error message
    }
  }

  isValid() {
    return true;
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

  myPlantsSelected() {
    this.setState({
      selected: 'My Plants'
    })
  }

  myCalendarSelected() {
    this.setState({
      selected: 'My Calendar'
    })
  }

  addNewPlants() {
    this.setState({
      selected: 'Add New Plants'
    })
  }

  typingNumberOwned(event) {
    this.setState({
      numberOwnedInput: event
    })
  }

  typingPlantName(event) {
    this.setState({
      plantNameInput: event
    })
  }

  addPlant() {
    // Sends info to the database
  }

  findPlantInfo() {
    server.findPlantInfo(this.state.plantNameInput, (err, result) => {
      if (err) {
        console.log(err)
        this.setState({
          numberOwnedInput: '',
          plantNameInput: ''
        })
      } else {
        if (result !== undefined) {
          var plantsOwned = this.state.plantsOwned;
          plantsOwned.push({
            name: this.state.plantNameInput,
            imageUrl: result[0].imageurl,
            numberOwned: this.state.numberOwnedInput
          })
          this.setState({
            plantsOwned: plantsOwned
          })
        } else {
          this.alert();
        }
      }
    });
  }
  
  alert() {
    Alert.alert(
      'Plant not found.',
      'No plant found matching that name.',
      [
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  }

  plantSelected(selection) {
    server.findPlantInfo(selection, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          selectedPlantInfo: result[0],
          selectedPlant: selection,
          selected: 'Plant Info'
        })
      }
    })
  }

  backToMyPlants() {
    this.setState({
      selected: 'My Plants'
    })
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <NotLoggedIn typingPassword={this.typingPassword} typingUserName={this.typingUserName} submitted={this.register} logging={this.logging} logSelected={this.state.logSelected} />
      )
    } else {
      if (this.state.selected === 'none') {
        return (
          <LoggedIn myPlantsSelected={this.myPlantsSelected} myCalendarSelected={this.myCalendarSelected} />
        )
      }
      if (this.state.selected === 'My Plants' || this.state.selected === 'Add New Plants') {
        return (
          <MyPlants plantSelected={this.plantSelected} findPlantInfo={this.findPlantInfo} addPlant={this.addPlant} typingNumberOwned={this.typingNumberOwned} typingPlantName={this.typingPlantName} selected={(this.state.selected)} addNewPlants={this.addNewPlants} plantsOwned={this.state.plantsOwned} />
        )
      }
      if (this.state.selected === 'Plant Info') {
        return (
          <PlantInfo backToMyPlants={this.backToMyPlants} plantName={this.state.selectedPlantInfo.tfvname} scientificName={this.state.selectedPlantInfo.botname} otherNames={this.state.selectedPlantInfo.othname} imageUrl={this.state.selectedPlantInfo.imageurl} description={this.state.selectedPlantInfo.description} uses={this.state.selectedPlantInfo.uses} propogation={this.state.selectedPlantInfo.propogation} soil={this.state.selectedPlantInfo.soil} climate={this.state.selectedPlantInfo.climate} health={this.state.selectedPlantInfo.health}/>
        )
      }
      if (this.state.selected === 'My Calendar') {
        return (
          <MyCalendar />
        )
      }
    }
  }
}