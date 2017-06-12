import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

class PictureCard extends Component {
	render() {
		const { item, onPress } = this.props;
		const { name, user, images } = item; 
		const { userpic_url, fullname } = user;
		const { 
			headerText, 
			image, 
			headerContent, 
			avatar, 
			avatarContainer, 
			container, 
			card, 
			imageContainer 
		} = styles;

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
							source={{ uri: images[0].url }}
							resizeMode='contain'
							//aspectRation={1}
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
    flexDirection: 'column',
    position: 'relative',
	},
  image: {
		flex: 1,
		width: null,
		height: 280,

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
