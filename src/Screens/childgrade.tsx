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

const ChildGrade = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('ChildBetter');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={10} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Let’s get to know your child better</Text>
      <Text style={styles.text1}>Which grade is your child in?</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>Ages 4-5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>Ages 5-6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>Ages 6-7 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 4 pressed')}>
          <Text style={styles.roleButtonText}>Ages 8-9 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>Ages 9-10 </Text>
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
    marginTop: SPACING.space_6,
  },
  text1: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_6,
  },
  roleButtonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow buttons to wrap to the next line
    justifyContent: 'center', // Center the buttons horizontally
    marginTop: SPACING.space_10,
    width: '40%',
    marginLeft: SPACING.space_24,
  },
  roleButton: {
    borderRadius: BORDERRADIUS.radius_4,
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 12,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: SPACING.space_6,
    marginBottom: SPACING.space_4,
  },
  roleButtonText: {
    fontSize: FONTSIZE.size_5,
    color: '#000000',
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
    marginTop: SPACING.space_1,
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_10,
    marginLeft: SPACING.space_24,
  },
});

export default ChildGrade;
