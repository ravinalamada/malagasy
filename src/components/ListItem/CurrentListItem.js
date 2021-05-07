import React, {useContext} from 'react';
import {SectionList, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import ListItem from './ListItem';
import {Context} from '../../util/GlobalContext';

export default function CurrentListItem() {
  const {category, toogleNextButon} = useContext(Context);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{title: 'Food', data: category}]}
          renderItem={({item}) => (
            <ListItem name={item.name} onPress={toogleNextButon} />
          )}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
