import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import NextButton from './NextButton';

storiesOf('NextButton', module)
  .addDecorator(getStory => <View style={{margin: 20}}>{getStory()}</View>)
  .add('Disabled Button', () => (
    <NextButton buttonLabel={'Add'} disabled={true} />
  ))
  .add('enabled Button', () => (
    <NextButton
      onPress={() => alert('Enabled button')}
      buttonLabel={'Add'}
      disabled={false}
    />
  ))
  .add('Next Button', () => (
    <NextButton
      onPress={() => alert('Next Button')}
      buttonLabel={'Next'}
      disabled={false}
    />
  ));
