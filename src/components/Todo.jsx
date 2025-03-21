import React from 'react'
import todoIcon from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
        <div className='flex items-center mt-7  gap-2'>
            <img src={todoIcon} className='w-8'/>
            <h1 className='text-2xl font-semibold'>To-Do List</h1>
        </div>
        
        <div className='flex items-center my-7 bg-gray-200 border-gray-400 border-1 rounded-full'>
            <input type='text' placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-amber-500 placeholder:text-amber-500' />
            <button className='rounded-full bg-amber-400 w-32 h-10 m-2 text-white font-medium cursor-pointer'>Add +</button>
        </div>

    </div>
  )
}

export default Todo
