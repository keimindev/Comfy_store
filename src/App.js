import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/productspage/ProductsPage";
import CartPage from "./pages/cartPage/CartPage";
import SingleProduct from "./pages/singleProduct/SingleProduct"
import Error  from "./components/error/Error"
import Nav from "./components/nav/Nav"
import Sidebar from "./components/sidebar/Sidebar"
import Footer from "./components/footer/Footer"
import AuthWrapper from "./components/authWrapper/AuthWrapper";


function App() {

  return (
    <>
    <AuthWrapper>
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
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </AuthWrapper>
    </>

  );
}

export default App;
