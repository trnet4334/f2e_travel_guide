import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Restaurant from "./pages/Restaurant";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/restaurant" element={<Restaurant/>}/>
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
