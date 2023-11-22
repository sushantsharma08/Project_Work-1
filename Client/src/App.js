import logo from './logo.svg';
import './App.css';
import Header from './HeaderComponent/Header'
import Nav from './NavComponent/Nav';
import Footer from './FooterComponent/Footer';
import Testimonial from './TestimonialComponent/Testimonial';
import Action from './ActionComponent/Action';
import About from './AboutComponent/About';
import Category from './CategoryComponent/Category';
import Search from './SearchComponent/Search';
function App() {
  return (
    <div>
        <Nav />
        <Header/>
        <Search />
        <Category />
        <About />
        <Action /> 
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
