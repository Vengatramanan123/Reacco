import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Main from './Components/Main'
import Home from './Components/Home'
import Start from './Components/Start'
import Blog from  "./Components/Poke";
import Api from "./Components/apis"
import TextApi from  "./Components/TextApi"
import Termsfinder from "./Components/terms"
import Analyzer from "./Components/Analyzer"
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* All components inside Router */}
      <Router>
        <Routes>
          <Route  path="/api/Login" element={<Login />} />
          <Route  path="/api/Main" element={<Main />} />
          <Route  path="/Home" element={<Home />} />
          <Route path="/api/Explore" element={<Start/>}/>
          <Route path="/PokeApi" element={<Blog/>}/>
          <Route path="/Api" element={<Api/>}/>
          <Route path="/TextApi" element={<TextApi/>}/>
          <Route path="/TermsFinder" element={<Termsfinder/>}/>
          <Route path="/TextAnalyzer" element={<Analyzer/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
