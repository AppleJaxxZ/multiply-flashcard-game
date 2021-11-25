import React from 'react';
import './App.css';
import Flashcard from './components/flashcard/flashcard.component.jsx'
import NewProblemButton from './components/newproblem/newproblem.components';
import {randoMatic} from './components/utils'


function App() {
  return (
    <div className="App">
      <Flashcard  />
      <NewProblemButton onClick={randoMatic} />

    </div>
  );
}

export default App;
