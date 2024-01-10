import React, {useEffect, useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import AfterToursScreen from './src/Screens/AfterToursScreen';
import LinearGradient from 'react-native-linear-gradient';
import OnBoardingUI from './src/Screens/OnBoardingUI';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import { LINEARCOLOR } from './src/constants/theme';
import { CountryData, getStatesByCountryIsoCode } from './src/Components/Countries';
export default function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  useEffect(() => {

    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }, []);

  const updateShowHomePage = value => {
    setShowHomePage(value);
  };

  return (
    <LinearGradient
      colors={LINEARCOLOR}
      style={{flex: 1}}>
      {showHomePage ? (
        <OnBoardingUI updateShowHomePage={updateShowHomePage} />
      ) : (
        <NavigationContainer>
          <AppNavigator States={getStatesByCountryIsoCode} Country={CountryData} />
        </NavigationContainer>
      )}
    </LinearGradient>
  );
}
