import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import FontFamily from '../../../Common/fonts';

import {BORDERRADIUS, FONTSIZE, PADDING} from '../../../Common/theme';

const Demo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>demo video</Text>
        </View>
        {/* <Image source={images.Yeti} style={styles.gif} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  videoContainer: {
    backgroundColor: '#ffff',
    width: '98%',
    height: '100%',
    paddingTop: PADDING.padding_8,
    borderWidth: 6,
    borderColor: '#9747FF',
    borderRadius: BORDERRADIUS.radius_8,
    justifyContent: 'center',
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#000000',
  },
});

export default Demo;
