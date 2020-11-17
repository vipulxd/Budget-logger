import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import expense from '../components/DashBoard';
import create from '../components/create';
import editpage from '../components/edit';
import helppage from '../components/help';
import notfound1 from '../components/notfound';
import Header from '../components/Header';
<script src="../../public/bundle.js"></script>
const AppRouter=()=>(
   <BrowserRouter>
   <div>
   <Header />
  <Switch>
         <Route path="/" component={expense} exact={true} />
         <Route path="/create" component={create} />
         <Route path="/edit/:id" component={editpage} />
         <Route  path="/help" component={helppage} />
         <Route  component={notfound1} />
        
   </Switch>
</div>
 </BrowserRouter>
);
// Using Switch will make the 404 page render beause using switch will enable
// to switch to the specific routes and if no routes were found its gonna
// look for that empty path route
export default AppRouter
