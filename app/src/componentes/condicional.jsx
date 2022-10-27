

import React, {useState} from 'react'



const Condicional = () => {
    document.addEventListener("keydown",tecla);
    const [condicion,setCondicion]= useState(true);
    function tecla(e){
        const tecla1 = e.key
        if(tecla1 === "f") setCondicion(false)
        if(tecla1 === "v") setCondicion(true)

        
       
    }
  return (
    <div> 
        
        
        <h1> condicional : { condicion }  </h1> 
        <button className='botonCond' onClick={()=>{setCondicion(!condicion)}}> alternar F/V </button>
        

        { condicion ? <h2> hola es verdadero  </h2> : <h3> es falso </h3> }
        
    </div>
  )
}

    


export default Condicional