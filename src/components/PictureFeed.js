import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

class PictureFeed extends Component {


	renderItem({item}) {
		const { image_url, name, user } = item;
		const { userpic_url, username } = user;
		const { headerText, image, headerContent, avatar, avatarContainer, container, card } = styles;

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
						<Text>{`by ${username}`}</Text>
					</View>
				</View>

				<View style={container}>
					<Image 
						style={image}
						source={{ uri: image_url}}
					/>
				</View>
			</View>
		)
	}

	render() {
		return(
			<FlatList 
				data={data}
				keyExtractor={item => item.id}
				renderItem={this.renderItem}
			/>
		)
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
		borderColor: '#ddd'
	},
  headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerText: {
		fontSize: 18
	},
  image: {
  	height: 300,
  	flex: 1,
  	width: null
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


const data = [
	{ "id": 215312191,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312192,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312193,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312194,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312195,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},	
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",
	},
	{ "id": 215312196,
		"name": "Denver International Airport",
		"user": {
			"id": 1540673,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312197,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},	
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",
	},
	{ "id": 215312198,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
	{ "id": 215312199,
		"name": "Denver International Airport",
		"user": {
			"id": 15406737,
			"username": "dburdeny",
			"userpic_url": "https://pacdn.500px.org/15406737/756444921d1e18b9206010485febc8e899c7ef6f/1.jpg?3",
		},
		"image_url": "https://drscdn.500px.org/photo/215312191/q%3D50_w%3D140_h%3D140/1682130b6fddf7a71b469a849113a0b6?v=0",	
	},
]

export default PictureFeed;