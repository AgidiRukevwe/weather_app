import React from 'react';

import {View, Text} from 'react-native';
import styles from './style';

function Other_temp_info() {
  return (
    <View>
      <View style={styles.extra_info}>
        {/* uv */}
        <View style={styles.extra}>
          <Text style={styles.ext}>High</Text>
          <Text>Uv</Text>
        </View>

        {/* uv */}
        <View style={styles.extra}>
          <Text style={styles.ext}>Low</Text>
          <Text>Pollution</Text>
        </View>

        {/* uv */}
        <View style={styles.extra}>
          <Text style={{...styles.ext, backgroundColor: 'lightgrey'}}>
            Moderate
          </Text>
          <Text>Pollen</Text>
        </View>
      </View>
    </View>
  );
}

export default Other_temp_info;
