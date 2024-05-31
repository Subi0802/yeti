import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const referenceWidth: number = 320;
const scaleFactor: number = width / referenceWidth;

export const FONTSIZE = {
  size_1: 1 * scaleFactor,
  size_2: 2 * scaleFactor,
  size_3: 3 * scaleFactor,
  size_4: 4 * scaleFactor,
  size_5: 5 * scaleFactor,
  size_6: 6 * scaleFactor,
  size_7: 7 * scaleFactor,
  size_8: 8 * scaleFactor,
  size_10: 10 * scaleFactor,
  size_12: 12 * scaleFactor,
  size_14: 14 * scaleFactor,
  size_16: 16 * scaleFactor,
  size_18: 18 * scaleFactor,
  size_20: 20 * scaleFactor,
  size_24: 24 * scaleFactor,
  size_28: 28 * scaleFactor,
  size_30: 30 * scaleFactor,
};
export const SPACING = {
  space_1: 1 * scaleFactor,
  space_2: 2 * scaleFactor,
  space_4: 4 * scaleFactor,
  space_6: 6 * scaleFactor,
  space_8: 8 * scaleFactor,
  space_10: 10 * scaleFactor,
  space_12: 12 * scaleFactor,
  space_15: 15 * scaleFactor,
  space_16: 16 * scaleFactor,
  space_18: 18 * scaleFactor,
  space_20: 20 * scaleFactor,
  space_24: 24 * scaleFactor,
  space_28: 28 * scaleFactor,
  space_30: 30 * scaleFactor,
  space_32: 32 * scaleFactor,
  space_36: 36 * scaleFactor,
  space_50: 50 * scaleFactor,
  space_60: 60 * scaleFactor,
};

export const BORDERRADIUS = {
  radius_4: 4 * scaleFactor,
  radius_8: 8 * scaleFactor,
  radius_10: 10 * scaleFactor,
  radius_15: 15 * scaleFactor,
  radius_20: 20 * scaleFactor,
  radius_25: 25 * scaleFactor,
};

export const PADDING = {
  padding_2: 2 * scaleFactor,
  padding_4: 4 * scaleFactor,
  padding_8: 8 * scaleFactor,
  padding_10: 10 * scaleFactor,
  padding_15: 15 * scaleFactor,
  padding_17: 17 * scaleFactor,
  padding_20: 20 * scaleFactor,
  padding_25: 25 * scaleFactor,
};
