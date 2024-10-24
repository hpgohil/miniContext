import React from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  //Now, in return(), we will provide <Login/> & <Profile/> components, how the Provider values are going to be accessed in these components - is
  // already explained in the components.
  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
/*
<UserContextProvider>
// whatever components we write here will be able to access the store
these components are going to be {children} in UserContextProvider.jsx component
and there these {children} will be able to access all data
let's create two components <Login/> & <Profile/>. We will learn how can we send data
to these components and also how can we receive data from these components
</UserContextProvider>


*/

export default App;
