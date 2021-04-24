import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import NextButton from './NextButton';

storiesOf('NextButton', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Disabled Button', () => (
    <NextButton onPress={alert('disalbed')} disabled={true}>
      <Text>Add</Text>
    </NextButton>
  ))
  .add('enabled Button', () => (
    <NextButton onPress={action('clicked-text')} disabled={false}>
      <Text>Add</Text>
    </NextButton>
  ))
  .add('Next Button', () => (
    <NextButton onPress={action('clicked-emoji')} disabled={false}>
      <Text>Next</Text>
    </NextButton>
  ));
