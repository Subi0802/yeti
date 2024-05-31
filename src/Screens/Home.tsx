import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import allImages from '../Common/allImages';
import {Clouds} from '../Common/Clouds';
import FastImage from 'react-native-fast-image';
import FontFamily from '../Common/fonts';
import {FONTSIZE, PADDING, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

const Home = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Screen1');
    }, 2500);
  }),
    [];
  return (
    <View style={styles.container}>
      <Clouds />
      <View style={styles.overallContainer}>
        <FastImage style={styles.image5} source={allImages.Hello}></FastImage>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>I'm Yeti!</Text>
          <Text style={styles.text}>It's so nice to</Text>
          <Text style={styles.text}>meet you.</Text>
        </View>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BAE0FF',
  },
  overallContainer: {
    backgroundColor: '#BAE0FF',
    justifyContent: 'space-evenly',
    paddingLeft: PADDING.padding_20,
    flexDirection: 'row',
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 1,
  },
  image5: {
    resizeMode: 'contain',
    width: SCREEN_WIDTH / 2.3,
    height: SCREEN_HEIGHT / 1.5,
    marginBottom: SPACING.space_4,
    paddingLeft: PADDING.padding_4,
  },
  textContainer: {
    margin: SPACING.space_6,
    borderColor: 'blue',
  },
  heading: {
    fontSize: FONTSIZE.size_30,
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#6F58A8',
  },
  text: {
    fontFamily: 'MochiyPopOne-Regular',
    fontSize: FONTSIZE.size_16,
    color: '#222222',
  },
});
