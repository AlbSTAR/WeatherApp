import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WeatherSearch = ({weatherData, fetchWeatherData, fetchForecast}) => {
  const [cityName, setCityName] = useState('');

  const searchCity = () => {
    fetchWeatherData(cityName);
    fetchForecast(cityName);
  };
  return (
    <View style={styles.searchBar}>
      <FontAwesome5 name="search" size={24} color="#000" onPress={searchCity} />
      <TextInput
        style={styles.input}
        placeholder="Search for a city"
        value={cityName}
        onChangeText={text => setCityName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '85%',
    borderWidth: 1.5,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 10,
    paddingHorizontal: 12,
    marginTop: 25,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default WeatherSearch;
