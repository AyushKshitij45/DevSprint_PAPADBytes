import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/Home';
import BusinessPitch from './components/BusinessPitch';
import MarketStrategy from './components/MarketStrategy';
import ProductDescription from './components/ProductDescription';
import ColdEmails from './components/ColdEmails';
import InstaCaption from './components/InstaCaption';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Blogs from './components/Blogs';
import Intro from './components/intro';

function App() {
  return (
    <Router> 
      <div className="App">
      <Navigation/>
   
      <Routes>
        
        <Route path='/' element = {<Home/>}/>
        <Route path='/business-pitch'  element = {<BusinessPitch/>}/>
        <Route path='/marketing-strategy'  element = {<MarketStrategy/>}/>
        <Route path='/product-description'  element = {<ProductDescription/>}/>
        <Route path='/cold-emails'  element = {<ColdEmails/>}/>
        <Route path="/insta-caption" element = {<InstaCaption/>}/>
        <Route path='/blogs'  element = {<Blogs/>}/>
        <Route path='/intro'  element = {<Intro/>}/>
        
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
