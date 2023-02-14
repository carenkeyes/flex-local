import logo from './logo.svg';
import './App.css';

interface Props {
  title: string;
}

function App({title}: {title: string}) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>{title}</h2>
      </header>
    </div>
  );
}

export default App;
