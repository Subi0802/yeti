// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Animated,
//   SafeAreaView,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import StyleSheet from 'react-native-media-query';
// import FontFamily from '../Common/types/fonts';
// import images from '../Common/allImages';

// const NumberInput = () => {
//   const {styles} = getStyles();

//   return (
//     <View style={styles.inputContainer}>
//       <TextInput style={styles.input} keyboardType="numeric" />
//     </View>
//   );
// };

// const ProgressBar = ({progress}) => {
//   const [barWidth] = useState(new Animated.Value(0));
//   const {styles} = getStyles();

//   useEffect(() => {
//     Animated.timing(barWidth, {
//       toValue: progress,
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   }, [barWidth, progress]);

//   return (
//     <View style={styles.barContainer}>
//       <Animated.View
//         style={[
//           styles.bar,
//           {
//             width: barWidth.interpolate({
//               inputRange: [0, 100],
//               outputRange: ['0%', '100%'],
//             }),
//           },
//         ]}
//       />
//     </View>
//   );
// };
// const Screen1 = () => {
//   const navigation = useNavigation();
//   const {styles} = getStyles();

//   const handleContinuePress = () => {
//     navigation.navigate('Screen2');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.progressBarContainer}>
//         <Image source={images.Union} style={styles.UnionImage} />
//         <ProgressBar progress={20} />
//         <ProgressBar progress={0} />
//         <ProgressBar progress={0} />
//       </View>
//       <Text style={styles.text}>
//         Enter your year of birth to verify you're an adult
//       </Text>
//       <Text style={styles.validationText}>
//         We don't store the information, we use this for validation purpose only
//       </Text>
//       {/* Four NumberInputs */}
//       <View style={styles.boxContainer}>
//         <NumberInput />
//         <NumberInput />
//         <NumberInput />
//         <NumberInput />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const getStyles = () => {
//   const {create, media} = StyleSheet;

//   return create({
//     container: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingTop: '5%',
//       paddingBottom: '10%',
//       marginLeft: 10,
//     },
//     progressBarContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginRight: '5%',
//     },
//     barContainer: {
//       width: '22%',
//       height: 25,
//       backgroundColor: '#ddd',
//       borderRadius: 50,
//       marginRight: 30,
//       overflow: 'hidden',
//       '@media (max-width: 600px)': {
//         width: '30%',
//       },
//     },
//     bar: {
//       height: '100%',
//       backgroundColor: '#8A2BE2',
//     },
//     text: {
//       fontSize: 20,
//       fontFamily: FontFamily.MochiyPopOne_regular,
//       textAlign: 'center',
//       marginTop: 20,
//       color: '#9747FF',
//       '@media (max-width: 600px)': {
//         fontSize: 18,
//       },
//     },
//     validationText: {
//       fontSize: 16,
//       fontFamily: FontFamily.BalsamiqSans_Regular,
//       textAlign: 'center',
//       color: '#A5A0AB',
//       marginBottom: 20,
//       '@media (max-width: 600px)': {
//         fontSize: 18,
//       },
//     },
//     boxContainer: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       width: '80%',
//       marginBottom: 30,
//       '@media (max-width: 600px)': {
//         width: '80%',
//       },
//     },
//     inputContainer: {
//       width: '10%',
//       height: '45%',
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 10,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginRight: '2.5%',
//       '@media (max-width: 600px)': {
//         width: '15%',
//       },
//     },
//     input: {
//       width: '100%',
//       height: '100%',
//       textAlign: 'center',
//     },
//     button: {
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       backgroundColor: '#9747FF',
//       borderRadius: 20,
//       width: '40%',
//       shadowColor: '#9747FF',
//       shadowOffset: {width: -2, height: 4},
//       shadowOpacity: 0.2,
//       shadowRadius: 50,
//       elevation: 4, // Added for Android
//       '@media (max-width: 600px)': {
//         top: 5, // Adjust for smaller screens
//       },
//     },

//     buttonText: {
//       color: '#fff',
//       fontSize: 20,
//       fontFamily: FontFamily.MochiyPopOne_regular,
//       textAlign: 'center',
//     },
//     UnionImage: {
//       width: '13.25%',
//       height: 48,
//       resizeMode: 'contain',
//       alignSelf: 'flex-start',
//       '@media (max-width: 600px)': {
//         width: '20%',
//       },
//     },
//   });
// };

// export default Screen1;
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';

const NumberInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} keyboardType="numeric" />
    </View>
  );
};

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

const Screen1 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Union} style={styles.UnionImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={20} />
          <ProgressBar progress={0} />
          <ProgressBar progress={0} />
        </View>
      </View>
      <Text style={styles.text}>
        Enter your year of birth to verify you're an adult
      </Text>
      <Text style={styles.validationText}>
        We don't store the information, we use this for validation purpose only
      </Text>
      <View style={styles.boxContainer}>
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SPACING.space_6,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: PADDING.padding_2,
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
    marginHorizontal: '.5%',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
    marginTop: PADDING.padding_8,
    color: '#9747FF',
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
    width: '60%',
    margintop: '10%',
  },
  inputContainer: {
    width: '15%',
    height: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: BORDERRADIUS.radius_4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2%',
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  button: {
    paddingVertical: '1%',
    paddingHorizontal: '1%',
    backgroundColor: '#9747FF',
    borderRadius: BORDERRADIUS.radius_8,
    width: '35%',
    marginTop: '-2%',
  },

  buttonText: {
    color: '#fff',
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
  },
  UnionImage: {
    width: '13.25%',
    height: 40,
    resizeMode: 'contain',
  },
});

export default Screen1;
