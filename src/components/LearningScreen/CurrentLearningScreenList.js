import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  SectionList,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';
import {Link} from 'react-router-native';
import {useParams} from 'react-router-dom';
import LearningScreen from './LearningScreen';
import SectionHeadingApp from '../SectionHeading/SectionHeadingApp';
import ToolButtom from '../ToolButton/ToolButton';
import SwitcherButton from '../SwitcherButtton/SwitcherButton';
import PhraseTextArea from '../PhraseTextarea/PhraseTextarea';
import NextButton from '../NextButton/NextButton';
import {homeStyle} from '../Home/Home';
import {style} from '../ListItem/ListItem';
import {Context} from '../../util/GlobalContext';

const phrasesData = require('../../data/phrases.json');
const phrasesList = phrasesData.phrases;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
});

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

  return (
    <SafeAreaView
      style={
        isLightMode ? homeStyle.lightModeContainer : homeStyle.darkModeContainer
      }>
      <KeyboardAvoidingView>
        <View style={homeStyle.buttonContainer}>
          <Link
            to="/"
            component={ToolButtom}
            buttonLabel={'back'}
            onPress={toogleButtonLabel}
          />
          <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
          <SwitcherButton onPress={toogleLang} />
        </View>
        <View style={styles.container}>
          <SectionHeadingApp title={isEn ? 'Category:' : 'Karazana:'} />
          <Text style={style.text}>
            {isEn ? catNameToDisplay.name.en : catNameToDisplay.name.mg}
          </Text>
        </View>
        <SectionHeadingApp title={isEn ? `The phrases:` : 'fehezanteny:'} />
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
            <View style={{marginBottom: 15}}>
              <SectionHeadingApp title={section.title} />
            </View>
          )}
          renderItem={({item}) => (
            <LearningScreen name={isEn ? item.en : item.mg} />
          )}
          KeyExtractor={item => (isEn ? item.en : item.mg)}
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
