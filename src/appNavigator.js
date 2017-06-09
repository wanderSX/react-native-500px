import React from 'react';
import { StackNavigator } from 'react-navigation';
import PictureFeed from './components/PictureFeed';

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
	}
});
export default AppNavigator;