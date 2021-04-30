import React, {useState} from 'react';
import {StyleSheet, View, SectionList} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SectionHeading from './SectionHeading';

const style = StyleSheet.create({
  container: {
    marginTop: 29,
    marginLeft: 29,
    marginBottom: 17,
  },
});

function Heading() {
  const [category, setCategory] = useState([{name: 'food', id: '1'}]);
  return (
    <SectionList
      sections={[{title: 'Select a category:', data: category}]}
      renderSectionHeader={({section}) => (
        <SectionHeading title={section.title} />
      )}
      renderItem={item => null}
      KeyExtractor={item => item.id}
    />
  );
}

function SecondHeading() {
  const [learntData, setLearntData] = useState([{name: 'number', id: '2'}]);
  return (
    <SectionList
      sections={[{title: 'Learnt', data: learntData}]}
      renderSectionHeader={({section}) => (
        <SectionHeading title={section.title} />
      )}
      renderItem={() => null}
      KeyExtractor={item => item.id}
    />
  );
}

storiesOf('SectionHeading', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Heading1', () => <Heading />)
  .add('Heading2', () => <SecondHeading />);
