import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {DetailsScreenNavigationProp, RootStackParamList} from "@/constants/types";
import {RouteProp} from "@react-navigation/native";


type Props = {
	navigation: DetailsScreenNavigationProp
	route: RouteProp<RootStackParamList, 'DetailsScreen'>
}


export default function DetailsScreen({navigation, route}: Props) {

	const {name, age} = route.params || {}

	return (
		<View style={styles.container}>
			<Text>Details Screen for {name} of the age {age}</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate('HomeScreen')}
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
