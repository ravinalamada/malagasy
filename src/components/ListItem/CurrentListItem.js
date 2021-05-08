import React, {useContext} from 'react';
import {SectionList, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import ListItemApp from './ListItemApp';
import {Context} from '../../util/GlobalContext';

export default function CurrentListItem() {
  const {category} = useContext(Context);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[{title: 'Food', data: category}]}
          renderItem={({item}) => <ListItemApp name={item.name} />}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
