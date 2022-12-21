import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data ? (
        data.list.map(
          (data, idx) =>
            (idx === 7 ||
              idx === 15 ||
              idx === 23 ||
              idx === 28 ||
              idx === 39) && (
              <FutureForecastItem key={idx} forecastItem={data} />
            ),
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = forecastItem => {
  const {
    dt,
    main: {temp_max},
    weather: [{description, icon}],
  } = forecastItem.forecastItem;
  const img = {
    uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
  };
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>
        {JSON.stringify(moment(dt * 1000).format('ddd'))}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>{description}</Text>
      <Text style={styles.temp}>
        Temp max {Math.trunc(temp_max - 273.15) + '°C'}
      </Text>
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
    fontSize: 15,
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
