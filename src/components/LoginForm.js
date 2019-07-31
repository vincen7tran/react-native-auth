import React from 'react';

import { Button, Card, CardSection, Input } from './common';

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
          <Input
            value={text}
            onChangeText={text => this.setState({ text })}
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
