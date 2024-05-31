import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
  ScrollView,
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

const CreateAccount = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('VerificationCode');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={images.Back} style={styles.backImage} />
          <View style={styles.progressBarContainer}>
            <ProgressBar progress={60} label="Account creation" />
            <ProgressBar progress={0} label="Profile setup" />
            <ProgressBar progress={0} label="Your preferences" />
          </View>
        </View>

        <Text style={styles.text}>Let’s create your account!</Text>
        {/* Text Input Boxes */}
        <TextInput
          style={styles.input}
          value={input1}
          onChangeText={setInput1}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={input2}
          onChangeText={setInput2}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={input3}
          onChangeText={setInput3}
          placeholder="Password"
        />

        <Text style={styles.byText}>
          I agree to this <Text style={styles.terms}>Terms</Text> and{' '}
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>.
        </Text>
        <TouchableOpacity onPress={handleContinuePress}>
          <Image source={images.Countinue} style={styles.CountinueImage} />
        </TouchableOpacity>
        <Text style={styles.signupText}>or sign up using</Text>
        <View style={styles.pathContainer}>
          <TouchableOpacity
            style={styles.pathButton}
            onPress={() => console.log('mac pressed')}>
            <Image source={images.Mac} style={styles.pathimage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pathButton}
            onPress={() => console.log('goggle pressed')}>
            <Image source={images.Google} style={styles.pathimage} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    color: '#5600C6',
    marginTop: SPACING.space_6,
  },
  input: {
    height: SCREEN_HEIGHT / 12,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_10,
    paddingHorizontal: '2%',
    marginBottom: '1%',
    width: SCREEN_WIDTH / 3,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    fontSize: FONTSIZE.size_3,
    marginTop: SPACING.space_2,
  },
  terms: {
    color: '#9747FF',
  },
  privacyPolicy: {
    color: '#9747FF',
  },
  byText: {
    fontSize: FONTSIZE.size_4,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
  },
  signupText: {
    fontSize: FONTSIZE.size_4,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '1%',
  },
  pathContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%',
    borderwidth: 2,
  },
  pathButton: {
    borderColor: '#D9D9D9',
    borderRadius: BORDERRADIUS.radius_4,
    marginHorizontal: '1%',
    width: SCREEN_WIDTH / 22,
    height: SCREEN_HEIGHT / 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
  },
  pathimage: {
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 20,
    resizeMode: 'contain',
  },
});

export default CreateAccount;
