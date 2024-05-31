import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';

const NumberInput = ({value, onChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value={value}
        onChangeText={onChange}
      />
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

const DateofBirth = () => {
  const navigation = useNavigation();
  const [year, setYear] = useState({0: '', 1: '', 2: '', 3: ''});

  const handleContinuePress = () => {
    const birthYear = parseInt(Object.values(year).join(''), 10);
    if (birthYear < 2000) {
      navigation.navigate('CreateAccount');
    } else {
      navigation.navigate('NotVerified');
    }
  };

  const handleInputChange = (index: number, value: any) => {
    setYear(prev => ({...prev, [index]: value}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={40} label="Account creation" />
          <ProgressBar progress={0} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
      </View>

      <Text style={styles.text}>Enter your year of birth</Text>
      <Text style={styles.validationText}>
        We don't store the information, we use this for validation purposes
        only.
      </Text>
      <View style={styles.boxContainer}>
        <NumberInput
          value={year[0]}
          onChange={(value: any) => handleInputChange(0, value)}
        />
        <NumberInput
          value={year[1]}
          onChange={(value: any) => handleInputChange(1, value)}
        />
        <NumberInput
          value={year[2]}
          onChange={(value: any) => handleInputChange(2, value)}
        />
        <NumberInput
          value={year[3]}
          onChange={(value: any) => handleInputChange(3, value)}
        />
      </View>
      <TouchableOpacity onPress={handleContinuePress}>
        <Image source={images.Countinue} style={styles.ContinueImage} />
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
    height: SCREEN_HEIGHT / 10,
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
    width: '20%',
    // marginTop: '10%',
  },
  inputContainer: {
    width: '35%',
    height: '40%',
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
  ContinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '-2%',
  },
});

export default DateofBirth;
