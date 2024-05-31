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
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';

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
const LastThing = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('ProfileSetup');
  };
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
      <Text style={styles.text}>Oh, and one last thing...</Text>
      <Text style={styles.text1}>How did you hear about us?</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>Friends or family</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>From school</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>Google Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={[styles.roleButton, {width: '50%'}]}
          onPress={() => console.log('button 4 pressed')}>
          <Text style={styles.roleButtonText}> Facebook/Instagram </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>Other</Text>
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
  text1: {
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginTop: '2%',
  },

  roleButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 2,
    width: '50%',
    marginTop: SPACING.space_6,
    marginRight: SPACING.space_8,
  },
  roleButton: {
    borderRadius: BORDERRADIUS.radius_4,
    height: SCREEN_HEIGHT / 20,
    width: '27%',
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: SPACING.space_8,
  },

  roleButtonText: {
    fontSize: FONTSIZE.size_5,
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

export default LastThing;
