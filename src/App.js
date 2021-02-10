import './index.css';
import { TerminalAnimated } from './components/terminal';

function App() {
  return (
    <div className="App overflow-x-hidden min-h-screen bg-almond">
      <header className="fixed p-6 w-screen text-3xl font-bold">
        J. Simon Richard
      </header>
      
      <div className="w-screen h-screen p-6 grid">
        <TerminalAnimated className="place-self-center w-full max-w-screen-lg mx-auto h-96 shadow-2xl" command="whoami">
          Hi, my name is J. Simon Richard.
        </TerminalAnimated>
      </div>
    </div>
  );
}

export default App;
