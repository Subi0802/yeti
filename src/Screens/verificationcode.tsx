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

const VerificationCode = () => {
  const navigation = useNavigation();
  const [verificationCodes, setVerificationCodes] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleContinuePress = () => {
    navigation.navigate('Goals');
  };

  const handleChangeText = (text: string, index: number) => {
    const newVerificationCodes = [...verificationCodes];
    newVerificationCodes[index] = text;
    setVerificationCodes(newVerificationCodes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={70} label="Account creation" />
          <ProgressBar progress={0} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Check your email for a verification code</Text>
      <View style={styles.inputRowContainer}>
        {verificationCodes.map((code, index) => (
          <View style={styles.inputContainer} key={index}>
            <TextInput
              style={styles.input}
              onChangeText={(text: any) => handleChangeText(text, index)}
              value={code}
              keyboardType="numeric"
            />
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handleContinuePress}>
        <Image source={images.Countinue} style={styles.CountinueImage} />
      </TouchableOpacity>
      <Text style={styles.resendCodeText}>Resend code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SPACING.space_6,
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
    marginTop: SPACING.space_6,
    color: '#5600C6',
  },
  inputRowContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.space_6,
  },
  inputContainer: {
    width: SCREEN_WIDTH / 14,
    height: SCREEN_HEIGHT / 8,
    borderColor: '#D9D9D9',
    borderWidth: 3,
    borderRadius: BORDERRADIUS.radius_4,
    marginRight: SPACING.space_6,
    marginTop: SPACING.space_15,
  },
  input: {
    flex: 1,
    fontSize: FONTSIZE.size_7,
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_8,
  },
  resendCodeText: {
    textDecorationLine: 'underline',
    color: '#A5A0AB',
    fontSize: FONTSIZE.size_7,
    marginTop: SPACING.space_4,
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
});

export default VerificationCode;
