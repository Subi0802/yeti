import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StyleSheet from 'react-native-media-query';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';

const ProgressBar = ({progress}) => {
  const [barWidth] = useState(new Animated.Value(0));
  const {styles} = getStyles();

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

const Screen3 = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const navigation = useNavigation();
  const {styles} = getStyles();

  const handleContinuePress = () => {
    navigation.navigate('Screen4');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={0} />
        <ProgressBar progress={0} />
      </View>
      <Text style={styles.text}>Let’s create your account!</Text>
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
        By continuing, you agree to the <Text style={styles.terms}>Terms</Text>{' '}
        and <Text style={styles.privacyPolicy}>Privacy Policy</Text>.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>or sign up using</Text>
      <View style={styles.pathContainer}>
        <TouchableOpacity
          style={styles.pathButton}
          onPress={() => console.log('mac pressed')}>
          <Image source={images.Mac} style={styles.pathImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pathButton}
          onPress={() => console.log('google pressed')}>
          <Image source={images.Google} style={styles.pathImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const getStyles = () => {
  const {create} = StyleSheet;

  return create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: '2%',
      paddingHorizontal: '5%',
    },
    backImage: {
      width: '10.25%',
      height: 30,
      resizeMode: 'contain',
      alignSelf: 'flex-start',
      '@media (max-width: 600px)': {
        width: '20%',
      },
    },
    progressBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1%',
    },
    barContainer: {
      width: '22%',
      height: 25,
      backgroundColor: '#ddd',
      borderRadius: 50,
      marginHorizontal: 5,
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
      fontSize: 24,
      fontFamily: FontFamily.MochiyPopOne_regular,
      textAlign: 'center',
      color: '#9747FF',
      marginVertical: '1%',
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    input: {
      height: 35,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 10,
      marginBottom: 10,
      width: '35%', // Default width for larger screens
      fontFamily: FontFamily.BalsamiqSans_Regular,
      '@media (max-width: 600px)': {
        width: '30%', // Adjusted width for smaller screens
      },
    },
    terms: {
      color: '#9747FF',
    },
    privacyPolicy: {
      color: '#9747FF',
    },
    byText: {
      fontSize: 12,
      fontFamily: FontFamily.BalsamiqSans_Regular,
      color: '#A5A0AB',
      textAlign: 'center',
      marginHorizontal: '10%',
      marginVertical: '1%',
    },
    signupText: {
      fontSize: 12,
      fontFamily: FontFamily.BalsamiqSans_Regular,
      color: '#A5A0AB',
      marginVertical: '0.5%',
    },
    pathContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '-.5%',
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
      '@media (max-width: 600px)': {
        paddingVertical: '1%', // Adjusted padding for smaller screens
        paddingHorizontal: '1%',
      },
    },
    pathImage: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      '@media (max-width: 600px)': {
        width: 18, // Adjusted size for smaller screens
        height: 18,
      },
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#9747FF',
      borderRadius: 20,
      width: '35%',
      marginTop: '1%',
      '@media (max-width: 600px)': {
        width: '30%', // Adjust for smaller screens
      },
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontFamily: FontFamily.MochiyPopOne_regular,
      textAlign: 'center',
    },
  });
};

export default Screen3;
