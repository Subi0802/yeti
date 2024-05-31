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
import {BORDERRADIUS, FONTSIZE, SPACING} from '../Common/theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Common/dimensions';

const ProgressBar = ({progress, label}) => {
  const [barWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [barWidth, progress]);

  return (
    <View style={styles.progressBarWrapper}>
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
      <Text style={styles.progressBarLabel}>{label}</Text>
    </View>
  );
};

const Goals = () => {
  const navigation = useNavigation();

  const handleContinuePress = () => {
    navigation.navigate('ChildName');
  };

  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });

  const toggleCheckbox = item => {
    setCheckedItems({...checkedItems, [item]: !checkedItems[item]});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={images.Back} style={styles.backImage} />
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={90} label="Account creation" />
          <ProgressBar progress={0} label="Profile setup" />
          <ProgressBar progress={0} label="Your preferences" />
        </View>
      </View>
      <Text style={styles.text}>Let’s hear about your goals</Text>
      <Text style={styles.text1}>I would like my child to...</Text>

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
              Improve their overall wellbeing
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
            <Text style={styles.roleButtonText}>Get more creative</Text>
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
            <Text style={styles.roleButtonText}>Develop their curiosity</Text>
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
            <Text style={styles.roleButtonText}>Know more about the world</Text>
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
            <Text style={styles.roleButtonText}>
              Develop healthy lifestyle habits
            </Text>
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
    paddingTop: SPACING.space_4,
    alignItems: 'center',
  },
  backImage: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_HEIGHT / 12,
    resizeMode: 'contain',
    marginTop: '-2%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SPACING.space_8, // Adjust padding as needed
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ensures progress bars take the remaining space
  },
  progressBarWrapper: {
    alignItems: 'center',
    marginHorizontal: SPACING.space_2,
  },
  barContainer: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 14,
    backgroundColor: '#ddd',
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#8A2BE2',
    borderRadius: BORDERRADIUS.radius_25,
  },
  progressBarLabel: {
    marginTop: SPACING.space_1,
    fontSize: FONTSIZE.size_5,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#A5A0AB',
  },
  text: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.MochiyPopOne_regular,
    color: '#5600C6',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_6,
  },
  text1: {
    fontSize: FONTSIZE.size_7,
    fontFamily: FontFamily.BalsamiqSans_Regular,
    color: '#222222',
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_4,
  },

  roleButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_6,
    marginRight: SPACING.space_8,
  },
  roleButton1: {
    borderRadius: BORDERRADIUS.radius_4,
    height: SCREEN_HEIGHT / 14,
    width: '32%',
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: SPACING.space_8,
  },
  roleButton2: {
    borderRadius: BORDERRADIUS.radius_4,
    height: SCREEN_HEIGHT / 14,
    width: SCREEN_WIDTH / 5,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: SPACING.space_20,
  },

  roleButton3: {
    borderRadius: BORDERRADIUS.radius_4,
    width: '25%',
    height: SCREEN_HEIGHT / 14,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginLeft: SPACING.space_8,
  },
  roleButton4: {
    borderRadius: BORDERRADIUS.radius_4,
    height: SCREEN_HEIGHT / 14,
    width: '30%',
    borderWidth: 2,
    borderColor: '#14AE5C',
    marginRight: SPACING.space_20,
  },
  roleButton5: {
    borderRadius: BORDERRADIUS.radius_4,
    width: '32%',
    height: SCREEN_HEIGHT / 14,
    borderWidth: 2,
    borderColor: '#D9D9D9',
  },
  roleButton6: {
    borderRadius: BORDERRADIUS.radius_4,
    width: '20%',
    height: SCREEN_HEIGHT / 14,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    marginRight: SPACING.space_18,
  },

  roleButtonText: {
    fontSize: FONTSIZE.size_5,
    color: '#000000',
    marginLeft: SPACING.space_1,
    textAlign: 'center',
    fontFamily: FontFamily.BalsamiqSans_Regular,
    marginTop: SPACING.space_1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    width: SCREEN_WIDTH / 22,
    alignItems: 'center',
    marginLeft: SPACING.space_2,
  },
  checkbox: {
    width: SCREEN_WIDTH / 60,
    height: SCREEN_WIDTH / 60,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginTop: SPACING.space_1,
  },
  checkboxChecked: {
    backgroundColor: '#14AE5C',
    borderColor: '#14AE5C',
  },
  checkmark: {
    fontSize: FONTSIZE.size_3,
    color: '#FFFFFF',
  },
  CountinueImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: SPACING.space_6,
  },
});

export default Goals;
