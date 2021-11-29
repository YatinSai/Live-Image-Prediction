import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    Alert,
    ScrollView
} from "react-native";
import axios from 'axios'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        prediction: [],
    };
}



componentDidMount() {
    this.getpredicteddata()
    
}
getpredicteddata = () => {
    axios
        .get("http://127.0.0.1:5000/predict-digit")  
        .then(response => {
          console.log(response.data)   
            this.setState({ prediction: 3})
        })

        .catch(error => {
            Alert.alert(error.message)
        })
}

  render() {
    return(
      <Text> {this.state.prediction} </Text>
    );
  }
}
