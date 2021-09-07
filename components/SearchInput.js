import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	handleChangeText = (newLocationText) => {
		this.setState({ 
			text: newLocationText
		 });
	}

	handleSubmitEditing = () => {
		// get a reference to the function onSubmit from the props
		const { onSubmit } = this.props;
		// get the text property/value from the component's state
		const { text } = this.state;

		if (!text) return;
		
		// run the function with the text as input
		onSubmit(text);

		// clear the text property in the component's state
		this.setState({
			text: '',
		});
	}

	render() {
		const { placeholderLabelText } = this.props;
		const { text } = this.state;

		return (
			<View style={styles.container}>
				<TextInput 
					autoCorrect={false}
					value={text}
					placeholder={placeholderLabelText}
					placeholderTextColor="white"
					underlineColorAndroid="transparent"
					style={styles.textInput}
					clearButtonMode="always"
					onChangeText={this.handleChangeText}
					onSubmitEditing={this.handleSubmitEditing}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		marginTop: 20,
		backgroundColor: '#666',
		marginHorizontal: 40,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	textInput: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
	},
});