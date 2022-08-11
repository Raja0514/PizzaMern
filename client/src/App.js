import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Pages/Cart";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Topbar from "./Components/Topbar";
import Order from "./Pages/Order";




function App() {
  return (
    <>
      <BrowserRouter>
   
        <Topbar/>
        <NavBar/>
        <Switch>
           <Route path='/' component={Home} exact/>
          <Route path="/about" component={About} exact />
          <Route path="/order" component={Order} exact/>
          <Route path="/contact" component={Contact} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
         </Switch>
     
      </BrowserRouter>
    </>
  );
}

export default App;
