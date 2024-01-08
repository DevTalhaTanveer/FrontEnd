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
import {COLORS} from '../constants/theme';

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
      colors={['hsla(180, 4%, 27%, 1)', 'hsla(197, 39%, 26%, 1)']}
       style={{flex: 1, justifyContent: 'center' ,paddingHorizontal:5}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require('../assets/Onboarding3.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Login</Text>

          <Text style={styles.subtitle}>Please sign in to continue</Text>

          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              left={<TextInput.Icon name="email" />}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              left={<TextInput.Icon name="lock" />}
              style={styles.input}
            />
          </View>

          <Button
            mode="contained"
            onPress={handleLogin}
            contentStyle={{height: 50, width: '95%'}}
            style={{
              backgroundColor: COLORS.statusColor,
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
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: COLORS.white,
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
    backgroundColor: 'transparent',
  },
  input: {
    borderRadius: 14,
    color: 'white',
    overflow: 'hidden',
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: 'gray',
  },
});

export default Login;
