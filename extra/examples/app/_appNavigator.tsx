import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './(tabs)/HomeScreen';
import DetailsScreen from './(tabs)/DetailsScreen';
import {RootStackParamList} from "@/constants/types";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {

	return(

		<Stack.Navigator>
			<Stack.Screen name={'HomeScreen'} component={HomeScreen} />
			<Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
		</Stack.Navigator>
	)
}