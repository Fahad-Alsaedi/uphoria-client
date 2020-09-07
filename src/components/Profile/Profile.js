import React from "react"
import VideoGrid from "./VideoGrid"
import UserInfo from "./UserInfo"
import "../../styles/Profile.css"

const Profile = (props) => {
  return(
    <>
      <UserInfo/>
    <div className="profile-display">
      <VideoGrid/>
    </div>
    </>
  )
}


export default Profile