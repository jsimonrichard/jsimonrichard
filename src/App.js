import './index.css';
import Terminal from './components/terminal';

function App() {
  return (
    <div className="App overflow-x-hidden p-10 min-h-screen bg-almond">
      <Terminal className="w-full max-w-screen-lg mx-auto h-full" command="whoami">
      Hi, my name is J. Simon Richard.
      </Terminal>
    </div>
  );
}

export default App;
