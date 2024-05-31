import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, SPACING} from '../Common/theme';

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

const SigninBack = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={100} />
          <ProgressBar progress={0} />
          <ProgressBar progress={0} />
        </View>
      </View>
      <Text style={styles.text}>Sign back in!</Text>
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

      <TouchableOpacity>
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
          onPress={() => console.log(' goggle pressed')}>
          <Image source={images.Google} style={styles.pathimage} />
        </TouchableOpacity>
      </View>
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
    width: SCREEN_WIDTH / 8,
    height: SCREEN_HEIGHT / 10,
    resizeMode: 'contain',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barContainer: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 20,
    backgroundColor: '#ddd',
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
    marginHorizontal: '1%',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    color: '#5600C6',
  },
  input: {
    height: SCREEN_HEIGHT / 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_10,
    paddingHorizontal: '5%',
    marginTop: '2%',
    width: SCREEN_WIDTH / 3,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    fontSize: FONTSIZE.size_4,
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
    height: SCREEN_HEIGHT / 10,
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

export default SigninBack;
