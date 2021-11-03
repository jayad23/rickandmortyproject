import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Views/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
