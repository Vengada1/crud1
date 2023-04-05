import { useEffect, useState } from 'react';
import './App.css';
import { AddUser } from './components/AddUsers';
import Dashboard from './components/Dashboard';
import EditUser from './components/EditUsers';
import { Nopage } from './components/NoPage';
import UserComponent from './components/UserComponent';
import { UserDetails } from './components/UserDetails';
import { data } from './Data/data';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';


function App() {
const [user, setUser] = useState(data)
  //useEffect
  return (
    <div className="App">
      
      <Switch>

        <Route exact path="/">
        <UserComponent
        user={user}
        setUser={setUser}/>
        </Route>
        
        <Route path="/add/user">
          <AddUser
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path="/edit/:id">
            <EditUser
             user={user}
             setUser={setUser}
            />
        </Route>

        <Route path="/user/:id">
           <UserDetails user={user}/>
        </Route>

        
        <Route path="/dashboard">
           <Dashboard/>
        </Route>


        <Route path="/students">
             <Redirect path= "/"/>
        </Route>

        <Route path = "**">
            <Nopage/>
        </Route>
      
      </Switch>
    </div>
  );
}

export default App;



