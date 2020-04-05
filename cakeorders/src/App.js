import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import  Dashboard from './components/dashboard/Dashboard';
import OrderDetails from './components/orders/OrderDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateOrder, { StepForm } from './components/orders/CreateOrder';
import COrder from './components/features/Checkout';
import { createStore} from 'redux';
import rootReducer from './store/reducers/rootreducer';
import {Provider} from 'react-redux';
import StickyFooter from './components/layouts/StickyFooter';

const store=createStore(rootReducer);

function App() {
	return (
    <BrowserRouter>
    <Provider store={store}></Provider>
			<div className="App">
				<Navbar />
				<Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path='/order/:id' component={OrderDetails} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/create-order' component={StepForm} />
          <Route path='/check' component={StepForm} />
        </Switch>
        
			</div>
		</BrowserRouter>
	);
}

export default App;
