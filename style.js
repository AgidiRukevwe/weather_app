import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const font = {
  lg: 40,
  xs: 10,
};

const style = StyleSheet.create({
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

  input_container: {
    position: 'absolute',
    width: width,
    top: 100,
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'blue',
    zIndex: 5,
  },

  input_sub_container: {
    width: width / 1.1,
    // backgroundColor: 'red',
  },

  input: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    overflow: 'hidden',
  },
});

export default style;
