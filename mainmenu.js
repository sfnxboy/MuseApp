
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//login
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

//failsafe
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    

    </View>
  );
}

//conditional: if one wants to share location
//connect function/api

  render()
  { 
    let button; 
    const happen = this.state.happen;
    if (isEnabled)
    {
      console.log("location on");
    }
  
  }

  return 
  (
    <div> 
    <Text> its lit </Text>
    <Greeting isLoggedIn = {isLoggedIn} />
    {button}
    </div>
  )




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;