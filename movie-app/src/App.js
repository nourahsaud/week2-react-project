import './App.css';
import Card from './components/Card';
import CardData from './components/CardData';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let movie = CardData.map((cards) => {
    return <Card cards={cards} />
  });

  return (
    <div className="App">
      <Header/>
      <div>
        {movie}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
