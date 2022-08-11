import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Order from "./Pages/Order";




function App() {
  return (
    <>
      <BrowserRouter>
   
        
        <NavBar/>
        <Switch>
           <Route path='/' component={Home} exact/>
          
          <Route path="/order" component={Order} exact/>
          
          <Route path="/cart" component={Cart} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
         </Switch>
     
      </BrowserRouter>
    </>
  );
}

export default App;
