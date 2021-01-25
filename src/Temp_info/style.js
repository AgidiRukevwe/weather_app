import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const font = {
  lg: 40,
  xs: 10,
};

const styles = StyleSheet.create({
  weather_info: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },
});

export default styles;
