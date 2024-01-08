import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import AfterToursScreen from '../Screens/AfterToursScreen';
import LinearGradient from 'react-native-linear-gradient';
import ForgotPasswordScreen from '../Screens/Forget';
import OTPScreen  from '../Screens/OTPScreen'
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AfterTour">
      <Stack.Screen name="AfterTour" component={AfterToursScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forget" component={ForgotPasswordScreen} />
      <Stack.Screen name="OPTScreen" component={OTPScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="Register"
        component={Register}
        
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3C4E55',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
