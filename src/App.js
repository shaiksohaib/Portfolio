 
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import Contacts from "./Pages/Contacts";
import Error from "./Pages/Error";
import Projects from "./Pages/Projects";
import Particles from "./Pages/Particles"


const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Particles />
      <Switch>
        <Route path="/" exact>
         <Homepage/>
       </Route>
        <Route path="/projects">
         <Projects/>
       </Route>
       <Route path="/contact-me">
         <Contacts/>
       </Route>
        <Route path ="*">
         <Error/> 
       </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
