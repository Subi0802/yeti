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

const Screen16 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen17');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={50} />
      </View>
      <Text style={styles.text}>Oh, and one last thing...</Text>
      <Text style={styles.text1}>How did you hear about us?</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton1}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>Friends or family</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton2}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>Online advertisements</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton3}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>At my kid’s school</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton4}
          onPress={() => console.log('button 4 pressed')}>
          <Text style={styles.roleButtonText}>
            {' '}
            I’ve used this app before on another device
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton5}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>App Store or Play Store</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton6}
          onPress={() => console.log('button 6 pressed')}>
          <Text style={styles.roleButtonText}>Other</Text>
        </TouchableOpacity>
      </View>

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
  roleButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust spacing between buttons
    marginTop: 10, // Adjust spacing between rows
    marginLeft: 30, // Adjust left margin
    marginRight: 500, // Adjust right margin
  },
  roleButton1: {
    borderRadius: 10,
    width: 150,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 40,
  },
  roleButton2: {
    borderRadius: 10,
    width: 250,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 10,
  },
  roleButton3: {
    borderRadius: 10,
    width: 150,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 40,
  },
  roleButton4: {
    borderRadius: 10,
    width: 350,
    height: 30,
    borderWidth: 2,
    marginLeft: 10,
    borderColor: '#14AE5C',
  },
  roleButton5: {
    borderRadius: 10,
    width: 200,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 40,
  },
  roleButton6: {
    borderRadius: 10,
    width: 150,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 30,
  },

  roleButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },

  CountinueImage: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Screen16;
