import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }

  renderContent = () => {
    const { spinnerStye } = styles;
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case true:
        return (
          <Button>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />
      default:
        return (
          <View style={spinnerStye}>
            <Spinner size="large" />
          </View>
        );
    };

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStye: {
    marginTop: '50%'
  }
}

export default registerRootComponent(App);
