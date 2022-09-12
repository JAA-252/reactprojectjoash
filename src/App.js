import "./App.css";
import Students from "./components/pages/dynamicPages/Students";
import AddStudent from "./components/pages/dynamicPages/AddStudent";
import HeaderOrganism from './components/organisms/HeaderOrganism';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from './components/pages/staticPages/About';
import PageNotFound from './components/pages/staticPages/PageNotFound';
import BannerOrganism from "./components/organisms/BannerOrganism";

function App() {
  return (
    <Router>
      <div className="container">
      <HeaderOrganism brand="Student Portal" />
      <BannerOrganism />
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route exact path="/students/add" element={<AddStudent /> } />
        <Route exact path="/about" element={<About /> } />
        <Route  path="*" element={<PageNotFound /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
