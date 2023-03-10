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
  const [forecastData, setForecastData] = useState(null);
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
  const fetchForecast = async cityName => {
    try {
      setLoaded(false);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`,
      );
      if (res.status === 200) {
        const data = await res.json();
        setForecastData(data);
      } else {
        setForecastData(null);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData('Gramsh');
    fetchForecast('Gramsh');
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
          fetchForecast={fetchForecast}
        />
      </View>

      {weatherData !== null && forecastData !== null ? (
        <WeatherInfo
          weatherData={weatherData}
          fetchWeatherData={fetchWeatherData}
          forecastData={forecastData}
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
                  android_ripple={{color: '#1c7ed6'}}>
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
    borderRadius: 20,
  },
  modalTitle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ced4da',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    fontSize: 16,
    color: '#495057',
  },
  warningBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ced4da',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default HomeScreen;
