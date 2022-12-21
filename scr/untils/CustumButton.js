import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CostumButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{borderless: false}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#969696' : props.color},
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    padding: -10,
  },
  button: {
    width: 350,
    height: 60,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 2,
    borderBottomColor: '#000',
  },
});

export default CostumButton;
