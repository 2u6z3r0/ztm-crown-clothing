import './App.scss';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SingInSingUpPage from 'pages/sign-in-and-sing-up/sign-in-and-sing-up-page';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.util';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log('current user : ', this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
