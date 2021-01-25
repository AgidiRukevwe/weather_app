import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const font = {
  lg: 40,
  xs: 10,
};

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#f3f3f3',
    // width
  },
  semi_circle: {
    position: 'absolute',
    flex: 6,
    // backgroundColor: 'red',
    backgroundColor: 'white',
    top: -height / 3,
    width: 600,
    height: 600,
    transform: [{translateX: -100}],
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  app_bar: {
    flexDirection: 'row',
    alignItems: `center`,
    justifyContent: `space-between`,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
    // backgroundColor: 'coral',
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

  //weather info
  weather_info: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },

  //extra info
  extra_info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
  },

  extra: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  ext: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },

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
