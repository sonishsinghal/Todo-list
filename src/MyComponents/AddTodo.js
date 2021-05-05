import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
       e.preventDefault();
       if(!title || !desc){
           alert("Title description cannot be blank");
       }
       else{

           addTodo(title,desc);
           setTitle("");
           setDesc("");
        }
    }

    let mystyle={
        // border:"2px white solid",
        color:"white",
        borderRadius:"10px",
        padding:"20px 30px",
        backgroundColor:"#3b4044",
        backgroundColor:" #2b2f33",
        backgroundColor:"  #34383d",
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h1 style={{textAlign:"center"}}>Add Todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
                        className="form-control" id="tile" aria-describedby="emailHelp" />
                </div>
                    <label htmlFor="desc" className="form-label">Description:</label>
                <div className="mb-3">
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
