import React, {useContext, useEffect, useState} from 'react';
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
import SectionHeading from '../SectionHeading/SectionHeading';
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
    toogleLang,
    toogleMode,
    toogleNextButon,
  } = useContext(Context);
  const [phrasesArr, setPhrasesArr] = useState([]);
  const {catName} = useParams();
  const catNameToDisplay = category.find(cat => cat.name.en == catName);
  const catId = catNameToDisplay.phrasesIds;
  const str = catId[0];
  const delLastChar = str.substring(0, 5);
  const phrases = phrasesList.filter(phrase => phrase.id.includes(delLastChar));
  function randomisedDataToDisplay() {
    const randomPhrases = phrases[Math.floor(Math.random() * phrases.length)];
    const opt1 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt2 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt3 = phrases[Math.floor(Math.random() * phrases.length)];
    console.log(opt3);
    const randomAnswers = [randomPhrases.name, opt1.name, opt2.name, opt3.name];
    randomAnswers.sort(() => {
      return 0.5 - Math.random();
    });
    const randomQuestions = phrases[Math.floor(Math.random() * phrases.length)];

    //Initialized the quizData that will be used later
    const phrasesObj = {
      answerOptions: randomAnswers,
      questions: randomQuestions,
      answers: randomPhrases.name,
    };

    setPhrasesArr(phrasesObj);
  }

  useEffect(() => {
    randomisedDataToDisplay();
  }, []);

  const answersData =
    phrasesArr !== [] &&
    phrasesArr.answerOptions !== undefined &&
    phrasesArr.answerOptions;

  // console.log(answersData);

  const questionsData =
    phrasesArr !== [] &&
    phrasesArr.questions !== undefined &&
    phrasesArr.questions;

  if (!answersData) {
    return null;
  }
  if (!questionsData) {
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
          <ToolButtom buttonLabel={'back'} onPress={randomisedDataToDisplay}>
            <Link to="/" />
          </ToolButtom>
          <ToolButtom buttonLabel={'mode'} onPress={toogleMode} />
          <SwitcherButton onPress={toogleLang} />
        </View>
        <SectionHeading
          title={
            isEn
              ? `Category: ${catNameToDisplay.name.en}`
              : `Karazana: ${catNameToDisplay.name.mg}`
          }
        />
        <SectionHeading title={isEn ? `The phares:` : 'fehezanteny:'} />
        <PhraseTextArea
          editable={false}
          phrase={isEn ? questionsData.name.mg : questionsData.name.en}
        />
        <SectionList
          sections={[
            {
              title: isEn ? 'Pick a solution: ' : 'Misafidiana vahaolana:',
              data: answersData,
            },
          ]}
          renderSectionHeader={({section}) => (
            <SectionHeading title={section.title} />
          )}
          renderItem={({item}) => (
            <LearningScreen
              name={isEn ? item.en : item.mg}
              onRowPress={toogleNextButon}
            />
          )}
          KeyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </KeyboardAvoidingView>
      <View style={styles.button}>
        {isNextPhrase && (
          <NextButton buttonLabel={'Next'} onPress={randomisedDataToDisplay} />
        )}
      </View>
    </SafeAreaView>
  );
}
