import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../Common/allImages';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Common/dimensions';

const Splash1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash2');
    }, 500);
  }),
    [];
  return (
    <View>
      <Image source={images.Splash_screen} style={styles.Splashscreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  Splashscreen: {
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 1,
    resizeMode: 'cover',
  },
});
export default Splash1;
