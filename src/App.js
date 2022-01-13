
import './App.css';
import navbar from './components/navbar';
import footer from './components/footer';
import {BrowserRouter as router,route,Switch} from "react-router-dom";
import home from './pages/home';
import account from './pages/account';
import login from './pages/login';

function App() {
  return (
    <div className="App">
      <router>
        <navbar /> 
        <Switch>
          <route path="/" exact component={home}/>
          <route path="/" exact component ={account}/>
          <route path="/" exact component ={login}/>

        </Switch>
        <footer />
      </router>
    </div>
  );
}

export default App;
