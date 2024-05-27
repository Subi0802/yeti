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

const Screen4 = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen5');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={0} />
        <ProgressBar progress={0} />
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
    paddingTop: '2%', // Adjust this value as needed
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
    marginTop: '2%',
    color: '#9747FF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: '5%',
    marginTop: '2%',
    width: '30%',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },

  signupText: {
    fontSize: 12,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
  },
  CountinueImage: {
    aspectRatio: 200 / 40, // Adjust based on the original image dimensions
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '2%',
  },
  pathContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
    width: '20%',
  },
  pathButton: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderColor: '#D9D9D9',
    borderRadius: 10,
    marginHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
  },
  pathImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Screen4;
