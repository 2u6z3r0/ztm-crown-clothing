import "App.scss";
import HomePage from "pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return <h1>Shopping Page</h1>;
};
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
