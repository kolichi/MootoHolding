// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();


// // receives component and any other props represented by ...rest
// const ProtectedRoutes = ({ component: Component, ...rest }) => {
 
//   // function hasJWT() {
//   //   let flag = false;

//   //   //check user has JWT token
//   //   localStorage.getItem("token") ? flag=true : flag=false
    
//   //   return flag }

//   return (
//     // this route takes other route assigned to it from the App.js and return the same route if condition is met
//     <Route
//       {...rest}
//       render={(props) => {
//         // get cookie from browser if logged in
//         const token = cookies.get("TOKEN");

//         // return route if there is a valid token set in the cookie
//         if (token) {
//           return <Component {...props} />;
//         } else {
//           // return the user to the landing page if there is no valid token set
//           return (
//             <Navigate
//               to={{
//                 pathname: "/login",
//                 state: {
//                   // sets the location a user was about to assess before being redirected to login
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// }; export default ProtectedRoutes ;
