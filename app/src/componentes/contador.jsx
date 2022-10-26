import React, {useState} from 'react'

const Contador = () => {
    const [contador,setContador]=useState(0);
    document.addEventListener("keydown", tecla)
    function tecla(e){
        const teclado=e.key 
        if(teclado === "+") setContador(contador+1)
        if(teclado === "-") setContador(contador-1)
        if(teclado === "0") setContador(0)
    }

  return (
    <>
    
    <div> 
    
        <h1> CONTADOR
            <br/>
            
            
            <h2 className='click' >CLICK : {contador}  </h2>
            <button className='suma' onClick={()=>{setContador(contador+1)}}> +  </button>
            <button className='reinicio' onClick={()=>{setContador(0)}}> reinicio  </button>
            <button className='resta' onClick={()=>{setContador(contador-1)}}> --  </button>





        </h1>
   
   
    </div>
    
    
    
    </>
 
    )
}

export default Contador
