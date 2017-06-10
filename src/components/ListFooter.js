import  React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';


export default class ListFooter extends Component {
  render() {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
}
