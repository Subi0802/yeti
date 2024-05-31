import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import {BORDERRADIUS, FONTSIZE, PADDING} from '../../Common/theme';
import Demo from './Pages/demo';
import Swiper2 from './Pages/swiper2';
import Swiper3 from './Pages/swiper3';
import Swiper4 from './Pages/swiper4';
import Swiper5 from './Pages/swiper5';
import FontFamily from '../../Common/fonts';

const SCREENS = [
  {id: 1, component: <Demo />},
  {id: 2, component: <Swiper2 />},
  {id: 3, component: <Swiper3 />},
  {id: 4, component: <Swiper4 />},
  {id: 5, component: <Swiper5 />},
];

function Screen() {
  const navigation = useNavigation();
  const handleCreateAccount = () => {
    navigation.navigate('Role');
  };
  const handleSignIn = () => {
    navigation.navigate('SigninBack');
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Swiper
          loop={false}
          index={currentIndex}
          showsButtons={false}
          showsPagination={false}
          onIndexChanged={handleIndexChanged}>
          {SCREENS.map(screen => (
            <View key={screen.id} style={styles.slide}>
              {screen.component}
            </View>
          ))}
        </Swiper>
        <View style={styles.pagination}>
          {SCREENS.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                {
                  width: index === currentIndex ? '20%' : 10,
                },
              ]}
              onPress={() => setCurrentIndex(index)}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'Transprant',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  paginationDot: {
    backgroundColor: '#ccc',
    width: '5%',
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#9747FF',
    padding: PADDING.padding_4,
    borderRadius: BORDERRADIUS.radius_8,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.MochiyPopOne_regular,
  },
});

export default Screen;
