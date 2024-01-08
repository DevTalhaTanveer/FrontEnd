import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { CountryData,  getstatedata } from '../Components/Countries';

const Register = ({ navigation }) => {
  const[SelectedCountry,setSelectedCountry]=useState(null)
  const[SelectedState,setSelectedState]=useState(null)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Import the necessary functions from the 'country-state-city' library


  return (
    <LinearGradient colors={['hsla(180, 4%, 27%, 1)', 'hsla(197, 39%, 26%, 1)']} style={styles.gradient}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.regText}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subText}>Please fill the inputs below</Text>
          </View>

          <TextInput
            label="Name"
            style={styles.input}
            placeholder="Full Name"
            mode="outlined"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            label="Phone"
            style={styles.input}
            mode="outlined"
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Email"
            style={styles.input}
            mode="outlined"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Password"
            style={styles.input}
            mode="outlined"
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            label="Confirm Password"
            style={styles.input}
            mode="outlined"
            secureTextEntry
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <RNPickerSelect
            placeholder={{ label: 'Select Country', value: null }}
            items={CountryData}
            onValueChange={(value) => setSelectedCountry(value)}
            value={SelectedCountry}
            style={pickerSelectStyles}
          />

          {/* State Dropdown */}
          <RNPickerSelect
            placeholder={{ label: 'Select State', value: null }}
            items={getstatedata}
            onValueChange={(value) => setSelectedState(value)}
            value={SelectedState}
            style={pickerSelectStyles}
          />

       

          <Button
            mode="contained"
            style={styles.signupButton}
            onPress={() => console.log('Sign Up pressed')}>
            Sign Up
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  regText: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  subText: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 10,
    color: 'white',
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  signupButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#87CEEB',
  },
  signInText: {
    marginTop: 20,
    color: '#3498db',
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default Register;
