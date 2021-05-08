import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
  return (
    <View>
      <Text style={style.lightModeText}>{title}</Text>
    </View>
  );
}
