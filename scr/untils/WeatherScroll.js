import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import FutureForecast from './FutureForcast';

const WeatherScroll = ({forecastData}) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <FutureForecast data={forecastData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#18181bcc',
    padding: 20,
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 50,
  },
});

export default WeatherScroll;
