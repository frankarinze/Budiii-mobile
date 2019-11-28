import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, ScreenOrientation  } from 'expo';
import * as Font from 'expo-font';
import { device, func, gStyle } from './src/constants';
import { Provider } from 'react-redux';

// apollo graphql integration
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { mockedLink } from './src/mock';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockedLink, // new HttpLink()
});

import store from './src/modules';
// navigation switch
import AppSwitchNav from './src/navigation/AppSwitchNav';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isReady: false,
    };

    // iPad? (TODO in future android tablet checked)
    if (device.isTablet) {
      ScreenOrientation.allowAsync(
        ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
      );
    }
  }

  async componentDidMount() {
    await Font.loadAsync(
        'worksans-semibold',
        // eslint-disable-next-line
        require('./src/assets/fonts/WorkSans-SemiBold.otf')
    );

    await Font.loadAsync(
        'worksans-regular',
        // eslint-disable-next-line
        require('./src/assets/fonts/WorkSans-Regular.otf')
    );

    await Font.loadAsync(
        'worksans-medium',
        // eslint-disable-next-line
        require('./src/assets/fonts/WorkSans-Medium.otf')
    );

    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <AppLoading />
      );
    }

    return (
      <ApolloProvider client={client}>
          <View style={gStyle.container}>
            <StatusBar
              barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            />
            <AppSwitchNav />
          </View>
      </ApolloProvider>
    );
  }
}

export default App;
