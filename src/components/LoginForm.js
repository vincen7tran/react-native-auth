import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(() => {
            this.setState({ error: 'Authentication Failed.'});
          })
      })
  }

  onLoginSuccess = () => {
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  renderButton = () => {
    const { loading } = this.state;

    if (loading) {
      return (
        <Spinner size="small" />
      );
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log In
      </Button>
    );
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
          {this.renderButton()}
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
