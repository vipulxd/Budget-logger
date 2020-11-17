import React from 'react';
//hoc is the component which renders the higher order component
import ReactDOM from 'react-dom';
const Info = (props) => (
   <div >
      <h1> Your Dashboard  </h1>
      <p> Mails :  </p>
      <p>
      {props.info}
      </p>
   </div>
);
// this is the higher order component and the info component will render indside this component

const higherComp = (WrappedComponent) => {
   return (props) => (
      <div>

         {props.isAdmin && <p>Admin area</p>}
         <WrappedComponent  {...props} />

      </div>
   );
};

const requireAuthentication = (WrappedComponent) => {
   return (props) => (
      <div>
         {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please LOGIN first</p>)}


      </div>
   )
}
// const Higherc= higherComp(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<Higherc isAdmin={true} info="Please LOGIN"/> ,document.getElementById('appRoot'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the user Panel" />, document.getElementById('appRoot'))