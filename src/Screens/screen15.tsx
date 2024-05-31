// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Animated,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import FontFamily from '../Common/fonts';
// import images from '../Common/allImages';
// import {useNavigation} from '@react-navigation/native';

// const ProgressBar = ({progress}) => {
//   const [barWidth] = useState(new Animated.Value(10));

//   Animated.timing(barWidth, {
//     toValue: progress,
//     duration: 1000,
//     useNativeDriver: false,
//   }).start();

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

// const TimeBox = ({time, onChange}) => {
//   const hours = Math.floor(time / 60);
//   const minutes = time % 60;

//   const renderHours = () => {
//     let hoursArray = [];
//     for (let i = 0; i < 24; i++) {
//       hoursArray.push(
//         <TouchableOpacity key={i} onPress={() => onChange(i * 60)}>
//           <Text style={styles.timeText}>{i}</Text>
//         </TouchableOpacity>,
//       );
//     }
//     return hoursArray;
//   };

//   const renderMinutes = () => {
//     let minutesArray = [];
//     for (let i = 0; i < 60; i++) {
//       minutesArray.push(
//         <TouchableOpacity key={i} onPress={() => onChange(hours * 60 + i)}>
//           <Text style={styles.timeText}>{i}</Text>
//         </TouchableOpacity>,
//       );
//     }
//     return minutesArray;
//   };

//   return (
//     <View style={styles.timeBoxContainer}>
//       <Text style={styles.labelText}>HOURS</Text>
//       <View style={styles.timeBox}>
//         <ScrollView>{renderHours()}</ScrollView>
//       </View>
//       <Text style={styles.colon}>:</Text>
//       <Text style={styles.labelText}>MINUS</Text>
//       <View style={styles.timeBox}>
//         <ScrollView>{renderMinutes()}</ScrollView>
//       </View>
//     </View>
//   );
// };

// const Screen15 = () => {
//   const navigation = useNavigation();
//   const [time, setTime] = useState(0);

//   const handleTimeChange = selectedTime => {
//     setTime(selectedTime);
//   };

//   const handleContinuePress = () => {
//     navigation.navigate('Screen16');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.progressBarContainer}>
//         <Image source={images.Back} style={styles.backImage} />
//         <ProgressBar progress={100} />
//         <ProgressBar progress={100} />
//         <ProgressBar progress={40} />
//       </View>
//       <Text style={styles.text}>Set a screen time limit for your child</Text>

//       <View style={styles.timeBoxWrapper}>
//         <TimeBox time={time} onChange={handleTimeChange} />
//       </View>

//       <TouchableOpacity onPress={handleContinuePress}>
//         <Image source={images.Countinue} style={styles.CountinueImage} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 10,
//   },
//   backImage: {
//     width: 53,
//     height: 48,
//     resizeMode: 'contain',
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//   },
//   progressBarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   barContainer: {
//     width: 190,
//     height: 25,
//     backgroundColor: '#ddd',
//     borderRadius: 50,
//     overflow: 'hidden',
//     marginHorizontal: 10,
//   },
//   bar: {
//     height: '100%',
//     backgroundColor: '#8A2BE2',
//   },
//   text: {
//     fontSize: 20,
//     fontFamily: FontFamily.MochiyPopOne_regular,
//     color: '#5600C6',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   CountinueImage: {
//     width: 300,
//     height: 50,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   timeBoxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timeBox: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#D9D9D9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#D9D9D9',
//   },
//   timeText: {
//     fontSize: 20,
//     color: '#222222',
//     fontFamily: FontFamily.BalsamiqSans_Regular,
//   },
//   timeBoxWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   colon: {
//     fontSize: 20,
//     color: '#222222',
//     fontFamily: FontFamily.BalsamiqSans_Regular,
//     alignSelf: 'center',
//     marginHorizontal: 10,
//   },
//   labelText: {
//     fontSize: 16,
//     color: '#D9D9D9',
//     fontFamily: FontFamily.BalsamiqSans_Regular,
//     marginBottom: 5,
//   },
// });
// export default Screen15;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {useNavigation} from '@react-navigation/native';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

const ProgressBar = ({progress}) => {
  const [barWidth] = useState(new Animated.Value(10));

  Animated.timing(barWidth, {
    toValue: progress,
    duration: 1000,
    useNativeDriver: false,
  }).start();

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

const TimeBox = ({time, onChange}) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const renderHours = () => {
    let hoursArray = [];
    for (let i = 0; i < 24; i++) {
      hoursArray.push(
        <TouchableOpacity key={i} onPress={() => onChange(i * 60)}>
          <Text style={styles.timeText}>{i}</Text>
        </TouchableOpacity>,
      );
    }
    return hoursArray;
  };

  const renderMinutes = () => {
    let minutesArray = [];
    for (let i = 0; i < 60; i++) {
      minutesArray.push(
        <TouchableOpacity key={i} onPress={() => onChange(hours * 60 + i)}>
          <Text style={styles.timeText}>{i}</Text>
        </TouchableOpacity>,
      );
    }
    return minutesArray;
  };

  return (
    <View style={styles.timeBoxContainer}>
      <Text style={styles.labelText}>HOURS</Text>
      <View style={styles.timeBox}>
        <ScrollView>{renderHours()}</ScrollView>
      </View>
      <Text style={styles.colon}>:</Text>
      <Text style={styles.labelText}>MINUS</Text>
      <View style={styles.timeBox}>
        <ScrollView>{renderMinutes()}</ScrollView>
      </View>
    </View>
  );
};

const Screen15 = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState(0);

  const handleTimeChange = selectedTime => {
    setTime(selectedTime);
  };

  const handleContinuePress = () => {
    navigation.navigate('Screen16');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={40} />
      </View>
      <Text style={styles.text}>Set a screen time limit for your child</Text>

      <View style={styles.timeBoxWrapper}>
        <TimeBox time={time} onChange={handleTimeChange} />
      </View>

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
    marginTop: SPACING.space_6,
  },
  backImage: {
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 10,
    resizeMode: 'contain',
    alignSelf: 'center', // Align the image to the left side left edge,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barContainer: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 25,
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
    fontSize: FONTSIZE.size_10,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: SPACING.space_10,
    paddingTop: PADDING.padding_4,
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 8,
    alignContent: 'center',
    resizeMode: 'contain',
    marginTop: SPACING.space_24,
    paddingBottom: PADDING.padding_17,
  },
  timeBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBox: {
    width: SCREEN_WIDTH / 14,
    height: SCREEN_HEIGHT / 9,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: PADDING.padding_4,
    // margin: 10,
    borderRadius: BORDERRADIUS.radius_4,
    // borderWidth: 4,
    // borderColor: '#D9D9D9',
  },
  timeText: {
    fontSize: FONTSIZE.size_14,
    color: '#222222',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
  timeBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.space_16,
  },
  colon: {
    fontSize: FONTSIZE.size_12,
    color: '#222222',
    fontFamily: FontFamily.BalsamiqSans_Regular,
    // alignSelf: 'center',
    marginHorizontal: SPACING.space_8,
  },
  labelText: {
    fontSize: FONTSIZE.size_10,
    color: '#D9D9D9',
    fontFamily: FontFamily.BalsamiqSans_Regular,
    // marginBottom: 20,
  },
});
export default Screen15;
