import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import NavMenu from "./components/NavMenu";
import Explore from "./page/Explore";
import Sports from "./page/Sports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./page/User";

// replace  /open? to /uc? inside google drive imgs  

function App() {
  const userURl = "https://private-7c1f2f-technicaltaskapi.apiary-mock.com/user/1"
  
  const [state, setState] = useState({
    menu: false,
    userData:null
  })

  useEffect(() => {
    const getUser = async () => {
      let res = await fetch(userURl)
      let data = await res.json()
      setState({...state, userData:data})
    }

    getUser()
  }, [])


  console.log("user", state.userData);


  return (    
    <div className="app">
      <Router>
        <Nav state={state} setState={setState} />
        <NavMenu state={state} setState={setState} />
        <Switch>
          <Route path="/athletes">
            <h1 style={{textAlign:"center", color:"#fff"}}>Athletes route</h1>
          </Route>
          <Route path="/user">
            <User state={state} setState={setState} />
          </Route>
          <Route path="/sports">
            <Sports/>
          </Route>
          <Route path="/">
            <Explore state={state} setState={setState} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
