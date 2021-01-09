import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Query from './components/pages/Query/Query';
import Product from './components/pages/Product/Product';
import QueryBar from './components/blocks/QueryBar/QueryBar';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <QueryBar></QueryBar>
      </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item" component={Query} />
          <Route exact path="/item/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
