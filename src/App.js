import "./styles.css"
import React from "react";
import Children from  "./Children"


const themes ={
  light:{
    fontColor: '#000',
    background:'#fff'
  },
  dark:{
    fontColor: '#fff',
    background:'#000'
  }


};

export const  ThemeContext = React.createContext(themes);




function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <Children />
    </ThemeContext.Provider>
  );
}

export default App;
