import * as React from 'react';
import 'react-native-reanimated';
import {StatusBar, Text, View} from "react-native";
import pageStyle from "@/styles/page";
import {SafeAreaView} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "@/app/_appNavigator";


export default function App() {

	return (
		<NavigationContainer independent={true}>
			<SafeAreaView style={pageStyle.base}>

				<StatusBar hidden={false} barStyle={'dark-content'}/>

				<View style={pageStyle.body}>
					<AppNavigator />
				</View>

			</SafeAreaView>
		</NavigationContainer>
	)
}
