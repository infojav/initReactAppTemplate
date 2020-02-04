import React, { useState, MouseEvent, MouseEventHandler } from 'react';

import SearchInput from './components/searchInput';
import FancyBorder from './components/fancyBorder';
import Rabbit from './components/rabbit.jsx';
import FruitList from './components/fruitList.jsx';

import './App.css';

const App: React.FC = () => {
  const [ counter, setCounter ] = useState(0);
  


  const handleOnClick: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // let str = "stringify";

    // these are same for substring
    // alert( str.substring(2, 6) ); // "ring"
    // alert( str.substring(6, 2) ); // "ring"

    setCounter( counter + 1);

  }

  return (
      <FancyBorder>
        <SearchInput></SearchInput>
        <Rabbit/>
        <button className="App" onClick={ handleOnClick } type="button">
          {/* <FileViewer></FileViewer> */}
          Counter is now { counter }, and the number is { counter % 2 > 0 ? "\u{1F609}" : "\u{1F60D}"} !!
        </button>
        <FruitList></FruitList>
      </FancyBorder>
  );
}

export default App;
