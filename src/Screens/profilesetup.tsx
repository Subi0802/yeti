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
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';
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

const ProfileSetup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={100} label="Profile setup" />
          <ProgressBar progress={100} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Your child’s profile has been set up now!</Text>
      <View style={styles.ellipseContainer}>
        <TouchableOpacity onPress={() => console.log('')}>
          <Image source={images.Ellipse} style={styles.ellipseimage} />
          <Image source={images.Pic} style={styles.picImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('')}>
          <Image source={images.Ellipse} style={styles.ellipseimage} />
          <Image source={images.Plus} style={styles.picImage} />
        </TouchableOpacity>
      </View>

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
    paddingTop: 10,
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
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    marginTop: PADDING.padding_8,
    color: '#5600C6',
  },
  ellipseimage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 4,
    resizeMode: 'contain',
  },
  ellipseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.space_10,
    position: 'relative',
  },
  picImage: {
    position: 'absolute',
    top: '10%',
    left: '35%',
    // transform: [{translateX: -60}, {translateY: -60}],
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 5,
  },

  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_10,
  },
});

export default ProfileSetup;
