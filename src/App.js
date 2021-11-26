import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import OrderWatch from './pages/Home/Watches/OderWatch/OrderWatch';
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Login/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./pages/Shared/Footer/Footer";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Tours from './pages/Tours/Tours';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <Route path="/contacts">
              <Contacts/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>

           
            
            <PrivateRoute path="/singleproduct/:id">
              <OrderWatch></OrderWatch>
            </PrivateRoute> 

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

           
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
