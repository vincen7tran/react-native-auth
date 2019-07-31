import React from 'react';
import { View, TextInput } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
  state = {
    text: ''
  }

  render() {
    const { } = styles;
    const { text } = this.state;

    return (
      <Card>
        <CardSection>
          <TextInput
            value={text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection>

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
