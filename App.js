import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {SearchMovies} from './screens/SearchMovies';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
          <Stack.Screen
          name="Search Movies"
          component={SearchMovies}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;