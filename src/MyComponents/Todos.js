import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
    let myStyle = {
        minHeight:"70vh",
        margin: "50px auto",
        // border: "solid white 2px",
        padding:"30px",
        color:"white",
        borderRadius:"10px",
        backgroundColor:" #3b4044",
        backgroundColor:" #2b2f33",
        backgroundColor:"  #34383d",
    }
    return (
        <div className="container" style={myStyle}>

        <h1 className="my-3" style={{color:"white"},{textAlign:"center"}}>Todos list</h1>
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo) =>{
         return(
          
             <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
             )
        })}
         
      </div>
    )
}
