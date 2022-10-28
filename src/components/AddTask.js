import React, { useState } from 'react'

const AddTask = ({ addNewTask }) => {
    const [desc, setDesc] = useState("")
    const [user, setUser] = useState("")
    const handleClick = () => {
        if (desc == "" || user == "") {
            alert("fields description and user required")
            return;
        }
        addNewTask(desc, user);
        setDesc("");
        setUser("")
    }
    return (
        <div>
            <input value={desc} placeholder="add desc" onChange={(e) => setDesc(e.target.value)} />
            <input value={user} placeholder="add name" onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleClick}> Add task</button>
        </div>
    )
}

export default AddTask