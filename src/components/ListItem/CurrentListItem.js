import React, {useState, useContext} from 'react';
import {SectionList, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import ListItem from './ListItem';
import {Context} from '../../util/GlobalContext';

export default function CurrentListItem() {
  const {toogleNextButon} = useContext(Context);
  const [categories, setCategories] = useState([
    {name: 'Food', id: '#1111'},
    {name: 'Numbers', id: '14'},
  ]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{title: 'Food', data: categories}]}
          renderItem={({item}) => (
            <ListItem name={item.name} onPress={toogleNextButon} />
          )}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
