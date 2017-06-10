import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class Picture extends Component {

	static navigationOptions = {
    title: 'Welcome',
  };

componentWillMount() {
	const { image_url } = this.props.navigation.state.params.picture;
		console.log(image_url);
}

	render() {
		const { image_url } = this.props.navigation.state.params.picture;
		return (
			<View style={styles.container}>
					<Image 
						style={styles.image}
						source={{ uri: image_url }}

					/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	image: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		backgroundColor: '#fff',
	}
});	

export default Picture;
