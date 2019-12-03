import * as React from 'react';
import {HelloWorld} from '@sopretty/react-ui';
import './App.css';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'tdw-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld>test</HelloWorld>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <tdw-button></tdw-button>
      </header>
    </div>
  );
}

export default App;
