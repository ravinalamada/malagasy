import React, {useState, createContext} from 'react';
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
  const [isButtonLabel, setIsButtonLabel] = useState(true);
  const [buttonLabel, setButtonLabel] = useState('Pick');

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
    setNextPhrase(false);
    setButtonLabel('Pick');
  }

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  function toogleButtonLabel() {
    setIsButtonLabel(!isButtonLabel);
  }

  function handleActionButton(name) {
    const correctAnswer = phrasesArr.answers;
    if (correctAnswer.name.en === name || correctAnswer.name.mg === name) {
      setButtonLabel('Correct');
    } else if (correctAnswer.name.en !== name) {
      setButtonLabel('Wrong');
    } else {
      setButtonLabel('Pick');
    }
    setNextPhrase(!isNextPhrase);
  }

  return (
    <Context.Provider
      value={{
        category,
        isEn,
        isLightMode,
        isNextPhrase,
        phrasesArr,
        isButtonLabel,
        buttonLabel,
        toogleMode,
        toogleLang,
        randomisedDataToDisplay,
        handleActionButton,
        toogleButtonLabel,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
