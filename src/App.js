import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import './styles/common.css'

import Sidebar from './components/core/Sidebar';
import Home from './screens/Home'

function App() {
  return (
    <>
    <BrowserRouter>
        <Sidebar></Sidebar>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
