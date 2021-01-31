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

  window.addEventListener('load', () => {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    // console.log(navHeight);
    const main = document.getElementById('main');
    main.style.marginTop = navHeight + 'px';
    const footerHeight = document.getElementById('footer').offsetHeight;
    main.style.paddingBottom = footerHeight + 40 + 'px';
  });
  window.addEventListener('resize', () => {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    // console.log(navHeight);
    const main = document.getElementById('main');
    main.style.marginTop = navHeight + 'px';
    const footerHeight = document.getElementById('footer').offsetHeight;
    main.style.paddingBottom = footerHeight + 40 + 'px';
  });



  return (
    <Router basename="/ecoshop">
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
