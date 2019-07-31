import React from 'react';
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import firebase from 'firebase';

import firebaseConfig from '../firebaseConfig';
import { Header } from './components/common';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Yo!</Text>
      </View>
    );
  }

}

export default registerRootComponent(App);
