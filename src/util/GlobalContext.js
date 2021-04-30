import React, {useState, useEffect, createContext} from 'react';
import {useHistory} from 'react-router-dom';

const categoriesData = require('../data/categories.json');
const categoriesList = categoriesData.categories;
const Context = createContext();

function GlobalContextProvider({children}) {
  const [category, setCategory] = useState(categoriesList);
  const [isEn, setIsLan] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);
  let history = useHistory();

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  function handlePress() {
    console.log(history);
    // history.push('/');
  }

  return (
    <Context.Provider
      value={{
        category,
        isEn,
        isLightMode,
        toogleMode,
        toogleLang,
        handlePress,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
