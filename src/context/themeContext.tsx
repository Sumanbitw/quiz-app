import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export type ThemeContextType = {
  theme : string,
  setTheme : (theme : string ) => void 
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType) 

export const ThemeProvider : React.FC = ({ children }) => {
  const [ theme, setTheme ] = useState('')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 

export const useTheme = () => useContext(ThemeContext)