import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {firebase} from '../config/firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          setEmail(snapshot.data());
        } else {
          console.log('User does NOT exist');
        }
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => firebase.auth().signOut()}>
          <FontAwesome5 name="sign-out-alt" color="#495057" size={90} />
          <Text style={{fontSize: 24, color: '#1c7ed6', fontWeight: 'bold'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#fff',
    backgroundColor: '#343a40',
    textAlign: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
