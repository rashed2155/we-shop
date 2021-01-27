import "./App.css";
import Header from "./component/Header";
import Products from "./component/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./component/DataProvider";
import ProductDetails from "./component/ProductDetails";
import Login from "./component/Login";
import Register from "./component/Register";
import Cart from "./component/Cart";
import About from "./component/About";

function App() {
  return (
    <DataProvider>
      <div className="container">
        <Router>
          <Header />
          <section>
            <Switch>
              <Route path="/" exact>
                <Products />
              </Route>
              <Route path="/products/:id" exact>
                <ProductDetails />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
            </Switch>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
