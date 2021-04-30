import React, {useContext} from 'react';
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {useParams} from 'react-router-dom';
import LearningScreen from './LearningScreen';
import SectionHeading from '../SectionHeading/SectionHeading';
import {Context} from '../../util/GlobalContext';
const phrasesData = require('../../data/phrases.json');
const phrasesList = phrasesData.phrases;

export default function CurrentLearningScreen() {
  const {category, isEn, isLightMode} = useContext(Context);
  const {catName} = useParams();
  const catNameToDisplay = category.find(cat => cat.name.en == catName);
  const catId = catNameToDisplay.phrasesIds;
  const str = catId[0];
  console.log(str);
  const delLastChar = str.replace('#', '');
  const delBeforeLastCHar = delLastChar.replace('1', '');
  console.log(delBeforeLastCHar);
  const answers = phrasesList.filter(phrase =>
    phrase.id.includes(delBeforeLastCHar),
  );
  // console.log(map);

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
              title: isEn ? `Category: ${catName}` : 'Fidio ny sokajy:',
              data: answers,
            },
          ]}
          renderSectionHeader={({section}) => (
            <SectionHeading title={section.title} />
          )}
          renderItem={({item}) => (
            <LearningScreen
              name={item}
              // id={item.id}
              name={isEn ? item.name.en : item.name.mg}
            />
          )}
          KeyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
