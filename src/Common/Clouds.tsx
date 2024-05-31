import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import allImages from '../Common/allImages';
import {SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

export const Clouds = () => {
  return (
    <View style={styles.allImages}>
      <Image style={styles.image1} source={allImages.Cloud1}></Image>
      <Image style={styles.image2} source={allImages.Cloud2}></Image>
      <Image style={styles.image3} source={allImages.Cloud3}></Image>
      <Image style={styles.image4} source={allImages.Cloud4}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  allImages: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'flex-start',
  },
  image1: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 4,
    margin: SPACING.space_4,
    resizeMode: 'contain',
  },
  image2: {
    width: SCREEN_WIDTH / 5,
    height: SCREEN_HEIGHT / 2,
    resizeMode: 'contain',
  },
  image3: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
  },
  image4: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 4,
    resizeMode: 'contain',
  },
});
