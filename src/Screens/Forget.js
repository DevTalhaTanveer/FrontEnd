

import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, LINEARCOLOR } from '../constants/theme';

const ForgotPasswordScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleScreenPress = () => {
    Keyboard.dismiss(); // Dismiss the keyboard when the screen is pressed
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <LinearGradient
        colors={LINEARCOLOR}
        style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
      >
        <View style={styles.container}>
          {/* Logo */}
          <Image source={require('../assets/Forgotpassword.png')} style={styles.logo} />

          {/* Heading */}
          <Text style={styles.heading}>Enter Email</Text>

          {/* Subtext */}
          <Text style={styles.subText}>
            Enter your email address below and we'll send you a link to reset your password.
          </Text>

          {/* Email Input */}
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
            placeholder="Enter your email"
          />

          {/* Reset Password Button */}
       
             <Button
            mode="contained"
            onPress={() => navigation.navigate('OPTScreen')}
            
            contentStyle={{height: 50, width: '95%'}}
            style={{
              backgroundColor: COLORS.blue,
              borderRadius: 50,
              marginTop: 12,
            }}
            labelStyle={{color: 'white'}}>
            Reset Password
          </Button>

          {/* Sign Up Link */}
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

// Styles...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 250,
    height: 300,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
   
  },
  subText: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    overflow:'hidden'
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  signUpText: {
    marginTop: 20,
    color: 'gray',
  },
  signUpLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
