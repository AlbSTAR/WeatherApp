import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const FutureForecast = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  );
};

const FutureForecastItem = () => {
  const img = {
    uri: 'http://openweathermap.org/img/wn/10d@4x.png',
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>Monday</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - 26</Text>
      <Text style={styles.temp}>Day - 36</Text>
    </View>
  );
};

export default FutureForecast;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 40,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  temp: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
