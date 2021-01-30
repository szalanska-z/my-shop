import './styles/App.scss';
import './icons/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Navigation />
      <main id="main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />}
          />
          <Route
            path="/shop"
            render={({ ...rest }) => <Shop {...rest} />}
          />
          <Route
            path="/basket"
            render={() => <Basket />}
          />
          <Route
            path="/contact"
            render={() => <Contact />}
          />
          <Route
            path="/product/:id"
            render={({ ...rest }) => <Product {...rest} />}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
