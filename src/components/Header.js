import React from 'react'
import { BrowserRouter, Route ,Switch,Link,NavLink} from 'react-router-dom';

// Links are useful for single redirection for link

// we can also use the Links here these are useful for navbar links
const Header=()=>(
   <header>
   <h1>Expensify</h1>
   <NavLink exact={true} to="/" activeClassName="selected">DashBoard</NavLink>
   <NavLink to="/create" activeClassName="selected">create</NavLink>
   <NavLink to="/help" activeClassName="selected">Help</NavLink>
   
   </header>
   
   )
   export default Header;