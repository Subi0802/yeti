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

const Screen12 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen13');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={100} />
        <ProgressBar progress={20} />
      </View>
      <Text style={styles.text}>
        Personalizing your child’s learning experience...
      </Text>

      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={[styles.roleButton]}
          onPress={() => console.log('doodling pressed')}>
          <Text style={styles.roleButtonText}>doodling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {width: 130}]}
          onPress={() => console.log('sketching pressed')}>
          <Text style={styles.roleButtonText}>sketching</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {width: 150}]}
          onPress={() => console.log('stories pressed')}>
          <Text style={styles.roleButtonText}>being read stories </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, {width: 130}]}
          onPress={() => console.log('playing pressed')}>
          <Text style={styles.roleButtonText}>playing outside </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={[styles.roleButton, {width: 130}]}
          onPress={() => console.log('exploring pressed')}>
          <Text style={styles.roleButtonText}>exploring nature</Text>
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
  roleButtonRow: {
    flexDirection: 'row',
    marginLeft: 80, // Adjust left margin
    marginTop: 20,
  },
  roleButton: {
    borderRadius: 10,
    width: 90,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: 5,
  },
  roleButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
  },
  CountinueImage: {
    width: 350,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 80,
  },
});

export default Screen12;
