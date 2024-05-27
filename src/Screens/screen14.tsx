import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {useNavigation} from '@react-navigation/native';

const ProgressBar = ({progress}) => {
  const [barWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [barWidth, progress]);

  return (
    <View style={styles.barContainer}>
      <Animated.View
        style={[
          styles.bar,
          {
            width: barWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const Screen14 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen15');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={40} />
      </View>
      <Text style={styles.text}>Allow speaking and recording exercises</Text>

      <Text style={styles.text1}>
        <View style={{flexDirection: 'row'}}>
          <Text>We want to keep you in your little learner’s learning</Text>
        </View>
        {'\n'}
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 20}}>
            loop. By allowing microphone and recording
          </Text>
        </View>
        {'\n'}
        <View style={{flexDirection: 'row'}}>
          <Text>permissions, we can bring you what your little one</Text>
        </View>
        {'\n'}
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 20}}>
            has to say.We promise you it’s safe in the app!
          </Text>
        </View>
      </Text>

      <TouchableOpacity onPress={handleContinuePress}>
        <Image source={images.Countinue} style={styles.CountinueImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  backImage: {
    width: 53,
    height: 48,
    resizeMode: 'contain',
    alignSelf: 'flex-start', // Align the image to the left side
    marginLeft: 10, // Adjust margin to create space between the image and the left edge,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  barContainer: {
    width: 190,
    height: 25,
    backgroundColor: '#ddd',
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    //marginLeft: 80,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 14,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
    //marginLeft: 70,
    marginTop: 30,
    alignSelf: 'center',
  },

  CountinueImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Screen14;
