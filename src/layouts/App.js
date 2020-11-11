import '../styles/App.css';
import Header from './Header';
import FrontPanel from './FrontPanel'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <header>
          {<Header/>}
        </header>
        <main>
          <section>
            {<FrontPanel/>}
          </section>
        </main>
        <footer>
          {<Footer/>}
        </footer>
    </div>
  );
}

export default App;
