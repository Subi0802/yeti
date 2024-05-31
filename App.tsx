import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Splashscreen from './src/Screens/splashscreen';
import Home from './src/Screens/Home';
import Screen1 from './src/Screens/screen1';
import Screen2 from './src/Screens/screen2';
import Screen3 from './src/Screens/screen3';
import Screen4 from './src/Screens/screen4';
import Screen5 from './src/Screens/screen5';
import Screen6 from './src/Screens/screen6';
import Screen7 from './src/Screens/screen7';
import Screen8 from './src/Screens/screen8';
import Screen9 from './src/Screens/screen9';
import Screen10 from './src/Screens/screen10';
import Screen11 from './src/Screens/screen11';
import Screen12 from './src/Screens/screen12';
import Screen13 from './src/Screens/screen13';
import Screen14 from './src/Screens/screen14';
import Screen15 from './src/Screens/screen15';
import Screen16 from './src/Screens/screen16';
import Screen17 from './src/Screens/screen17';
import Screen18 from './src/Screens/screen18';

enableScreens(true);
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splashscreen">
          <Stack.Screen
            name="Splashscreen"
            component={Splashscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen4"
            component={Screen4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen5"
            component={Screen5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen6"
            component={Screen6}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen7"
            component={Screen7}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen8"
            component={Screen8}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen9"
            component={Screen9}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen10"
            component={Screen10}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen11"
            component={Screen11}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen12"
            component={Screen12}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen13"
            component={Screen13}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen14"
            component={Screen14}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen15"
            component={Screen15}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen16"
            component={Screen16}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen17"
            component={Screen17}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen18"
            component={Screen18}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
