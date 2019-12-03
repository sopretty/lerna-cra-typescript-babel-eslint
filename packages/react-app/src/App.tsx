import * as React from 'react';
// import {HelloWorld} from '@sopretty/react-ui';
import './App.css';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@sopretty/lit-element/dist/index';

function App() {
  React.useEffect(() => {
    const myElement = document.querySelector('tdw-button');
    const test = (e: any) => {
      console.log('onclick', e);
    };
    if (myElement) {
      myElement.addEventListener('fdp', test);
      return myElement.removeEventListener('fdp', test);
    }
  }, []);

  return React.createElement(
    'tdw-button',
    {color: 'danger'},
    'my first button',
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
