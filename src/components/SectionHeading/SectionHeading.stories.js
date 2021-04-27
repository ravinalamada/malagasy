import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SectionHeading from './SectionHeading';

const style = StyleSheet.create({
  container: {
    margin: 20,
  },
});

storiesOf('SectionHeading', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Heading', () => <SectionHeading title={'Heading'} />);

// <SafeAreaView style={{flex: 1}}>
//     <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
//       <SectionList
//         sections={[{title: 'Heading'}]}
//         renderSectionHeader={({section}) => (
//           <SectionHeading title={section.title} />
//         )}
//       />
//   </KeyboardAvoidingView>
// </SafeAreaView>
