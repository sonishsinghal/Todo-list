import React from 'react'
 export const Todoitem = ({todo,onDelete}) => {
     let mystyle={
         border:"solid white 2px",
         borderRadius:"5px",
         padding:"20px",
         backgroundColor:"white",
         margin:"25px 0px",
         color:"black"
         

         
     }
    return (<>
        <div className="container" style={mystyle} >
            <h4>Todo {todo.sno}</h4>
            <p>Title: {todo.title}</p>
            <p>Description: {todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        
        </>
    )
}
//  export const Todoitem = (props) => {
//     return (
//         <div className="container" >
//             <h4>{props.todo.sno}</h4>
//             <p>{props.todo.title}</p>
//             <p>{props.todo.desc}</p>
//             <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
//         </div>
//     )
// }

