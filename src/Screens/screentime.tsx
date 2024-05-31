import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, SPACING} from '../Common/theme';

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

const ScreenTimeLimit = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('LastThing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={100} label="Profile setup" />
          <ProgressBar progress={80} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Set a screen time limit for your child</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={[styles.roleButton, {borderColor: '#14AE5C'}]}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>30 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {width: SCREEN_WIDTH / 8}]}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>60 min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {width: SCREEN_WIDTH / 8}]}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>90 min</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleContinuePress}>
        <Image source={images.Countinue} style={styles.CountinueImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.space_6,
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
    height: SCREEN_HEIGHT / 12,
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

  roleButtonRow: {
    flexDirection: 'row',
    marginLeft: SPACING.space_30, // Adjust left margin
    marginTop: '5%',
  },
  roleButton: {
    borderRadius: BORDERRADIUS.radius_4,
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 14,
    borderWidth: 3,
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
    marginTop: SPACING.space_30,
  },
});
export default ScreenTimeLimit;
