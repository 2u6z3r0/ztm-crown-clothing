import "./App.scss";
import Header from "components/header/header.component";
import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SingInSingUpPage from "pages/sign-in-and-sing-up/sign-in-and-sing-up-page";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/user.actions";

class App extends Component {
  unSubscribeFromAuth = null;
  unSubScribeFromSnapShot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      console.log("current User ", user);
      if (user) {
        const userRef = await createUserProfileDocument(user);
        this.unSubScribeFromSnapShot = userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInSingUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
