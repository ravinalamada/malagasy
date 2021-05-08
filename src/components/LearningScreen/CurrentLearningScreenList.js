import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Link} from 'react-router-native';
import {useParams} from 'react-router-dom';
import LearningScreen from './LearningScreen';
import SectionHeadingApp from '../SectionHeading/SectionHeadingApp';
import ToolButtom from '../ToolButton/ToolButton';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';
import PhraseTextArea from '../PhraseTextarea/PhraseTextarea';
import NextButton from '../NextButton/NextButton';
import {style} from '../Home/Home';
import {Context} from '../../util/GlobalContext';

const phrasesData = require('../../data/phrases.json');
const phrasesList = phrasesData.phrases;

export default function CurrentLearningScreen() {
  const {
    category,
    isEn,
    isLightMode,
    isNextPhrase,
    phrasesArr,
    toogleLang,
    toogleMode,
    randomisedDataToDisplay,
    toogleButtonLabel,
  } = useContext(Context);

  const {catName} = useParams();
  const catNameToDisplay = category.find(
    cat => cat.name.en === catName || cat.name.mg === catName,
  );
  const catId = catNameToDisplay.phrasesIds;
  const str = catId[0];
  const delLastChar = str.substring(0, 5);
  const phrases = phrasesList.filter(phrase => phrase.id.includes(delLastChar));

  useEffect(() => {
    randomisedDataToDisplay(phrases);
  }, []);

  const answersData =
    phrasesArr !== [] &&
    phrasesArr.answerOptions !== undefined &&
    phrasesArr.answerOptions;

  if (!answersData) {
    return null;
  }

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: isLightMode ? '#E5E5E5' : '#1F232C',
    },
  });

  return (
    <SafeAreaView
      style={isLightMode ? style.lightModeContainer : style.darkModeContainer}>
      <KeyboardAvoidingView>
        <View style={style.buttonContainer}>
          <Link
            to="/"
            component={ToolButtom}
            buttonLabel={'back'}
            onPress={toogleButtonLabel}
          />
          <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
          <SwitcherButton onPress={toogleLang} />
        </View>
        <SectionHeadingApp
          title={
            isEn
              ? `Category: ${catNameToDisplay.name.en}`
              : `Karazana: ${catNameToDisplay.name.mg}`
          }
        />
        <SectionHeadingApp title={isEn ? `The phares:` : 'fehezanteny:'} />
        <PhraseTextArea
          editable={false}
          phrase={
            isEn ? phrasesArr.answers.name.mg : phrasesArr.answers.name.en
          }
        />
        <SectionList
          sections={[
            {
              title: isEn ? 'Pick a solution: ' : 'Misafidiana vahaolana:',
              data: answersData,
            },
          ]}
          renderSectionHeader={({section}) => (
            <SectionHeadingApp title={section.title} />
          )}
          renderItem={({item}) => (
            <LearningScreen name={isEn ? item.en : item.mg} />
          )}
          KeyExtractor={item => (isEn ? item.en : item.mg)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </KeyboardAvoidingView>
      <View style={styles.button}>
        {isNextPhrase && (
          <NextButton
            buttonLabel={'Next'}
            onPress={() => randomisedDataToDisplay(phrases)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
