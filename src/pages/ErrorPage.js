import { useState } from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  const [test, setTest] = useState("hola hola hola")
  return ( 
    <>
    {/* // <h1>Error 404 not found <a href="http://localhost:3000">Volver a la página principal</a></h1> */}
    <h1>Error 404 not found <Link to="/">Volver a la página principal</Link> {test}</h1>
    <button onClick={()=>setTest("chau chau chau")}>cambiar estado</button>
    </>
   );
}
 
export default ErrorPage;