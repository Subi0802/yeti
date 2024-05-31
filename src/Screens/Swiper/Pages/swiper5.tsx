import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../../Common/allImages';

const Swiper5 = () => {
  return (
    <View>
      <Image source={images.Red} style={styles.backImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          And cherish these little moments of joy, at your own convenience
        </Text>
        <View style={styles.imageWrapper}>
          <Image source={images.Rectangle} style={styles.rectImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backImage: {
    position: 'relative',
    marginTop: 20,
    borderColor: 'red',
    width: 800,
    height: 500,
    // marginLeft:20,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    width: 300,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    marginBottom: 5,
  },
  textAndImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
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

export default Swiper5;
