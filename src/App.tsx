import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './Navigation';
import {AppState} from "react-native";
import {Component} from "react";
import { navigationRef } from './Navigation';
import { Provider } from 'react-redux';
import store from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {stylesGlobal} from './Layout'

export interface Props {
  navigation?: any,
  appState?: any
}

interface State {
  appState: any
}

class App extends Component<Props, State>{

  constructor(props: Props) {
    super(props);

    this.state = {
      appState: props.appState ? props.appState : AppState.currentState
    }

  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {

  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return true;
  }

  render(){
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaProvider>
            <SafeAreaView style={stylesGlobal.container} forceInset={{ top: 'always' }}>
              <StackNavigator/>
            </SafeAreaView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    );
  }


}

export default App;
