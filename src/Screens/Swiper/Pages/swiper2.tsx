import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../../Common/allImages';
import {FONTSIZE} from '../../../Common/theme';

const Swiper2 = () => {
  return (
    <View style={styles.container}>
      <Image source={images.Blue} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ... and helps them care for themselves and the world around them!
        </Text>
        <View style={styles.imageWrapper}>
          <Image source={images.Rectangle} style={styles.rectImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 6,
    borderColor: 'purple',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    width: '90%',
    fontSize: FONTSIZE.size_10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectImage: {
    width: 750,
    resizeMode: 'stretch',
  },
});

export default Swiper2;
