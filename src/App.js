import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./AuthContext/AuthProvider";
import AboutUs from "./Pages/About/About";
import Contact from "./Pages/Contact/ContactUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Order from "./Pages/Order/Order";
import Products from "./Pages/Products/Products";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/header'>
              <Header />
            </Route>
            <Route exact path='/footer'>
              <Footer />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/registration'>
              <Registration />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/about'>
              <AboutUs />
            </Route>
            <PrivateRoute path="/product/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
