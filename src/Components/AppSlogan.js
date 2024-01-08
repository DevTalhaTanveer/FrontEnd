import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants/theme';

const AppSlogan = ({lost, find, togther}) => {
  return (
    <View style={{padding: 15}}>
      <Text
        style={{
          fontFamily: 'sans-serif',
          fontSize: 50,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        {lost}
      </Text>

      <Text
        style={{
          fontFamily: 'Rubik-Bold',
          fontSize: 50,
          fontWeight: 'bold',
          color: 'yellow',
        }}>
        {find}
      </Text>
      <Text
        style={{
          fontFamily: 'Rubik-Medium',
          fontSize: 50,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        {togther}
      </Text>
    </View>
  );
};

export default AppSlogan;
