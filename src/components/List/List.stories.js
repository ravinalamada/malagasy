import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {
  StyleSheet,
  View,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import List from './List';
import SectionHeading from '../SectionHeading/SectionHeading';

const categoriesData = require('../../data/categories.json');
const categoriesList = categoriesData.categories;

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 29,
    marginLeft: 29,
    marginRight: 35,
  },
});

function DisplayEnCat() {
  const enCategories = categoriesList.map(cat => cat.name.en);
  const [categories, setCategories] = useState(enCategories);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{title: 'Select a category:', data: categories}]}
          renderSectionHeader={({section}) => (
            <SectionHeading title={section.title} />
          )}
          renderItem={({item, index}) => <List name={item} />}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function DisplayMalCat() {
  const maCategories = categoriesList.map(cat => cat.name.mg);
  const [categories, setCategories] = useState(maCategories);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{title: 'List', data: categories}]}
          renderItem={({item}) => <List name={item} />}
          KeyExtractor={item => item}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

storiesOf('List', module)
  .addDecorator(getStory => <View style={style.container}>{getStory()}</View>)
  .add('English categories name', () => <DisplayEnCat />)
  .add('Malagasy categories name', () => <DisplayMalCat />);
