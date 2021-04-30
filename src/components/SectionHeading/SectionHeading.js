import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Context} from '../../util/GlobalContext';

export const style = StyleSheet.create({
  lightModeText: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    paddingBottom: 15,
    paddingTop: 56,
    color: '#111827',
  },
  darkModeText: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    paddingBottom: 15,
    paddingTop: 56,
    color: '#FFFFFF',
  },
});

export default function SectionHeading({title}) {
  const {isLightMode} = useContext(Context);
  return (
    <View>
      <Text style={isLightMode ? style.lightModeText : style.darkModeText}>
        {title}
      </Text>
    </View>
  );
}
