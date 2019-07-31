import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    console.log('firebase', firebaseConfig);
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }

}

export default registerRootComponent(App);
