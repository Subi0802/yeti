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

const ProgressBar = ({progress}) => {
  const [barWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [barWidth, progress]);

  return (
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
  );
};

const Screen5 = () => {
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
    navigation.navigate('Screen6');
  };

  const handleChangeText = (text, index) => {
    const newVerificationCodes = [...verificationCodes];
    newVerificationCodes[index] = text;
    setVerificationCodes(newVerificationCodes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={0} />
        <ProgressBar progress={0} />
      </View>
      <Text style={styles.text}>Check your email for a verification code</Text>
      <View style={styles.inputRowContainer}>
        {verificationCodes.map((code, index) => (
          <View style={styles.inputContainer} key={index}>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChangeText(text, index)}
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
    paddingTop: '2%', // Adjust as needed
  },
  backImage: {
    width: '10.25%',
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
  barContainer: {
    width: '22%',
    height: 25,
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginRight: 30,
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      width: '30%',
    },
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    marginTop: '3%',
    color: '#5600C6',
  },
  inputRowContainer: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  inputContainer: {
    width: '5%',
    aspectRatio: 1, // Makes the container square
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '3%',
    marginRight: '2%',
    marginTop: '5%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  CountinueImage: {
    aspectRatio: 200 / 40, // Adjust based on the original image dimensions
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '2%',
  },
  resendCodeText: {
    textDecorationLine: 'underline',
    color: '#A5A0AB',
    fontSize: 20,
    marginTop: '2%',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
});

export default Screen5;
