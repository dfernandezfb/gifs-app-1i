import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const user = localStorage.getItem('user')

  return ( 
      !user? <Navigate to='/404'/>  : children
   );
}
 
export default PrivateRoute;