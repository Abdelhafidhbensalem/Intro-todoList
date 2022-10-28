import React from 'react'

const TaskItem = ({ el,deleteTask }) => {
    return (

        <div className="task" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: "5px", backgroundColor: "grey", margin: "10px" }}>
            <h1>{el.description}</h1>
            <p>{el.user}</p>
            <button onClick={()=>deleteTask(el.id)}>X</button>
        </div>

    )
}

export default TaskItem