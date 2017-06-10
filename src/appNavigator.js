import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureFeed from './components/PictureFeed';
import Picture from './components/Picture';

const AppNavigator = StackNavigator({
	Feed: { 
		screen: PictureFeed,
		navigationOptions: {
      title: '500px',
      headerTitleStyle: {
        color: '#fff',
        alignSelf: 'center'
      },
      headerStyle: {
        marginTop: 23,
        backgroundColor: '#000',
      }
    }
	},
  Picture: {
    screen: Picture,
    navigationOptions: {
      title: 'Photo',
      headerTitleStyle: {
        color: '#fff',
        alignSelf: 'center'
      },
      headerStyle: {
        marginTop: 23,
      }
    }
  }
}, { headerMode: 'screen' });

export default AppNavigator;
