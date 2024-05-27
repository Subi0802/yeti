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

const Screen9 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen10');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={0} />
      </View>
      <Text style={styles.text}>Let’s get to know your child better</Text>

      {/* Wrap each text and image pair in a container */}
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Image source={images.Reading} style={styles.image} />
          <Text style={styles.text1}>My child can read a few...</Text>
        </View>
        <View style={styles.roleButtonRow}>
          <TouchableOpacity
            style={[styles.roleButton, {borderColor: '#14AE5C'}]}
            onPress={() => console.log('button 1 pressed')}>
            <Text style={styles.roleButtonText}>words</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: 130}]}
            onPress={() => console.log('button 2 pressed')}>
            <Text style={styles.roleButtonText}>sentences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: 130}]}
            onPress={() => console.log('button 3 pressed')}>
            <Text style={styles.roleButtonText}>paragraphs </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Image source={images.Speaking} style={styles.image} />
          <Text style={styles.text1}>My child can speak a few...</Text>
        </View>
        <View style={styles.roleButtonRow}>
          <TouchableOpacity
            style={styles.roleButton}
            onPress={() => console.log('button 1 pressed')}>
            <Text style={styles.roleButtonText}>words</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: 130, borderColor: '#14AE5C'}]}
            onPress={() => console.log('button 2 pressed')}>
            <Text style={styles.roleButtonText}>sentences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: 130}]}
            onPress={() => console.log('button 3 pressed')}>
            <Text style={styles.roleButtonText}>paragraphs</Text>
          </TouchableOpacity>
        </View>
      </View>

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
  contentContainer: {
    marginLeft: 40, // Adjust left margin for content container
  },
  content: {
    flexDirection: 'row', // Align image and text horizontally
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: 80,
  },
  text1: {
    fontSize: 20,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: 10,
    marginTop: 30,
  },
  image: {
    width: 63,
    height: 48,
    resizeMode: 'contain',
    marginLeft: 30,
    marginTop: 20,
  },
  roleButtonRow: {
    flexDirection: 'row',
    marginLeft: 110, // Adjust left margin
  },
  roleButton: {
    borderRadius: 10,
    width: 90,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: 5,
  },
  roleButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
  CountinueImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Screen9;
