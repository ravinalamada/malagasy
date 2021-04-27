import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ActionButton from './ActionButton';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 19,
    marginRight: 20,
  },
});

storiesOf('ActionButton', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Learn button', () => (
    <ActionButton onPress={() => alert('Learn')} buttonLabel={'Learn'} />
  ))
  .add('Pick button', () => (
    <ActionButton onPress={() => alert('Pick')} buttonLabel={'Pick'} />
  ))
  .add('incorrect button', () => (
    <ActionButton onPress={() => alert('Wrong')} buttonLabel={'Wrong'} />
  ))
  .add('correct button', () => (
    <ActionButton onPress={() => alert('Correct')} buttonLabel={'Correct'} />
  ));
