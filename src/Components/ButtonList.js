import React from 'react'
import Button from './Button'; 


 
const ButtonList = () => {
  return (
    <div className="flex" >
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Movies"/>
        <Button name="Live" />
        <Button name="Cricket"/>
        <Button name="Songs"/>
        <Button name="Cooking"/>
        <Button name="Comedy"/>
        <Button name="Soccer" />
    </div>
  )
}

export default ButtonList