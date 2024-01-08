import React from 'react';
import {View, Image, Text} from 'react-native';
import {Button, Divider, Title, IconButton} from 'react-native-paper';
import AppIntroComponets from '../Components/AppIntroComponets';
import AppSlogan from '../Components/AppSlogan';
import {COLORS} from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
const imageicon = [
  {
    id: 1,
    icon: 'map-marked-alt',
    Text: 'Lets find out together Lets find out together   ',
  },
  {
    id: 2,
    icon: 'people-arrows',
    Text: 'Lets find out together  Lets find out together   ',
  },
  {
    id: 3,
    icon: 'house-user',
    Text: 'Lets find out together  Lets find out together   ',
  },
];
export default function AfterToursScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={['hsla(180, 4%, 27%, 1)', 'hsla(197, 39%, 26%, 1)']}
      style={{flex: 1}}>
      <View style={{padding: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            gap: 5,
            paddingLeft: 5,
            paddingTop: 8,
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/appicons/icon.png')}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
            ItemSync
          </Text>
        </View>

        <Divider
          style={{marginBottom: 12}}
          bold={true}
          theme={{colors: {primary: 'tomato'}}}
        />
        <AppSlogan lost={'Lost ?'} find={'Lets find'} togther={'It Together'} />
        {imageicon.map(item => (
          <AppIntroComponets key={item.id} icon={item.icon} text={item.Text} />
        ))}

        {/* Login and Signup Buttons */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Login')}
            style={{
              flex: 1,
              marginRight: 8,
              backgroundColor: COLORS.statusColor,
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 50,
              padding: 12,
              fontSize: 32,
            }}
            labelStyle={{color: 'white'}}>
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 50,
              padding: 12,
              fontSize: 32,
            }}
            labelStyle={{color: COLORS.statusColor}}>
            Register
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
}
