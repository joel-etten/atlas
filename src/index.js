import React from 'react';
import {Provider} from 'react-redux'
import {AppLoading, Asset, Font} from 'expo'

import RootContainer from './RootContainer'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/icons/baseline-menu-24px.svg'),
    ]),

    Font.loadAsync({
      /* eslint-disable */ 
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
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
      <Provider>
        <RootContainer />
      </Provider>
    );
    
  }
}
