import './App.css';
import Signin from './components/Signin';
import  {BrowserRouter,Switch,Route } from 'react-router-dom';
import Signup from './components/Signup';


const App = () => {
  return (
    <BrowserRouter>
     <Switch>
     <Route path="/signup" component={Signup}/>
     <Route path="/" component={Signin}/>     
     
     </Switch>
    </BrowserRouter>
  );
}

export default App;