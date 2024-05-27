// import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
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

// const Screen2 = () => {
//   const navigation = useNavigation();

//   const handleContinuePress = () => {
//     navigation.navigate('Screen3');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.progressBarContainer}>
//         <Image source={images.Back} style={styles.backImage} />
//         <ProgressBar progress={60} />
//         <ProgressBar progress={0} />
//         <ProgressBar progress={0} />
//       </View>
//       <Text style={styles.text}>What is your role?</Text>
//       <View style={styles.roleContainer}>
//         <TouchableOpacity
//           style={styles.roleButton}
//           onPress={() => console.log("I'm a Parent pressed")}>
//           <Image source={images.Father} style={styles.image} />
//           <Text style={styles.roleButtonText}>I'm a Parent</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.roleButton, {borderColor: '#D9D9D9'}]}
//           onPress={() => console.log("I'm a Teacher pressed")}>
//           <Image source={images.Teacher} style={styles.image} />
//           <Text style={styles.roleButtonText}>I'm a Teacher</Text>
//         </TouchableOpacity>
//         {/* Add more role buttons as needed */}
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const getStyles = () => {
//   const {create, media} = StyleSheet;

//   return create({
//     container: {
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingTop: '2%',
//     },
//     backImage: {
//       width: '13.25%',
//       height: 48,
//       resizeMode: 'contain',
//       alignSelf: 'flex-start',
//       '@media (max-width: 600px)': {
//         width: '20%',
//       },
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
//       fontSize: 22,
//       fontFamily: FontFamily.MochiyPopOne_regular,
//       marginTop: '5%',
//       marginRight: '50%',
//       color: '#222222',
//       '@media (max-width: 600px)': {
//         fontSize: 16,
//       },
//     },
//     roleContainer: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       marginTop: '5%',
//       borderwidth: 2,
//     },
//     roleButton: {
//       backgroundColor: '#FFFFFF',
//       borderRadius: 30,
//       marginHorizontal: 5,
//       width: 310,
//       height: 80,
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderWidth: 2,
//       borderColor: '#9747FF',
//       '@media (max-width: 600px)': {
//         width: 200,
//         height: 70,
//       },
//     },
//     roleButtonText: {
//       fontSize: 24,
//       color: '#000000',
//       fontFamily: FontFamily.BalsamiqSans_Regular,
//       '@media (max-width: 600px)': {
//         fontSize: 18,
//       },
//     },
//     image: {
//       width: 150,
//       height: 70,
//       resizeMode: 'contain',
//       '@media (max-width: 600px)': {
//         width: 100,
//         height: 50,
//       },
//     },
//     button: {
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       backgroundColor: '#9747FF',
//       borderRadius: 20,
//       width: '35%',
//       marginTop: '6%',
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
//   });
// };

// export default Screen2;
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

const Screen2 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen3');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={60} />
          <ProgressBar progress={0} />
          <ProgressBar progress={0} />
        </View>
      </View>

      <Text style={styles.text}>What is your role?</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log("I'm a Parent pressed")}>
          <Image source={images.Father} style={styles.image} />
          <Text style={styles.roleButtonText}>I'm a Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {borderColor: '#D9D9D9'}]}
          onPress={() => console.log("I'm a Teacher pressed")}>
          <Image source={images.Teacher} style={styles.image} />
          <Text style={styles.roleButtonText}>I'm a Teacher</Text>
        </TouchableOpacity>
        {/* Add more role buttons as needed */}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: SPACING.space_6,
    alignItems: 'center',
  },
  backImage: {
    width: '13.25%',
    height: 40,
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
    marginHorizontal: '.5%',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    marginTop: '2%',
    color: 'black',
    marginRight: '50%',
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    borderwidth: 2,
  },
  roleButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: BORDERRADIUS.radius_10,
    marginHorizontal: '1%',
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#9747FF',
  },
  roleButtonText: {
    fontSize: FONTSIZE.size_8,
    color: '#000000',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },

  image: {
    width: '20%',
    height: '90%',
    resizeMode: 'contain',
  },
  button: {
    paddingVertical: '1%',
    paddingHorizontal: '1%',
    backgroundColor: '#9747FF',
    borderRadius: BORDERRADIUS.radius_8,
    width: '35%',
    marginTop: '10%',
  },

  buttonText: {
    color: '#fff',
    fontSize: FONTSIZE.size_8,
    fontFamily: FontFamily.MochiyPopOne_regular,
    textAlign: 'center',
  },
});

export default Screen2;
