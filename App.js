import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/appNavigator'; 
import rootReducer from './src/reducers';

export default class App extends React.Component {
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
