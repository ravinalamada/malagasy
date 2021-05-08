import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const style = StyleSheet.create({
  lightModeText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#111827',
    paddingRight: 5,
  },
  darkModeText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default function SectionHeading({title}) {
  return (
    <View>
      <Text style={style.lightModeText}>{title}</Text>
    </View>
  );
}
