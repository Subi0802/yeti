import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput, // Importing TextInput
} from 'react-native';
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

const Screen11 = () => {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState(''); // State to hold input text

  const handleContinuePress = () => {
    navigation.navigate('Screen12');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={40} />
      </View>
      <Text style={styles.text}>
        Personalizing your child’s learning experience...
      </Text>

      <Text style={styles.text1}>My child has special accommodations...</Text>
      <Text style={styles.text2}>
        Help us craft a smooth and inclusive experience for your child....
      </Text>

      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity onPress={handleContinuePress}>
        <Image source={images.Countinue} style={styles.CountinueImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  backImage: {
    width: 53,
    height: 48,
    resizeMode: 'contain',
    alignSelf: 'flex-start', // Align the image to the left side
    marginLeft: 10, // Adjust margin to create space between the image and the left edge,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  barContainer: {
    width: 190,
    height: 25,
    backgroundColor: '#ddd',
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: 80,
  },
  text1: {
    fontSize: 20,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: 80,
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
    marginLeft: 80,
  },
  input: {
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  CountinueImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Screen11;
