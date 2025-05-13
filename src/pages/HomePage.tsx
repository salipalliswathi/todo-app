import React from "react"
import UserProfile from "../components/UserProfile"
export default function homePage() {
  return (
    <div>
      I M HOME
      <UserProfile userDetails={{ name: 'swathi', lastName: 'salipalli' }} />
    </div>
  )
}