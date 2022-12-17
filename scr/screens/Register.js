import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import CostumButton from '../untils/CustumBotton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../config/firebase';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userRegister = async (email, password, confirmPassword) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://weatherapp-aa673.firebaseapp.com',
          })
          .then(() => {
            alert('Verification email was sent on your email');
          })
          .catch(error => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({email});
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('../../assets/Register.png')}
      />
      <Text style={styles.text}>Register</Text>
      <TextInput
        onChangeText={email => setEmail(email)}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={password => setPassword(password)}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        style={styles.input}
        placeholder="Confirm Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <CostumButton
        title="Register"
        color="#fff"
        onPressFunction={() => userRegister(email, password, confirmPassword)}
      />
      <View style={styles.bottomContent}>
        <Text style={styles.memberText}>Already a member?</Text>
        <TouchableOpacity
          title="Register"
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
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
  memberText: {
    fontSize: 22,
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
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#5f3dc4',
    marginLeft: 15,
  },
});

export default RegisterScreen;
