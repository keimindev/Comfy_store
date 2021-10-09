import React, { useEffect, useContext, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'



const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const { isAuthenticated, loginWithRedirect,  logout, user, isLoading } = useAuth0()

    const [myUser, setMyUser] = useState(null)


    useEffect ( () => {
        if(isAuthenticated){
            setMyUser(user)
        }else{
            setMyUser(false)
        }

    }, [isAuthenticated])
    
    return (
        <AuthContext.Provider value={{loginWithRedirect, logout, myUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    return useContext(AuthContext)
}