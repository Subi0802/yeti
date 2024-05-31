import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';

const NumberInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
    </View>
  );
};

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

const NotVerified = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={20} label="Account creation" />
          <ProgressBar progress={0} label="profile setup" />
          <ProgressBar progress={0} label="your preferences" />
        </View>
      </View>

      <Text style={styles.text}>Enter your year of birth</Text>
      <Text style={styles.validationText}>
        We don't store the information, we use this for validation purpose only
      </Text>
      <View style={styles.boxContainer}>
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </View>
      <Text style={styles.errorMessage}>
        Uh oh! Looks like you’re not old enough to sign up.{'\n'}
        Please get an adult to sign up for you!
      </Text>
      <TouchableOpacity>
        <Image source={images.Countinue} style={styles.CountinueImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SPACING.space_8,
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
    // marginBottom: SPACING.space_4, // Add some margin to the bottom
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
  text: {
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    marginTop: PADDING.padding_8,
    color: '#5600C6',
  },
  validationText: {
    fontSize: FONTSIZE.size_6,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    textAlign: 'center',
    color: '#A5A0AB',
    marginBottom: PADDING.padding_8,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: SCREEN_WIDTH / 4,
    // margintop: '10%',
  },
  inputContainer: {
    width: SCREEN_WIDTH / 16,
    height: SCREEN_HEIGHT / 8,
    borderWidth: 3,
    borderColor: '#D9D9D9',
    borderRadius: BORDERRADIUS.radius_4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10%',
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: FONTSIZE.size_5,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    textAlign: 'center',
    color: '#F05760', // Adjust color as needed
    marginBottom: SPACING.space_4, // Add margin top as needed
  },

  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_6,
  },
});

export default NotVerified;
