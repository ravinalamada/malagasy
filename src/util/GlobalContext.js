import React, {useState, useEffect, createContext} from 'react';
const categoriesData = require('../data/categories.json');
const categoriesList = categoriesData.categories;
const Context = createContext();

function GlobalContextProvider({children}) {
  const [category, setCategory] = useState(categoriesList);
  const [isEn, setIsLan] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);
  const [isNextPhrase, setNextPhrase] = useState(false);
  const [phrasesArr, setPhrasesArr] = useState([]);
  const [isLearnAction, setIsLearnAction] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  function randomisedDataToDisplay(phrases) {
    const randomAnwers = phrases[Math.floor(Math.random() * phrases.length)];
    const opt1 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt2 = phrases[Math.floor(Math.random() * phrases.length)];
    const opt3 = phrases[Math.floor(Math.random() * phrases.length)];
    const randomPhrases = [randomAnwers.name, opt1.name, opt2.name, opt3.name];
    randomPhrases.sort(() => {
      return 0.5 - Math.random();
    });

    const phrasesObj = {
      answerOptions: randomPhrases,
      answers: randomAnwers,
    };

    setPhrasesArr(phrasesObj);
    setNextPhrase(!isNextPhrase);
    setIsCorrect(false);
    setIsWrong(false);
  }

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  function handleBtn() {
    setIsLearnAction(!isLearnAction);
  }

  function handleActionButton(name) {
    setNextPhrase(!isNextPhrase);
    const correctAnswer = phrasesArr.answers;
    if (correctAnswer.name.en === name || correctAnswer.name.mg === name) {
      setIsCorrect(!isCorrect);
    } else if (correctAnswer.name.en !== name) {
      setIsWrong(!isWrong);
    } else {
      setIsCorrect(false);
      setIsWrong(false);
    }
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
        isWrong,
        isCorrect,
        toogleMode,
        toogleLang,
        randomisedDataToDisplay,
        handleActionButton,
        handleBtn,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
