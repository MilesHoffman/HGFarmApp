// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {HomeScreenNavigationProp} from "@/constants/types";


type Props = {navigation: HomeScreenNavigationProp}


const HomeScreen = ({navigation}: Props ) => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('DetailsScreen', {name: 'Miles', age: 21})}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});


export default HomeScreen