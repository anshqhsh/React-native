import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

const Delivery = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
};

export default Delivery;
