// LoginScreen.js
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, LINEARCOLOR} from '../constants/theme';



const Login = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
   navigation.navigate('Forget');
  };

  const handleSignUp = () => {
    // Navigate to the SignUpScreen
    navigation.navigate('Register'); // Replace 'SignUp' with the name of your SignUpScreen
  };

  return (
    <LinearGradient
      colors={LINEARCOLOR}
       style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require('../assets/appicons/icon.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Login</Text>

          <Text style={styles.subtitle}>Sign in to continue</Text>
  <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
            placeholder="Enter your email"
            theme={{ colors: { primary: COLORS.blue, underlineColor: 'transparent' } }}
          />
          <TextInput
            label="Password"
            mode="outlined"
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
            placeholder="Enter the password"
            theme={{ colors: { primary: COLORS.blue, underlineColor: 'transparent' } }}
          />
         
        
     

          <Button
            mode="contained"
            onPress={handleLogin}
            contentStyle={{height: 50, width: '95%'}}
            style={{
              backgroundColor: COLORS.blue,
              borderRadius: 50,
              marginTop: 12,
            }}
            labelStyle={{color: 'white'}}>
            Login
          </Button>

          <TouchableWithoutFeedback onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSignUp}>
            <Text style={styles.signupText}>
              Don't have an account? Sign up
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 250,
  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: COLORS.title,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: 'gray',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    margin: 16,
    backgroundColor: COLORS.blue,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    overflow:'hidden',
   
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 16,
    marginTop:12,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: 'gray',
  },
});

export default Login;
