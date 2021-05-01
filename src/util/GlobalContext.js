import React, {useState, useEffect, createContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';

const categoriesData = require('../data/categories.json');
const categoriesList = categoriesData.categories;
const Context = createContext();

function GlobalContextProvider({children}) {
  const [category, setCategory] = useState(categoriesList);
  const [isEn, setIsLan] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isNextPhrase, setNextPhrase] = useState(false);

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  function toogleNextButon() {
    setNextPhrase(!isNextPhrase);
  }

  return (
    <Context.Provider
      value={{
        category,
        isEn,
        isLightMode,
        toogleMode,
        toogleLang,
        isNextPhrase,
        toogleNextButon,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
