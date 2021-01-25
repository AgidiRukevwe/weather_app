import React from 'react';
import styles from './style';

import {View, Text} from 'react-native';

import Sun from '../../assets/sun.svg';

function Weekdays() {
  return (
    <View style={styles.week}>
      <View style={styles.weekday}>
        <Sun style={styles.weekday_weather} />
        <Text>29</Text>
      </View>
    </View>
  );
}

export default Weekdays;
