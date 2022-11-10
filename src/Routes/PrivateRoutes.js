import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';


    const PrivateRoutes = ({children}) => {

        const {loader,user}=useContext(AuthContext)
    const location=useLocation()
    
    if(loader){
        return <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
         
        </svg>
        Loading...
      </button>
    }
        if (user) {
            // Redirect them to the /login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // along to that page after they login, which is a nicer user experience
    
            return children;
    
    
        }
          // than dropping them off on the home page.
            return <Navigate to="/login" state={{ from: location }} replace />;
          
    
         
    
        
    };
    
    export default PrivateRoutes;