import React from 'react'

const Task = (props) => {
    const {task, index, list, setList} = props
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        })
    }
    const onChange = () => {
        list[index].isComplete = !list[index].isComplete
        setList([...list])
    }
    return (
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="container">
                <label className="me-2" htmlFor="checkbox">Done</label>
                <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                <button className="btn btn-sm btn-danger ms-4" onClick={onClick}>remove</button>
            </div>
        </div>
    )
}

export default Task