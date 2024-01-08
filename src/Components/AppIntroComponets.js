import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {IconButton, MD3Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function AppIntroComponets({icon, text}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={30} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    borderRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 30,
    shadowOpacity: 1,
    elevation: 4,
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(212, 207, 207, 0.44)',
    flexDirection: 'row', // Use flexDirection to align icon and text horizontally
    alignItems: 'center', // Align items in the center vertically
    borderRadius: 40,
  },
  iconContainer: {
    backgroundColor: 'light-grey',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Use flex to allow text to take remaining space
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
