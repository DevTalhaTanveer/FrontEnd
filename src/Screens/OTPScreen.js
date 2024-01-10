// OTPScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, LINEARCOLOR } from '../constants/theme';
const OTPScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {

    // Add your logic to verify the OTP here
    console.log('Verifying OTP:', otp);
    navigation.navigate('ChangePassword');
  };
  
  const handleScreenPress = () => {
    Keyboard.dismiss(); // Dismiss the keyboard when the screen is pressed
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>

    <LinearGradient
      colors={LINEARCOLOR}
      style={{flex: 1, justifyContent: 'center' ,paddingHorizontal:20}}>

    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/EnterOTP.png')} style={styles.logo} />
      <Text style={styles.heading}>Enter OTP</Text>
      <Text style={styles.subHeading}>We've sent a verification code to your mobile number</Text>


      <TextInput
        label="Enter OTP"
        mode="outlined"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOtp(text)}
        style={styles.input}
      />

      
       <Button
            mode="contained"
            onPress={handleVerifyOTP}
            
            contentStyle={{height: 50, width: '95%'}}
            style={{
              backgroundColor: COLORS.blue,
              borderRadius: 50,
              marginTop: 12,
            }}
            labelStyle={{color: 'white'}}>
             Verify OTP
          </Button>
    </View>
    </LinearGradient>

    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop:60,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    alignSelf:'flex-start',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
  },
});

export default OTPScreen;
