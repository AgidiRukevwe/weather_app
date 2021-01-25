import React from 'react';
import Icon_Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';

import {View, Text} from 'react-native';

function Temp_info({weather}) {
  return (
    <View>
      <View style={styles.weather_info}>
        <View>
          <Icon_Entypo name="water" size={20} color="#333" />
          <Text>{weather?.humidity}%</Text>
        </View>

        <View>
          <Text style={{fontSize: 70}}>{weather?.temp}</Text>
        </View>

        <View>
          <Icon_Mat name="weather-windy" size={20} color="#333" />
          <Text>24km/h</Text>
        </View>
      </View>
    </View>
  );
}

export default Temp_info;
