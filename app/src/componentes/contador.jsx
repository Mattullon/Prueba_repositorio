import React, {useState} from 'react'

    

const Contador = () => {
  
  const [contador,setContador]= useState(0);
  
  document.addEventListener("keydown",tecla)
  function tecla(e){
    const tecla1 = e.key
   
    if(tecla1 === "+") setContador(contador+1)
    if(tecla1 === "-") setContador(contador-1)
    if(tecla1 === "0") setContador(0)
  }

  
    return (
    <div>
      
      
      <h1> click : {contador}</h1>
      <button className='suma' onClick={()=>{setContador(contador+1)}}> + </button>
      <button className='reinicio' onClick={()=>{setContador(0)}}> reinicio </button>
      <button className='resta' onClick={()=>{setContador(contador-1)}}> - </button>
    
    </div>
  )
}

export default Contador;