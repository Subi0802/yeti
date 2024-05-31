import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
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

const ChildName = () => {
  const navigation = useNavigation();

  const [childName, setChildName] = useState('');
  const handleContinuePress = () => {
    navigation.navigate('ChildGrade');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} label="Account creation" />
          <ProgressBar progress={0} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Let’s get to know your child better</Text>
      <Text style={styles.nameText}>What’s your child’s name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setChildName(text)}
        value={childName}
      />
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
    textAlign: 'center',
    marginTop: SPACING.space_8,
    color: '#5600C6',
  },
  nameText: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    textAlign: 'center',
    marginTop: SPACING.space_6,
    color: '#222222',
  },
  input: {
    height: SCREEN_HEIGHT / 10,
    width: SCREEN_WIDTH / 4,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_4,
    marginTop: SPACING.space_10,
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_16,
  },
});

export default ChildName;
