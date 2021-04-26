import React from 'react';
import {StyleSheet, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherButton from './SwitcherButton';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

storiesOf('SwitcherButton', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Malagasy language', () => (
    <SwitcherButton onPress={() => alert('Malagasy')} />
  ))
  .add('English language', () => (
    <SwitcherButton onPress={() => alert('English')} />
  ));
