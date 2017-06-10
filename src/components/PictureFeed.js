import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { fetchPictures } from '../actions';

class PictureFeed extends Component {

	componentWillMount() {
		console.log('CWM');
		const { fetchPictures, page } = this.props;
		
		fetchPictures();
	}

	renderItem({ item }) {
		const { image_url, name, user } = item;
		const { userpic_url, fullname } = user;
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
						<Text>{`by ${fullname}`}</Text>
					</View>
				</View>

				<View style={container}>
					<Image 
						style={image}
						source={{ uri: image_url }}
					/>
				</View>
			</View>
		);
	}

	render() {
		return (
			<FlatList 
				data={this.props.pictures}
				keyExtractor={picture => picture.id}
				renderItem={this.renderItem}
			/>
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


const mapStateToProps = (state) => {
	const { data, page, isFetching } = state.pictures;
	return {
		pictures: data,
		page,
		isFetching
	};
};

export default connect(mapStateToProps, { fetchPictures })(PictureFeed);
