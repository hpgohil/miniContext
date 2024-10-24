import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

//In this component we will learn how can we use the value prop provided in Provider, and
//use the data of value prop to send data from <Login/> component back to Provider component.

function Login() {
  //here in <input> field we have set placeholders username & password,
  // and to enter the values in the field, we need a state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //these states are not controlled yet, still in the air.. to control them, we need value property in <input/> field, value={username}
  //ie., the value of the field will be governed by the {username} state. At the same time, whenever there is a change in this field,
  //the state "username" should also be updated. In the onChange property, we will fire a callback, will take the event ocurred, and
  //then will pass the value of that event in setter function which will render the component again and update the state value with that event value.

  //Now, the question is ===> How can we fetch values from UserContext? Ans: useContext() hook
  const { setUser } = useContext(UserContext);
  //we need to provide context, because useContext() doesn't know from which context do you want to fetch {setUser}?
  //setUser was passed in <UserContext.Provider value={{setUser, user}}. Now, we have fetched it using useContext();
  //VERY IMPORTANT:
  //we passed {user, setUser} from UserContext.Provider because if we want to get any value from Provider, we will get it through {user}
  //But, if we want to send any value to Provider and change the state there in Provider, we will fetch {setUser} and will provide the data
  //in setUser() setter function which will update the state in <UserContextProvider/> component.

  const handleSubmit = (e) => {
    e.preventDefault();
    //since we have fetched setUser, now we will provider username & password in this setter function which will render the <UserContextProvider/>
    //component and update the user state; keep in mind that user state is an object format
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"  "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
