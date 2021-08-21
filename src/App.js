import './App.scss';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SingInSingUpPage from 'pages/sign-in-and-sing-up/sign-in-and-sing-up-page';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
