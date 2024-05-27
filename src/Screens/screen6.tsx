import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
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

const Screen6 = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('Screen7');
  };

  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
  });

  const toggleCheckbox = item => {
    setCheckedItems({...checkedItems, [item]: !checkedItems[item]});
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <ProgressBar progress={100} />
        <ProgressBar progress={30} />
        <ProgressBar progress={0} />
      </View>
      <Text style={styles.text}>Okay, now lets set goals!</Text>
      <Text style={styles.text1}>I would like my child to...</Text>
      <Text style={styles.text2}>Select all that apply</Text>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton1}
          onPress={() => toggleCheckbox('item1')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item1 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>
              Develop better social and emotional health
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton2}
          onPress={() => toggleCheckbox('item2')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item2 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>Develop their curiosity</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton3}
          onPress={() => toggleCheckbox('item3')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item3 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>Get more creative</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton4}
          onPress={() => toggleCheckbox('item4')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View
                style={[
                  styles.checkbox,
                  checkedItems.item4 && styles.checkboxChecked,
                ]}>
                {checkedItems.item4 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>
              Know more about the world around them
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.roleButtonRow}>
        <TouchableOpacity
          style={styles.roleButton5}
          onPress={() => toggleCheckbox('item5')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item5 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>Be more mindful</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton6}
          onPress={() => toggleCheckbox('item6')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item6 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>Develop healthy habits</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton7}
          onPress={() => toggleCheckbox('item7')}>
          <View style={styles.buttonContent}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                {checkedItems.item7 && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={styles.roleButtonText}>All of the above</Text>
          </View>
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
    justifyContent: 'flex-start',
    paddingTop: '2%',
  },
  backImage: {
    width: '10.25%',
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5%',
  },
  barContainer: {
    width: '22%',
    height: 25,
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginRight: 30,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: '10%',
    marginTop: '3%',
  },
  text1: {
    fontSize: 20,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: '10%',
    marginTop: '.5%',
  },
  text2: {
    fontSize: 12,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    marginLeft: '10%',
    marginTop: '.5%',
  },
  roleButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '8%',
  },
  roleButton1: {
    borderRadius: 10,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: '3%', // Adjust as needed based on the screen size
  },
  roleButton2: {
    borderRadius: 10,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    // marginLeft: '30%', // Adjust as needed based on the screen size
  },

  roleButton3: {
    borderRadius: 10,
    width: 200,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 30,
  },
  roleButton4: {
    borderRadius: 30,
    width: 350,
    height: 30,
    borderWidth: 2,
    //marginLeft: 10,
    borderColor: '#14AE5C',
  },
  roleButton5: {
    borderRadius: 10,
    width: 200,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 30,
  },
  roleButton6: {
    borderRadius: 10,
    width: 250,
    height: 30,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: 30,
  },
  roleButton7: {
    borderRadius: 10,
    width: 200,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    width: 30,
    alignItems: 'center',
    marginLeft: 10,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#14AE5C',
    borderColor: '#14AE5C',
  },
  checkmark: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  CountinueImage: {
    aspectRatio: 200 / 40, // Adjust based on the original image dimensions
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default Screen6;
