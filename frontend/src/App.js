
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      {/* Navbar */}
      {/* SideDrawer */}
      {/* BackDrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
