import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import Navbar from './components/layouts/Navbar';
import  Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateOrder from './components/orders/CreateOrder';




function App() {
	return (
    <BrowserRouter>    
			<div className="App">
				<Navbar />
				<Switch>
          <Route exact path="/" component={Dashboard} />          
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/create-order' component={CreateOrder} />
          <Route path='/check' component={CreateOrder} />
        </Switch>
        
			</div>
		</BrowserRouter>
	);
}

export default App;
