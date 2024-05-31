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
import {BORDERRADIUS, FONTSIZE, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

const ProgressBar = ({progress, label}) => {
  const [barWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [barWidth, progress]);

  return (
    <View style={styles.progressBarWrapper}>
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
      <Text style={styles.progressBarLabel}>{label}</Text>
    </View>
  );
};

const ChildBetter = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('ChildExperience');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={20} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
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
            style={[styles.roleButton, {width: SCREEN_WIDTH / 8}]}
            onPress={() => console.log('button 2 pressed')}>
            <Text style={styles.roleButtonText}>sentences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: SCREEN_WIDTH / 8}]}
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
            style={[
              styles.roleButton,
              {width: SCREEN_WIDTH / 8, borderColor: '#14AE5C'},
            ]}
            onPress={() => console.log('button 2 pressed')}>
            <Text style={styles.roleButtonText}>sentences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, {width: SCREEN_WIDTH / 8}]}
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
    justifyContent: 'flex-start',
    paddingTop: SPACING.space_6,
    alignItems: 'center',
  },
  backImage: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_HEIGHT / 12,
    resizeMode: 'contain',
    marginTop: '-2%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SPACING.space_8, // Adjust padding as needed
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ensures progress bars take the remaining space
  },
  progressBarWrapper: {
    alignItems: 'center',
    marginHorizontal: SPACING.space_2,
  },
  barContainer: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 14,
    backgroundColor: '#ddd',
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
    borderRadius: BORDERRADIUS.radius_25,
  },
  progressBarLabel: {
    marginTop: SPACING.space_1,
    fontSize: FONTSIZE.size_5,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
  },
  contentContainer: {
    marginLeft: SPACING.space_20, // Adjust left margin for content container
  },
  content: {
    flexDirection: 'row', // Align image and text horizontally
  },
  text: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_4,
  },
  text1: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: SPACING.space_6,
    marginTop: SPACING.space_6,
  },
  image: {
    width: SCREEN_WIDTH / 20,
    height: SCREEN_HEIGHT / 8,
    resizeMode: 'contain',
    marginLeft: SPACING.space_6,
    marginTop: SPACING.space_6,
  },
  roleButtonRow: {
    flexDirection: 'row',
    marginLeft: SPACING.space_30, // Adjust left margin
    marginTop: '-3%',
  },
  roleButton: {
    borderRadius: BORDERRADIUS.radius_4,
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 14,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: SPACING.space_6,
  },
  roleButtonText: {
    fontSize: FONTSIZE.size_6,
    color: '#000000',
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_10,
  },
});

export default ChildBetter;
