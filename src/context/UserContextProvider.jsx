import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

/*Here in {children}, there could be different components
but, we need to wrap them under <UserContext></UserContext> as we already know
that after creating a context, use it as a Provider, so we need to access its property
named "Provider", so it will be UserContext.Provider
What data will it access? We need to provide a data as a value.
Now since we have accessed the property Provider of UserContext, and we
also have wrapped the {children} within it, but we need to inform to {children}
that what values are we providing them to have access of?
ie., of what values, can {children} have access?

e.g, we can call APIs in UserContextProvider.jsx, and we can send the result(by saving in states)
to the wrapped components ie. {children}.

so now, we have created a store(ie. UserContextProvider), but from where can it be accessible?
go to App.jsx
*/
export default UserContextProvider;
