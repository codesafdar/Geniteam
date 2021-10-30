import React, {useState} from "react" ;
import LoginPage from "./LoginPage";
import ListView from "./ListView";
import About from "./About";
import User from "./User";

const ToDoList=()=>{
    return (
    <>
         <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    </Router>


    </>
    )}

