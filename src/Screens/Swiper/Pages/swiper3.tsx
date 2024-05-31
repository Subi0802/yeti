import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../../Common/allImages';

const Swiper3 = () => {
  return (
    <View>
      <Image source={images.Yellow} style={styles.backgroundImage} />
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
  backgroundImage: {
    position: 'relative',
    width: 800,
    height: 500,
    marginLeft: 20,
    resizeMode: 'stretch',
  },
  textContainer: {
    position: 'absolute',
    top: '10%',
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

export default Swiper3;
