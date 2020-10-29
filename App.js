import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import indexScreen from './src/screens/IndexScreen';
import AddItemScreen from './src/screens/additemscreen';
import ViewItemScreen from './src/screens/ViewItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen 
          name="index"
          component={indexScreen}
          Options={{title: "Diary App"}}
        />
        <Stack.Screen
          name="Add"
          component={AddItemScreen}
          Options={{title: "Add an Item"}}
        />
        <Stack.Screen
          name="View"
          component={ViewItemScreen}
          options={{title: "View Item"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;