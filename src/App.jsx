import Affiche from "./components/Affiche";
import BasFooter from "./components/BasFooter";
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
      <Footer />
      <BasFooter/>
    </div>
  );
};

export default App;