import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import  Dashboard from './components/dashboard/Dashboard';
import OrderDetails from './components/orders/OrderDetails';
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
          <Route path='/order/:id' component={OrderDetails} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/create-order' component={CreateOrder} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
