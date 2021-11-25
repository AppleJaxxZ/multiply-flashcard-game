import logo from './logo.svg';
import './App.css';
import Flashcard from './components/flashcard/flashcard.component.jsx'
import NewProblemButton from './components/newproblem/newproblem.components';


function App() {
  return (
    <div className="App">
      <Flashcard  />
      <NewProblemButton />

    </div>
  );
}

export default App;
