import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Alert, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CostumButton from '../untils/CustumBotton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../config/firebase';
import UserStack from '../navigation/userStack';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('New password was sent on your email address');
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View style={styles.content}>
      <Image style={styles.image} source={require('../../assets/Login.png')} />
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <CostumButton
        title="Login"
        color="#fff"
        onPressFunction={() => userLogin(email, password)}
      />
      <View style={styles.bottomContent}>
        <Text style={styles.memberText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          forgetPassword();
        }}>
        <Text style={styles.buttonText}>Forget Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#000',
    justifyContentContent: 'center',
    alignItems: 'center',
  },
  main: {
    justifyContentContent: 'center',
  },
  image: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 60,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '90%',
    fontSize: 25,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
  },
  bottomContent: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#5f3dc4',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  memberText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#5f3dc4',
    marginLeft: 15,
  },
});

export default LoginScreen;
