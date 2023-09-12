import React from 'react'
import TaskRow from './TaskRow'

export default function TaskTable({ tasks, toggleTask, showcompleted = false }) {

    const taskTableRows = (doneValue) => {
        return (

            tasks.filter(task => task.done === doneValue).map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
            ))
        )
    }

    return (
        <table className='table table-dark table-striped table-bordered border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showcompleted)
                }
            </tbody>
        </table>
    )
}
