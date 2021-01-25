import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  week: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  weekday: {
    marginTop: 100,
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  weekday_weather: {
    position: 'absolute',
    top: -20,
    left: 20,
    transform: [{translateX: -35}],
    height: 50,
    width: 100,
  },
});

export default styles;
