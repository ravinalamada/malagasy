import React, {useState} from 'react';
import {SectionList, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import ListItem from './ListItem';

export default function CurrentListItem() {
  const [categories, setCategories] = useState([
    {name: 'Food', id: '#1111'},
    {name: 'Numbers', id: '14'},
  ]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{data: categories}]}
          renderItem={({item}) => <ListItem name={item.name} />}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
