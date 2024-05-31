// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Animated,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import FontFamily from '../Common/fonts';
// import images from '../Common/allImages';
// import {useNavigation} from '@react-navigation/native';

// const ProgressBar = ({progress}) => {
//   const [barWidth] = useState(new Animated.Value(0));

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

// const Screen17 = () => {
//   const navigation = useNavigation();

//   const handleContinuePress = () => {
//     navigation.navigate('Screen18');
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.progressBarContainer}>
//         <Image source={images.Back} style={styles.backImage} />
//         <ProgressBar progress={100} />
//         <ProgressBar progress={100} />
//         <ProgressBar progress={60} />
//       </View>
//       <Text style={styles.text}>Your child’s profile has been set up now!</Text>
//       <View style={styles.ellipseContainer}>
//         <TouchableOpacity onPress={() => console.log('')}>
//           <Image source={images.Ellipse} style={styles.ellipseimage} />
//           <Image source={images.Pic} style={styles.picImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => console.log('')}>
//           <Image source={images.Ellipse} style={styles.ellipseimage} />
//           <Image source={images.Plus} style={styles.picImage} />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.lily}>Lily</Text>
//       <TouchableOpacity onPress={handleContinuePress}>
//         <Image source={images.Countinue} style={styles.CountinueImage} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 10,
//   },
//   backImage: {
//     width: 53,
//     height: 48,
//     resizeMode: 'contain',
//     alignSelf: 'flex-start', // Align the image to the left side
//     marginLeft: 10, // Adjust margin to create space between the image and the left edge,
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
//     fontSize: 18,
//     fontFamily: FontFamily.MochiyPopOne_regular,
//     color: '#5600C6',
//     //marginLeft: 80,
//     alignSelf: 'center',
//   },
//   ellipseimage: {
//     width: 180,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   ellipseContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//     position: 'relative',
//   },
//   picImage: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{translateX: -50}, {translateY: -50}],
//     width: 100,
//     height: 100,
//   },
//   lily: {
//     fontSize: 16,
//     fontFamily: FontFamily.MochiyPopOne_regular,
//     color: '#000000',
//     marginLeft: 300,
//     marginTop: 10,
//   },

//   CountinueImage: {
//     width: 300,
//     height: 50,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginTop: 10,
//   },
// });

// export default Screen17;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontFamily from '../Common/fonts';
import images from '../Common/allImages';
import {useNavigation} from '@react-navigation/native';
import {BORDERRADIUS, FONTSIZE, PADDING, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

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

const Screen17 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen18');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={60} />
      </View>
      <Text style={styles.text}>Your child’s profile has been set up now!</Text>
      <View style={styles.ellipseContainer}>
        <TouchableOpacity onPress={() => console.log('')}>
          <Image source={images.Ellipse} style={styles.ellipseimage} />
          <Image source={images.Pic} style={styles.picImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('')}>
          <Image source={images.Ellipse} style={styles.ellipseimage} />
          <Image source={images.Plus} style={styles.picImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.lily}>Lily</Text>
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
    width: SCREEN_WIDTH / 8,
    height: SCREEN_HEIGHT / 9,
    resizeMode: 'contain',
    alignSelf: 'flex-start', // Align the image to the left side
    // marginLeft: 5, // Adjust margin to create space between the image and the left edge,
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
    fontSize: FONTSIZE.size_10,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: SPACING.space_10,
    paddingTop: PADDING.padding_4,
    // textAlign: 'center',
  },
  ellipseimage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 4,
    resizeMode: 'contain',
  },
  ellipseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.space_10,
    position: 'relative',
  },
  picImage: {
    position: 'absolute',
    top: '10%',
    left: '35%',
    // transform: [{translateX: -60}, {translateY: -60}],
    width: SCREEN_WIDTH / 10,
    height: SCREEN_HEIGHT / 5,
  },
  lily: {
    fontSize: FONTSIZE.size_10,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#000000',
    paddingRight: '32%',
    // marginLeft: 300,
    // marginTop: 10,
    padding: PADDING.padding_7,
  },

  CountinueImage: {
    width: SCREEN_WIDTH / 1,
    height: SCREEN_HEIGHT / 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_10,
    paddingBottom: PADDING.padding_17,
  },
});

export default Screen17;
