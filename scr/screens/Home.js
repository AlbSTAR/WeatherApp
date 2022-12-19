import {async} from '@firebase/util';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import WeatherInfo from '../untils/WeatherInfo';
import WeatherScroll from '../untils/WeatherScroll';

const API_KEY = '84af2301d51ed2cdbf7cc2574c95da04';
const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

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
  } else if (weatherData === null) {
    Alert.alert('city not exist');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.headerTitle}></Text> */}
      </View>
      <WeatherInfo
        weatherData={weatherData}
        fetchWeatherData={fetchWeatherData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // headerTitle: {
  //   color: '#4263eb',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },
});

export default HomeScreen;
