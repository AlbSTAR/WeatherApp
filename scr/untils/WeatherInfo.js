import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import WeatherScroll from './WeatherScroll';
import moment from 'moment-timezone';

const WeatherInfo = ({weatherData, fetchWeatherData}) => {
  const {
    name,
    visibility,
    weather: [{icon, description}],
    wind: {speed},
    main: {temp, humidity, feels_like},
    sys: {sunrise, sunset, country},
  } = weatherData;
  return (
    <View style={styles.container}>
      <View style={styles.mainTable}>
        <View style={styles.tableHeader}>
          <View style={styles.mainHead}>
            <Text style={styles.title}>
              {name},{country}
            </Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Image
            style={styles.largeIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
          />
        </View>
        <View style={styles.extraInfo}>
          <Text style={styles.currentTemp}>
            {Math.trunc(temp - 273.15) + '°C'}
          </Text>
          <View style={styles.tableDetails}>
            <View style={styles.textDescrition}>
              <Text style={styles.textInfo}>Feels like </Text>
              <Text style={styles.textInfo}>Humidity </Text>
              <Text style={styles.textInfo}>Wind Speed </Text>
              <Text style={styles.textInfo}>Visibility </Text>
              <Text style={styles.textInfo}>Sunrise </Text>
              <Text style={styles.textInfo}>Sunset </Text>
            </View>
            <View style={styles.textNumber}>
              <Text style={styles.textInfo}>
                {Math.trunc(feels_like - 273.15) + '°C'}{' '}
              </Text>
              <Text style={styles.textInfo}>{humidity} %</Text>
              <Text style={styles.textInfo}>{speed} m/s</Text>
              <Text style={styles.textInfo}>{visibility}</Text>
              <Text style={styles.textInfo}>
                {moment(sunrise * 1000).format('HH:mm')}
              </Text>
              <Text style={styles.textInfo}>
                {moment(sunset * 1000).format('HH:mm')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <WeatherScroll />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainTable: {
    flexDirection: 'column',
  },
  mainHead: {
    flexDirection: 'column',
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: '#1c7ed6',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginTop: 8,
  },
  largeIcon: {
    width: 200,
    height: 200,
  },
  currentTemp: {
    fontSize: 70,
    marginRight: 8,
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textDescrition: {
    marginRight: 18,
  },
  textInfo: {
    fontSize: 16,
    padding: 1,
  },
  tableDetails: {
    flexDirection: 'row',
  },
});

export default WeatherInfo;
