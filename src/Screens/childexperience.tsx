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
const ChildExperience = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('ScreenTimeLimit');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={70} label="Profile setup" />
          <ProgressBar progress={0} label="Your prefrences" />
        </View>
      </View>
      <Text style={styles.text}>Make your child’s experience complete</Text>

      <Text style={styles.text1}>Allow speaking and recording exercises</Text>
      <Text style={styles.text2}>
        Letting your learner use their microphone will help them {'\n'} interact
        more and share their special moments with you!
      </Text>

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
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_4,
  },
  text2: {
    fontSize: FONTSIZE.size_5,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_4,
  },

  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_30,
  },
});

export default ChildExperience;
