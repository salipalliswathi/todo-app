import React from "react";
import './css/UserProfile.css';
interface UserDetails {
  [key: string]: string | number | boolean
}
interface UserProfileProps {
  userDetails: UserDetails
}
function UserProfile ({userDetails}: UserProfileProps) {
  return (
    <div className="user-profile">
       <div>{userDetails.name}</div>
       <div>{userDetails.lastName}</div>
    </div>
  )
}

export default UserProfile;