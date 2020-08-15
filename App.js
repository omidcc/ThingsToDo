import React from 'react';
import {StyleSheet} from 'react-native';
import { AppLoading } from 'expo';
import { Container, Header, Content, Root } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppFooter from './app/components/footer/AppFooter';
import AppHeader from './app/components/header/AppHeader';
import AppMain from './app/components/main-content/AppMain';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  componentWillUnmount() {
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('./assets/fonts/Montserrat-Regular.ttf'),
      Roboto_medium: require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
      <Container>
        <AppHeader />
        <Content padder>
          <AppMain/>
        </Content>
        <AppFooter/>
      </Container>
      </Root>
    );
  }
}