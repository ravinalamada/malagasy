import React, {useContext} from 'react';
import {
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import ListApp from './ListApp';
import SectionHeadingApp from '../SectionHeading/SectionHeadingApp';
import {Context} from '../../util/GlobalContext';

export default function CurrentList() {
  const {category, isEn} = useContext(Context);
  // There should only ever be one version of a component in the codebase, not several different ones. This seems to be the most advanced one so it should replace List.js
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[
            {
              title: isEn ? 'Select a category:' : 'Fidio ny sokajy:',
              data: category,
            },
          ]}
          renderSectionHeader={({section}) => (
            <View style={{marginBottom: 15}}>
              <SectionHeadingApp title={section.title} />
            </View>
          )}
          renderItem={({item}) => (
            <ListApp name={isEn ? item.name.en : item.name.mg} />
          )}
          KeyExtractor={item => item.id}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
