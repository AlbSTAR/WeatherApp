import {async} from '@firebase/util';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import WeatherInfo from '../untils/WeatherInfo';
import WeatherScroll from '../untils/WeatherScroll';
import WeatherSearch from '../untils/WeatherSearch';

const API_KEY = '84af2301d51ed2cdbf7cc2574c95da04';
const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const fetchWeatherData = async cityName => {
    try {
      setLoaded(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
      );
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData('London');
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WeatherSearch
          weatherdata={weatherData}
          fetchWeatherData={fetchWeatherData}
        />
      </View>

      {weatherData !== null ? (
        <WeatherInfo
          weatherData={weatherData}
          fetchWeatherData={fetchWeatherData}
        />
      ) : (
        <View style={styles.body}>
          <Modal
            visible={showWarning}
            animationType="slide"
            transparent
            onRequestClose={() => {
              setShowWarning(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTitle}>
                  <Text style={styles.text}>WARNING!</Text>
                </View>
                <View style={styles.warningBody}>
                  <Text style={styles.text}>
                    City not found! Try another cityname.
                  </Text>
                </View>
                <Pressable
                  onPress={() => setShowWarning(false)}
                  style={styles.warningButton}
                  android_ripple={{color: '#fff'}}>
                  <Text style={styles.text}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modalView: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    shadowColor: '#000',
    borderRadius: 20,
  },
  modalTitle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warningBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningButton: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default HomeScreen;
