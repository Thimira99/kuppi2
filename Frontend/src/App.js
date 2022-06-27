import React from "react";
import "App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


//Import Components
import Nav from "./Nav";
import addForm from "./components/addForm/addForm.js";
import UpdateForm from "./components/Update/updateForm.js";
import Login from "./components/Login/login.js";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Nav />
        <Switch>
          <Route path='/main' component={addForm} />
          <Route path='/update/:id' component={UpdateForm} />
          <Route path='/login' component={Login} />


          {/* <Redirect exact to='/login' component={Login} /> */}
        </Switch>





      </BrowserRouter>
    </div>
  )


};

export default App;
