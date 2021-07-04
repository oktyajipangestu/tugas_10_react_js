import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Flag,
  Icon,
  Input,
  Header,
  Image,
  Container,
  Divider,
  Label,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Grid container verticalAlign="middle">
          <Grid.Column width={1}>
            <Flag name="id" size="large" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name="angle left" />
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon name="angle right" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input
              fluid
              icon="star"
              size="large"
              placeholder="Search..."
              width="80%"
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3">
              <Image
                circular
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG</Divider>
        <Grid container textAlign="right">
          <Grid.Column>
            <Label as="a" color="teal" tag>
              Sport
            </Label>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
