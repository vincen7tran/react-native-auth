import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress = () => {
    const { email, password } = this.statel

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then()
          .catch(() => {
            this.setState({ error: 'Authentication Failed.'});
          })
      })
  }

  render() {
    const { errorTextStyle } = styles;
    const { email, password, error } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            value={password}
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
