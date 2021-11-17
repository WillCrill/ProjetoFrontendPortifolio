import './App.scss';
import Banner from './layout/Banner';
import Header from "./layout/Header"
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
      <div className = "App">
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;
