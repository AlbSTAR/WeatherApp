import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import AuthStack from './scr/navigation/authStack';
import UserStack from './scr/navigation/userStack';
import {firebase} from './scr/config/firebase';
import auth from 'firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  return user ? <UserStack /> : <AuthStack />;
};

export default App;
