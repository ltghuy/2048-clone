import { Game } from './components/Game';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      <Header />
      <Game />
    </div>
  );
}

export default App;
