import React from "react"
import './header.css'

interface NameProps{
    name:string
}
    const Header = (props:NameProps)=>{
     
        return (
        <div className='header'>
            <h1 className='header-title'>
               {props.name}  List   
            </h1>
            
        </div>
    )
}

export default Header