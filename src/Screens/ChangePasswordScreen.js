// ChangePasswordScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const ChangePasswordScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Add your logic to handle password change here
    console.log('Changing password:', password);
    navigation.navigate('Login')
    
  };
  

  return (
      <LinearGradient
      colors={['hsla(180, 4%, 27%, 1)', 'hsla(197, 39%, 26%, 1)']}
      style={{flex: 1, justifyContent: 'center' ,paddingHorizontal:20}}>
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/location.png')} style={styles.logo} />

      <Text style={styles.heading}>Change Password</Text>

      {/* Password Input */}
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Confirm Password Input */}
      <TextInput
        label="Confirm Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Change Password Button */}
      <Button mode="contained" style={styles.button} onPress={handleChangePassword}>
        Change Password
      </Button>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    alignSelf:'flex-start'
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default ChangePasswordScreen;
