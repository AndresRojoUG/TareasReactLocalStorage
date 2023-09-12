import React,{ useState }from 'react'

export default function TaskCreator(props) {
    const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();
    props.createNewTask(newTaskName)
    

    setNewTaskName('')
  }
  return (
    <>
    <form className='my-2 row' onSubmit={ handleSubmit}>
    <div className='col-9'>
      
    <input value={newTaskName} type="text" placeholder="ingresa nueva tarea" id="" onChange={(e) => {
        setNewTaskName(e.target.value)
        
      }} className='form-control' />
    </div>
      <div className='col-3'>
      <button className='btn btn-warning btn sm'>Guardar tarea</button>
      </div>
    </form>

  </>
  )
}
