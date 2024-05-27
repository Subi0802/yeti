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

const Screen8 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen9');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={80} />
        <ProgressBar progress={0} />
      </View>
      <Text style={styles.text}>Let’s get to know your child better</Text>
      <Text style={styles.text1}>My child’s grade...</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>Pre-K</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>K</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>1st </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {borderColor: '#14AE5C'}]}
          onPress={() => console.log('button 4 pressed')}>
          <Text style={styles.roleButtonText}>2nd </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>3rd </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text1}>My child is this old...</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 1 pressed')}>
          <Text style={styles.roleButtonText}>4Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 2 pressed')}>
          <Text style={styles.roleButtonText}>5Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 3 pressed')}>
          <Text style={styles.roleButtonText}>6Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 4 pressed')}>
          <Text style={styles.roleButtonText}>7Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {borderColor: '#14AE5C'}]}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>8Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>9Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => console.log('button 5 pressed')}>
          <Text style={styles.roleButtonText}>10Y</Text>
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
    // alignItems: 'center',
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
    marginTop: 10,
  },
  roleButtonRow: {
    flexDirection: 'row',
    marginTop: 10, // Adjust spacing between rows
    marginLeft: 80, // Adjust left margin
  },
  roleButton: {
    borderRadius: 10,
    width: 80,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: 10,
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

export default Screen8;
