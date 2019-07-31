import React from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    const { } = styles;
    const { email, password } = this.state;

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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
};

const styles = {

};

export default LoginForm;
