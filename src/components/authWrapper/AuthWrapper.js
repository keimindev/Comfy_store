import React from "react";
import { useAuth0 } from "@auth0/auth0-react"


const AuthWrapper = ({children}) => {
    const { isLoading, error } = useAuth0()

    if(isLoading){
        return (
            <>
            <div className="loading-page">
              <h1>Loading...</h1>
            </div>
            </>
          )
    }
    if(error){
        return (
            <>
              <h1>{error.message}</h1>
            </>
          )
    }
    return <>{children}</>

}

export default AuthWrapper