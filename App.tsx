/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DateofBirth from './src/Screens/dateofbirth';
import Role from './src/Screens/role';
import VerificationCode from './src/Screens/verificationcode';
import ChildName from './src/Screens/childname';
import CreateAccount from './src/Screens/createaccount';
import Goals from './src/Screens/goals';
import ChildGrade from './src/Screens/childgrade';
import ChildBetter from './src/Screens/childbetter';
import ChildExperience from './src/Screens/childexperience';
import ScreenTimeLimit from './src/Screens/screentime';
import LastThing from './src/Screens/lastthing';
import ProfileSetup from './src/Screens/profilesetup';
import SigninBack from './src/Screens/signinback';
import Screen from './src/Screens/Swiper/swiper';
import Splash1 from './src/Screens/Splash/splash1';
import Splash2 from './src/Screens/Splash/splash2';

enableScreens(true);
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash1"
            component={Splash1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash2"
            component={Splash2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen"
            component={Screen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Role"
            component={Role}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DateofBirth"
            component={DateofBirth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="VerificationCode"
            component={VerificationCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Goals"
            component={Goals}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChildName"
            component={ChildName}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChildGrade"
            component={ChildGrade}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChildBetter"
            component={ChildBetter}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChildExperience"
            component={ChildExperience}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScreenTimeLimit"
            component={ScreenTimeLimit}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LastThing"
            component={LastThing}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ProfileSetup"
            component={ProfileSetup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SigninBack"
            component={SigninBack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
