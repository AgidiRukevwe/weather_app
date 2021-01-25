import React from 'react';
import styles from './style';
import {View, Text} from 'react-native';
import Sun from '../../assets/sun.svg';

function City({city}) {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.city_name}>{city && city}</Text>
        <Text>The weather seems quite dull today</Text>
      </View>

      {/* weather_images */}
      <View style={styles.weather_icons}>
        <Sun style={styles.sun_icon} />
      </View>
    </View>
  );
}

export default City;
