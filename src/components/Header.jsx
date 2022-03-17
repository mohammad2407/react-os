import React from 'react'
import { Litask } from './Litask.jsx'
export const Header = ({value,mobile}) => {
    console.log(value, mobile)
  return (
      <>
      <h1>{value}</h1>
      <ul>
      {
            mobile.map((item) => <Litask value = {item}/>)
        }
      </ul>
        

      </>
    
    
  )
}
