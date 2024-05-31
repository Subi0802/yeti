import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../../Common/allImages';

const Swiper4 = () => {
  return (
    <View>
      <Image source={images.Pink} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Screen time that unlocks your child's creativity...
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
    resizeMode: 'stretch',
    // marginRight: 20,
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
    marginLeft: 30,
  },
  rectImage: {
    width: 740,
    resizeMode: 'stretch',
  },
});

export default Swiper4;
