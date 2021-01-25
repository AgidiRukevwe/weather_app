import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const font = {
  lg: 40,
  xs: 10,
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
  },
  city: {
    height: height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  city_name: {
    fontSize: font.lg,
  },

  //weather icons
  weather_icons: {
    height: 100,
    alignItems: 'center',
  },
  cloud_icon: {
    height: 200,
    width: 200,
  },
  sun_icon: {
    width: 150,
    height: 150,
  },
});

export default styles;
