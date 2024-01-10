import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar, Text, Modal, Portal } from 'react-native-paper';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS } from '../constants/theme';

const SignupScreen = ({route}) => {
  const {States,Country}=route.params
 console.log(States);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [avatarSource, setAvatarSource] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
console.log(country);
console.log(state);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleImageUpload = useCallback(() => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      saveToPhotos: true,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode, response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setAvatarSource(source);
      }
    });

    hideModal(); // Close the modal after image selection
  }, []);

  const handleImageUploadCamera = useCallback(() => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode, response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setAvatarSource(source);
      }
    });

    hideModal(); // Close the modal after image selection
  }, []);

  const countryData = [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    // Add more countries as needed
  ];

  const stateData = [
    { label: 'New York', value: 'NY' },
    { label: 'California', value: 'CA' },
    // Add more states as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.avatarContainer}>
        {avatarSource ? (
          <Avatar.Image source={avatarSource} size={100} />
        ) : (
          <Avatar.Image source={{ uri: 'https://i.imgur.com/BoN9kdC.png' }} size={100} />
        )}
        <Text style={styles.uploadText} onPress={showModal}>
          Upload Image
        </Text>
      </TouchableOpacity>

      <Portal>
        <Modal visible={isModalVisible} onDismiss={hideModal} contentContainerStyle={styles.modalContent}>
          <ScrollView>
            <TouchableOpacity onPress={handleImageUpload} style={styles.modalOption}>
              <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImageUploadCamera} style={styles.modalOption}>
              <Text>On camera</Text>
            </TouchableOpacity>
            {/* Add camera option or other options as needed */}
            <Button
              mode="contained"
              onPress={hideModal}
              contentStyle={{ height: 50, width: '100%' }}
              style={{
                backgroundColor: COLORS.blue,
                borderRadius: 50,
                marginTop: 12,
              }}
              labelStyle={{ color: 'white' }}
            >
              Close
            </Button>
          </ScrollView>
        </Modal>
      </Portal>

      {/* Input fields */}
      <TextInput label="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} style={styles.input} />
      <TextInput label="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
      
      <TextInput
  label="Phone Number"

  keyboardType="numeric"
  value={phone}
  onChangeText={(text) => setPhone(text)}
  style={styles.input}
/>
   
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      {/* Country dropdown list */}
      <RNPickerSelect
        placeholder={{ label: 'Select Country', value: null }}
        onValueChange={(isoCode) => setCountry(isoCode)}
        items={Country}
        style={pickerStyles}
      />

      {/* State dropdown list */}
      <RNPickerSelect
        placeholder={{ label: 'Select State', value: null }}
        onValueChange={(value) => setState(value)}
        items={States(country)}
        style={pickerStyles}
      />

    
       <Button
              mode="contained"
              onPress={() => console.log('Signup button pressed')}
              contentStyle={{ height: 50, width: '100%' }}
              style={{
                backgroundColor: COLORS.blue,
                borderRadius: 50,
                marginTop: 12,
              }}
              labelStyle={{ color: 'white' }}
            >
                   Sign Up
            </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    marginBottom: 20,
    overflow: 'hidden',
  },
  uploadText: {
    marginTop: 5,
    marginHorizontal: 10,
    color: COLORS.blue,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  modalOption: {
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  signupButton: {
    marginTop: 20,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default SignupScreen;
