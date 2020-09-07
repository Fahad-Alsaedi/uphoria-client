import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import "../../styles/Profile.css"

const Profile = (props) => {
  return(
    <div className="profile-display">
      <UserInfo/>
      <VideoGrid/>
    </div>
  )
}


export default Profile