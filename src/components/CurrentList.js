import React, {useContext} from 'react';
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import List from './List/List';
import SectionHeading from './SectionHeading/SectionHeading';
import {Context} from '../util/GlobalContext';

export default function CurrentList() {
  const {category, isEn} = useContext(Context);
  const enCategory = category.map(cat => cat.name.en);
  const mgCategory = category.map(cat => cat.name.mg);

  const styles = StyleSheet.create({
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: '#E5E5E5',
    },
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <SectionList
          sections={[
            {
              title: isEn ? 'Select a category:' : 'Fidio ny sokajy:',
              data: isEn ? enCategory : mgCategory,
            },
          ]}
          renderSectionHeader={({section}) => (
            <SectionHeading title={section.title} />
          )}
          renderItem={({item}) => <List name={item} />}
          KeyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
