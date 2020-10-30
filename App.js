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

// Stack navigator is used to navigate through application.

// THINGS THAT I CAN IMPROVE ON HERE...
// 1. Make it update immediately when the changes are comfirmed, Gordon said I can use Context and ID to sor this issue
// 2. I can beatify this area using styles: Areas covered, ViewItemScreen
// 3. I can make the inputs hold the current values in the screen
// 4. I can implement a 5 start rating system from that link I found
// 5. Implement Persistant storage (if there was a tick it would be here)
// 6. Use the camera to add a cover page

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