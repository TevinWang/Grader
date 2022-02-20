import React, { useState, useEffect, createContext } from "react";
import { auth } from "./firebase"
export const UserContext = createContext({ user: null })
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, email } = user;
      setuser({
        displayName,
        email
      })
    })
  }, [])
  return (
    <UserContext.Provider value={user}></UserContext.Provider>
  )
}