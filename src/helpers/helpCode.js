import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState('chao')
  const [state2, setState2] = useState('chao2')
  const [state3, setState3] = useState('chao3')
// //! ESCUCHA CUANDO SE MONTA EL COMPONENTE
//   useEffect(()=>{
//     console.log('El componente App se montó');
//   })
//   //! ESCUCHA CUANDO SE MONTA EL COMPONENTE Y CUANDO CAMBIAN LOS ESTADOS DEL ARRAY
//   useEffect(()=>{
//     console.log('El componente App se montó');
//   },[state, state2])
//   //! ESCUCHA CUANDO SE MONTA EL COMPONENTE Y CUANDO CAMBIAN LOS ESTADOS DEL ARRAY (NO HAY NINGUNO)
//   useEffect(()=>{
//     console.log('El componente App se montó');
//   },[])
//   //! EN EL CALLBACK DEL RETURN SE PONE EL CODIGO QUE SE EJECUTA CUANDO SE DESMONTA EL COMPONENTE

useEffect(()=>{
    console.log('El componente App se montó');
    return ()=> console.log('El componente app se desmontó');
  },[state])
  return (
    <>
    <h1>hoa</h1>
    <button onClick={()=>setState('hoa')}>cambiar estado</button>
    <button onClick={()=>setState2('hoa2')}>cambiar estado2</button>
    <button onClick={()=>setState3('hoa3')}>cambiar estado3</button>
    </>
  );
}

export default App;
