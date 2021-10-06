import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/productspage/ProductsPage";
import CartPage from "./pages/cartPage/CartPage";
import SingleProduct from "./pages/singleProduct/SingleProduct"
import Login from "./pages/login/Login";
import Error  from "./components/error/Error"
import Nav from "./components/nav/Nav"
import Sidebar from "./components/sidebar/Sidebar"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:id" children = {<SingleProduct/>}/>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
