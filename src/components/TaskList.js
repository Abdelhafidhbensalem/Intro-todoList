import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {
    return (
        <div>
            {props.newtasks.map(el => <TaskItem key={el.id} el={el} deleteTask={props.deleteTask} />)}
        </div>
    )
}

export default TaskList