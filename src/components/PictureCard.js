import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

class PictureCard extends Component {
	render() {
		const { item, onPress } = this.props;
		const { image_url, name, user } = item;
		const { userpic_url, fullname } = user;
		const { headerText, image, headerContent, avatar, avatarContainer, container, card, imageContainer } = styles;

		return (
			<View style={card}>
				<View style={container}>
					<View style={avatarContainer}>
						<Image 
							style={avatar}
							source={{ uri: userpic_url }}
						/>
					</View>
					<View style={headerContent}>
						<Text style={headerText}>{name}</Text>
						<Text>{`by ${fullname}`}</Text>
					</View>
				</View>

				<TouchableWithoutFeedback
					onPress={() => onPress(item)}
				>
					<View style={[container, imageContainer]}>
						<Image 
							style={image}
							resizeMode='stretch'
							source={{ uri: image_url }}
							aspectRatio={1}
							resizeMode='contain'
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
  container: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
		borderColor: '#ddd',
	},
  headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 18
	},
	imageContainer: {
    //backgroundColor: '#000',
    justifyContent: 'center',
    position: 'relative'
	},
  image: {
		height: 140,
		width: 140
  },
  avatarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
  avatar: {
		height: 50,
		width: 50,
		borderRadius: 30
  }
});

export default PictureCard;
