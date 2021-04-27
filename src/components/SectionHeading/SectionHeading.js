import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const style = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#111827',
  },
});

export default function SectionHeading({title}) {
  return (
    <View>
      <Text style={style.text}>{title}</Text>
    </View>
  );
}
