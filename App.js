import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexScreen from './src/screens/IndexScreen';
import AddItemScreen from './src/screens/additemscreen';
import ViewItemScreen from './src/screens/ViewItemScreen';
import { DiaryProvider } from './src/contexts/DiaryContext';
import EditItemScreen from './src/screens/EditItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DiaryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen
            name="index"
            component={indexScreen}
            options={{ title: "Diary App" }}
          />
          <Stack.Screen
            name="Add"
            component={AddItemScreen}
            options={{ title: "Add Item" }}
          />
          <Stack.Screen
            name="View"
            component={ViewItemScreen}
            options={{ title: "View Item" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditItemScreen}
            options={{ title: "Edit Item" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DiaryProvider>
  );
}

const styles = StyleSheet.create({});

export default App;