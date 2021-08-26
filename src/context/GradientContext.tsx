import React, {createContext, useState} from 'react';

interface Colors {
  primary: string;
  secundary: string;
}

interface ContextProps {
  colors: Colors;
  prevColors: Colors;
  setMainColors: (colors: Colors) => void;
  setMainPrevColors: (colors: Colors) => void;
}

export const GradientContext = createContext({} as ContextProps); //TODO: Definir tipo

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<Colors>({
    primary: 'transparent',
    secundary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<Colors>({
    primary: 'transparent',
    secundary: 'transparent',
  });

  const setMainColors = (colores: Colors) => {
    setColors(colores);
  };

  const setMainPrevColors = (prevColores: Colors) => {
    setPrevColors(prevColores);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setMainPrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
