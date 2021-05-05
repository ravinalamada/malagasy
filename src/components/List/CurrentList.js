import React, {useContext} from 'react';
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import List from './List';
import SectionHeading from '../SectionHeading/SectionHeading';
import {Context} from '../../util/GlobalContext';

export default function CurrentList() {
  const {category, isEn, isLightMode} = useContext(Context);

  const styles = StyleSheet.create({
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: isLightMode ? '#E5E5E5' : '#1F232C',
    },
  });

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
            <SectionHeading title={section.title} />
          )}
          renderItem={({item}) => (
            <List name={isEn ? item.name.en : item.name.mg} />
          )}
          KeyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
