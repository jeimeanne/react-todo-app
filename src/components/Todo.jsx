import React, { useEffect, useRef, useState } from 'react'
import todoIcon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  // using React Hook useState - declare a state variable called todoList and a function setTodoList to update it.
  // useState initializes the todoList state variable with an empty array []. This means todoList starts as an empty list, which can later be updated
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  
  const inputRef = useRef(); // Create a reference for the input field
 
  const addTodo = ()=> {
    const inputText = inputRef.current.value.trim();
    
    if (inputText === '') {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    }

    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = '';
  }

  const deleteTodo = (id)=> {
    setTodoList((prevTodos)=> {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id)=> {
    setTodoList((prevTodos)=> {
      return prevTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplete: !todo.isComplete }
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
        <div className='flex items-center mt-7  gap-2'>
            <img src={todoIcon} className='w-8'/>
            <h1 className='text-2xl font-semibold'>To-Do List</h1>
        </div>
        
        <div className='flex items-center my-7 bg-gray-200 border-gray-400 border-1 rounded-full'>
            <input ref={inputRef} type='text' placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-amber-500 placeholder:text-amber-500' />
            <button onClick={addTodo} className='rounded-full bg-amber-400 w-32 h-10 m-2 text-white font-medium cursor-pointer'>Add +</button>
        </div>

        <div>
          {todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
          })}
        </div>

    </div>
  )
}

export default Todo
