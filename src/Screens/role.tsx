import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

// ProgressBar Component
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

const Role = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('DateofBirth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Union} style={styles.UnionImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={40} label="Account creation" />
          <ProgressBar progress={0} label="profile setup" />
          <ProgressBar progress={0} label="your preferences" />
        </View>
      </View>

      <Text style={styles.text}>What is your role?</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log("I'm a Parent pressed")}>
          <Image source={images.Father} style={styles.image} />
          <Text style={styles.roleButtonText}>I'm a Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {borderColor: '#D9D9D9'}]}
          onPress={() => console.log("I'm a Teacher pressed")}>
          <Image source={images.Teacher} style={styles.image} />
          <Text style={styles.roleButtonText}>I'm a Teacher</Text>
        </TouchableOpacity>
        {/* Add more role buttons as needed */}
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
    marginTop: SPACING.space_8,
    alignItems: 'center',
  },
  UnionImage: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_HEIGHT / 10,
    resizeMode: 'contain',
    marginTop: '-2%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SPACING.space_4, // Adjust padding as needed
    //marginBottom: SPACING.space_4, // Add some margin to the bottom
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
    marginTop: '2%',
    color: '#5600C6',
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    borderwidth: 2,
  },
  roleButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDERRADIUS.radius_8,
    marginHorizontal: '1%',
    width: '27%',
    height: SCREEN_HEIGHT / 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#9747FF',
  },
  roleButtonText: {
    fontSize: FONTSIZE.size_8,
    color: '#000000',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
  image: {
    width: '40%',
    height: '90%',
    resizeMode: 'contain',
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_20,
  },
});

export default Role;
