import './App.css';
import Product from './components/Product';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import FeedBack from './components/FeedBack';
function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Product/>
        <FeedBack/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
