import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../styles/layouts-styles/App.css';

import Header from './Header';
import Pages from './Pages'
import Footer from './Footer';
import Media from '../components/Media';
import BMIcalc from '../components/BMIcalc'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
        <header>
          {<Header/>}
        </header>
        <main>
          <section>
            {<Pages/>}
            {<Media/>}
          </section>
        </main>
        <article>
          {<BMIcalc/>}
        </article>
        <footer>
          {<Footer/>}
        </footer>
    </div>
    </Router>
  );
}

export default App;
