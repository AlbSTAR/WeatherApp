import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import WeatherSearch from './WeatherSearch';

const WeatherInfo = props => {
  const {
    name,
    visibility,
    weather: [{icon, description}],
    wind: {speed},
    main: {temp, humidity, feels_like},
    sys: {sunrise, sunset},
  } = props.weatherData;
  return (
    <View style={styles.container}>
      <WeatherSearch
        weatherdata={props.weatherData}
        fetchWeatherData={props.fetchWeatherData}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.largeIcon}
          source={{uri: `https://openweathermap.org/img/wn/${icon}.png`}}
        />
        <Text style={styles.currentTemp}>
          {Math.trunc(temp - 273.15) + '°C'}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Temp.png')}
          />
          <Text style={styles.textInfo}>{feels_like}</Text>
          <Text style={styles.textInfo}>Feels like </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Humidity.png')}
          />
          <Text style={styles.textInfo}>{humidity} %</Text>
          <Text style={styles.textInfo}>Humidity </Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Visibility.png')}
          />
          <Text style={styles.textInfo}>{visibility}</Text>
          <Text style={styles.textInfo}>Visibility </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Windspeed.png')}
          />
          <Text style={styles.textInfo}>{speed} m/s</Text>
          <Text style={styles.textInfo}>Wind Speed </Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Sunrise.png')}
          />
          <Text style={styles.textInfo}>
            {new Date(sunrise * 1000).toLocaleString()}
          </Text>
          <Text style={styles.textInfo}>Sunrise </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/Sunset.png')}
          />
          <Text style={styles.textInfo}>
            {new Date(sunset * 1000).toLocaleString()}
          </Text>
          <Text style={styles.textInfo}>Sunset </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 15,
  },
  title: {
    color: '#1c7ed6',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  logo: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'space-around',
    borderWidth: 1.5,
    borderRadius: 25,
    marginLeft: 10,
    backgroundColor: '#000',
  },
  largeIcon: {
    width: 200,
    height: 200,
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#1c7ed6',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 7,
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  smallIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 50,
  },
  textInfo: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default WeatherInfo;
