import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

function App() {

  return (
    <div className="App" >
      <Header />
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
