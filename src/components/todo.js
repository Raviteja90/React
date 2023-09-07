
import { useState } from "react";

const Todo=()=>{
    const [currentTodo,setCurrentTodo]=useState('');
    const [allTodos,setAllTodos]=useState([]);
    const [editingIndex,setEditingIndex]=useState(undefined);
    //const [deleteIndex,setDeleteIndex]=useState(undefined)
    const HandleonChange=(event)=>{
        return setCurrentTodo(event.target.value)
    }
    const handleSubmit=()=>{
        if(editingIndex!==undefined){
            const newList=allTodos.map((todo,index)=>{
                if(index===editingIndex) return currentTodo;
                return todo;
            });
            setAllTodos(newList);
            setEditingIndex(undefined);
            setCurrentTodo('');
        }else{
            const newTodoList=[...allTodos,currentTodo];
            setAllTodos(newTodoList);
            setCurrentTodo('');
        }
    }
    const handleEdit=(index)=>{
        setEditingIndex(index);
        setCurrentTodo(allTodos[index])
    }
    const handleDelet=(index)=>{
        const filteredArr = allTodos.filter((_, i) => i !== index);
        setAllTodos(filteredArr);
        //setDeleteIndex(undefined);
        setCurrentTodo('');
    }
           
    return(
        <div >
            <input type="text" value={currentTodo} onChange={HandleonChange}></input>
            <br></br>
            <button onClick={handleSubmit} className="bu">Submit</button>
            <table className="table"  >
                <thead>
                    <tr>
                        <td>Index</td>
                        <td>Task</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {allTodos.length===0?(
                        <p>No Todos Available</p>
                    ):allTodos.map((todo,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{todo}</td>
                                <td>{
                                    editingIndex===index?null:(
                                        <div>
                                            <button className="edit" onClick={()=>handleEdit(index)}>Edit</button>
                                            <button className="remove" onClick={()=>handleDelet(index)}>Delete</button>
                                        </div>
                                    )
                                }
                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}
export default Todo;