import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { fetchPictures } from '../actions';
import PictureCard from './PictureCard';
import ListFooter from './ListFooter';

class PictureFeed extends Component {

	constructor(props) {
		super(props);
		
		this.showPicture = this.showPicture.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.handleFetchMore = this.handleFetchMore.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	componentWillMount() {
		this.props.fetchPictures();
	}

	handleFetchMore() {
		this.props.fetchPictures(this.props.page + 1);
	}

	showPicture(picture) {
		const { navigate } = this.props.navigation;
		navigate('Picture', { picture });
	}


	renderItem({ item }) { 
		return <PictureCard item={item} onPress={this.showPicture} />;
	}

	renderFooter() {
    if (!this.props.isFetching) return null;

    return <ListFooter />;
  }

	render() {
		return (
			<FlatList 
				data={this.props.pictures}
				keyExtractor={(picture, index) => picture.id}
				renderItem={this.renderItem}
				onEndReached={this.handleFetchMore}
				onEndReachedThreshold={1}
				refreshing={this.props.isFetching}
				//removeClippedSubviews={true}
				//ListFooterComponent={this.renderFooter}
			/>
		);
	}
}


const mapStateToProps = (state) => {
	const { data, page, isFetching } = state.pictures;

	return {
		pictures: data,
		page,
		isFetching
	};
};

export default connect(mapStateToProps, { fetchPictures })(PictureFeed);
