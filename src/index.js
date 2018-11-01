import React from 'react';
import {StatusBar, Platform} from 'react-native'
import {AppLoading, Asset, Font} from 'expo'
import {Provider} from 'react-redux'
import store from './config/Store'

import RootContainer from './RootContainer'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/icons/menu.png'),
    ]),

    Font.loadAsync({
      /* eslint-disable */ 
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-medium': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      /* eslint-enable */
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <Provider store={store}>
        <React.Fragment>
          {Platform.OS === 'ios' && <StatusBar barStyle='light-content' />}
          <RootContainer />
        </React.Fragment>
      </Provider>
    );
    
  }
}
