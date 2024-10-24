import React, { useContext } from "react";
import UserContext from "../context/userContext";

//same concept is applied as Login.jsx, here we will fetch {user} from UserContext.Provider & we will receive user's username &
//will display here in <Profile/> Profile.jsx
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return <div>Welcome, {user.username}</div>;
}

export default Profile;
