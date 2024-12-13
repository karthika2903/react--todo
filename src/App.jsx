import React, { useState } from 'react'

function App() {
    const [text, setText] = useState('');
    const [add, setAdd] = useState([]);

    function todo(){
        setAdd([...add,text])
        setText('');
    }
    return (
        <div>
            <h1>To-do list</h1>
            <input type='text'value={text} placeholder='typing....' onChange={(e)=> setText(e.target.value)} style={{padding:"6px"}}></input>
            <button  onClick={todo} style={{border:"none", backgroundColor:"purple",padding:"8px 15px", margin:" 0 10px", borderRadius:"4px", color:"white"}}>Add</button>
    
        <ul style={{listStyleType:"none"}}>
            {add.map((items)=>(
                <li key={items}>{items}</li>
            ))}
        </ul>

        </div>
    )
};

export default App
