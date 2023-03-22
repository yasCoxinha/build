import React from 'react'
export default function App(){
  return(
      <div>
      <Cabecalho></Cabecalho>
      <Texto></Texto>
      <Cabecalho></Cabecalho>
      </div>
    )
}
export  function Cabecalho(){
  return(
      <div
       style={{
        backgroundColor:'black',
        height:'20vh'
       }} >
      </div>
    )
}
export  function Texto(){
  return(
      <div
        style={{
          paddingBotton:'20vh',
          paddingtop:'20vh'
        }}>
      <h1> rafael corno</h1>  
      </div>
    )
}
  

