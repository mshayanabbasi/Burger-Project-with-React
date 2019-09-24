import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" render={()=> <Checkout/>}  />
            <Route path="/orders" render={() => <Orders />} />
            <Route path="/auth" render={() => <Auth />} />
            <Route path="/" exact render={() => <BurgerBuilder />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
