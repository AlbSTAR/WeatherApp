import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import CostumButton from '../untils/CustumBotton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../assets/WelcomeLogo.png')}
      />
      <Text style={styles.text}>Weather News & Feed</Text>
      <CostumButton
        title="Login"
        color="#fff"
        onPressFunction={() => navigation.navigate('Login')}
      />
      <CostumButton
        title="Register"
        color="#fff"
        onPressFunction={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  logo: {
    width: 300,
    height: 250,
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
