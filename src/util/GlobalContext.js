import React, {useState, useEffect, createContext} from 'react';
import ReactNativeComponentTree from 'react-native';
const categoriesData = require('../data/categories.json');
import ActionButton from '../components/ActionButton/ActionButton';
const categoriesList = categoriesData.categories;
const Context = createContext();

function GlobalContextProvider({children}) {
  const [category, setCategory] = useState(categoriesList);
  const [isEn, setIsLan] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isNextPhrase, setNextPhrase] = useState(false);
  const [phrasesArr, setPhrasesArr] = useState([]);
  const [isLearnAction, setIsLearnAction] = useState(true);

  function randomisedDataToDisplay(phrases) {
    const randomPhrases = phrases[Math.floor(Math.random() * phrases.length)];
    const opt1 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt2 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt3 = phrases[Math.floor(Math.random() * phrases.length)];
    const randomAnswers = [randomPhrases, opt1, opt2, opt3];
    randomAnswers.sort(() => {
      return 0.5 - Math.random();
    });
    //Initialized the quizData that will be used later
    const phrasesObj = {
      answerOptions: randomAnswers,
      answers: randomPhrases,
    };

    setPhrasesArr(phrasesObj);
  }

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  function toogleNextButon() {
    setNextPhrase(!isNextPhrase);
  }

  function handleBtn() {
    setIsLearnAction(!isLearnAction);
  }

  function handleActionButton(event) {
    const correctAnswer = phrasesArr.answers;
  }

  return (
    <Context.Provider
      value={{
        category,
        isEn,
        isLightMode,
        isNextPhrase,
        phrasesArr,
        isLearnAction,
        toogleMode,
        toogleLang,
        toogleNextButon,
        randomisedDataToDisplay,
        handleActionButton,
        handleBtn,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
