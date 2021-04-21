
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './myComponent';


storiesOf('myComponent', module)
  .addDecorator(getnewStory => <View>{getnewStory()}</View>)
  .add('word translator', () => <MyComponent label= {'write word here'}/>)