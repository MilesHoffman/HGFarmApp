import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
	name: string;
};

const Cat = (props: CatProps) => {
	const [isHungry, setIsHungry] = useState(true);

	return (
		<View>
			<Text>
				I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
			</Text>
			<Button
				onPress={() => {
					setIsHungry(false);
				}}
				disabled={!isHungry}
				title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
			/>
		</View>
	);
};

const Cafe = () => {
	return (
		<View style={{top: 100}}>
			<Cat name="Munkustrap" />
			<Cat name="Spot" />
		</View>
	);
};

export default Cafe;