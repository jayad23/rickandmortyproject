import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import FrontPage from './ComponentsCntr/FrontPage'
import HomeSearch from "./ComponentsCntr/HomeSearch";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FrontPage/>
        </Route>
        <Route path="/home-search" >
          <HomeSearch/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
