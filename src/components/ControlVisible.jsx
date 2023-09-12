import React from 'react'

export const ControlVisible=({setShowCompleted,cleanTask, ischecked})=> {
    const handleDelete=()=>{
            if(window.confirm('quieres eliminarlo??')){
                cleanTask()
            }
    }
  return (
    <div className='d-flex justify-content-between  bg-secondary text-white text-center p-2 border-secondary'>
    <div className='form-check form-switch'>
    <input className='form-check-input' checked={ischecked} type="checkbox" onChange={(e) => setShowCompleted(e.target.checked)} />{" "}
    <label >mostrar tareas hechas</label>
    </div>

    <button className='btn btn-danger btn-md' onClick={handleDelete}>Limpiar</button>
  </div>
  )
}
