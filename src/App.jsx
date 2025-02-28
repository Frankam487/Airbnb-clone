import Affiche from "./components/Affiche";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";


const App = () => {
  return (
    <div className=''>
      <Header />
      <Categories />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;