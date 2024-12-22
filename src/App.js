
import './App.css';
import BlogSection from './Components/BlogSection';
import Facilities from './Components/Facilities';
import Header from './Components/Header';
import Navbar from './Components/Navbar'
import OurProducts from './Components/OurProducts';
import Review from './Components/Review';
import ShortNote from './Components/ShortNote';
function App() {
  return (
    <div className="">
     <Navbar/>
     <Header/>
     <Facilities/>
     <OurProducts/>
     <BlogSection/>
     <Review/>
     <ShortNote/>
      
    </div>
  );
}

export default App;
