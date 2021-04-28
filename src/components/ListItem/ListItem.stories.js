import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';

import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import ListItem from './ListItem';

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 29,
    marginLeft: 27,
    marginRight: 35,
  },
});

function DisplayEnCat() {
  const [categories, setCategories] = useState([
    {name: 'Food', id: '#1111'},
    {name: 'Numbers', id: '14'},
  ]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{data: categories}]}
          renderItem={({item}) => (
            <ListItem style={style.container} name={item.name} />
          )}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function DisplayMalCat() {
  const [categories, setCategories] = useState([
    {name: 'Sakafo', id: '1'},
    {name: 'Isa', id: '2'},
  ]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{data: categories}]}
          renderItem={({item}) => <ListItem name={item.name} />}
          KeyExtractor={item => item}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

storiesOf('ListItem', module)
  .addDecorator(getStory => <View style={style.container}>{getStory()}</View>)
  .add('English name', () => <DisplayEnCat />)
  .add('Malagasy name', () => <DisplayMalCat />);
