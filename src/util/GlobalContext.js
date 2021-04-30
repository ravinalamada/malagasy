import React, {useState, useEffect, createContext} from 'react';
const categoriesData = require('../data/categories.json');
const categoriesList = categoriesData.categories;

const Context = createContext();

function GlobalContextProvider({children}) {
  const [category, setCategory] = useState(categoriesList);
  const [isEn, setIsLan] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);

  function toogleLang() {
    setIsLan(!isEn);
  }

  function toogleMode() {
    setIsLightMode(!isLightMode);
  }

  return (
    <Context.Provider
      value={{
        category,
        isEn,
        isLightMode,
        toogleMode,
        toogleLang,
      }}>
      {children}
    </Context.Provider>
  );
}

export {GlobalContextProvider, Context};
