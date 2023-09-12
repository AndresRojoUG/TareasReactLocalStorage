import React, { useState, useEffect } from 'react'
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import { ControlVisible } from './components/controlVisible';

export default function App() {

  const [tasksItems, setTaskItems] = useState([])
  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }])
    }


  }
  const [showcompleted, setShowCompleted] = useState(false)
  const toggleTask = task => {
    setTaskItems(tasksItems.map((t) => (t.name === task.name
      ? { ...t, done: !t.done } : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])
  const clearTask = () => {
    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  return (
    <main className='bg-dark vh-100 text-white'>
      <div className='container p-4 col-md-4 offset-md-4'>

        <TaskCreator createNewTask={createNewTask} />

        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <ControlVisible
          ischecked={showcompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)

          }
          cleanTask={clearTask} />
        {
          showcompleted === true && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showcompleted={showcompleted} />
          )
        }
      </div>


    </main>

  )
}
