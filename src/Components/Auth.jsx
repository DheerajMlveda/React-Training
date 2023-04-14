import React from 'react'
import { useState ,useContext} from 'react';
 const AuthContext = React.createContext();




function AuthProvider(props) {
    const [user, setUser] = useState(null);


    const logIn = (user) =>{
      console.log(user)
      setUser(user);
      console.log(user)
    }

    const logOut = () =>{
        setUser(null);
    }
  return (
    <AuthContext.Provider  value = {{logIn , logOut , user }}>
        {props.children}
    </AuthContext.Provider>
  )
}


export const useAuth = () =>{   return useContext(AuthContext)}

export default AuthProvider;