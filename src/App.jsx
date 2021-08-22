import './App.scss';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SingInSingUpPage from 'pages/sign-in-and-sing-up/sign-in-and-sing-up-page';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  unSubScribeFromSnapShot = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      let userData = null;
      if (user) {
        const userRef = await createUserProfileDocument(user);
        this.unSubScribeFromSnapShot = userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
    this.unSubScribeFromSnapShot();
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
