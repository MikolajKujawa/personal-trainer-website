import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <header>
          {<Header/>}
        </header>
        <footer>
          {<Footer/>}
        </footer>
    </div>
  );
}

export default App;
