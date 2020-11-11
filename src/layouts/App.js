import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.css';

import Header from './Header';
import Pages from './Pages'
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
        <header>
          {<Header/>}
        </header>
        <main>
          <section>
            {<Pages/>}
          </section>
        </main>
        <footer>
          {<Footer/>}
        </footer>
    </div>
    </Router>
  );
}

export default App;
