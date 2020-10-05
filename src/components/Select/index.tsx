// Dependencies
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// Components
import { styles, LabelText } from './styles';
import { View, StyleProp, TextStyle, Platform } from 'react-native';

interface SelectProps extends DropDownPicker {
  label: string;
  labelStyles?: StyleProp<TextStyle>;
}

const Select: React.FC<SelectProps> = ({ label, labelStyles, ...rest }) => {
  return (
    <View style={Platform.OS !== 'android' && { zIndex: 10 }}>
      <LabelText style={[styles.label, labelStyles]}>{label}</LabelText>
      <DropDownPicker
        style={styles.input}
        containerStyle={{ height: 74 }}
        dropDownStyle={styles.dropDownStyle}
        // placeholderStyle={styles.placeholderStyle}
        labelStyle={styles.optionLabel}
        itemStyle={styles.option}
        activeItemStyle={styles.activeOption}
        {...rest}
      />
    </View>
  );
};

export default Select;
