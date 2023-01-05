import React from 'react'
import styled from 'styled-components'
import { PlusCircle } from "phosphor-react";



function NewTask() {

function handleCreateTask(){
    var input = document.querySelector('.addTask');
    var task = input.value;
    console.log(task)
}

return (
    <StyledNewTask>
        <div className='taskBar'>
           <input  className='addTask' type="text" placeholder='Adicione uma nova tarefa...' />

           <button onClick={handleCreateTask}>
               Criar<PlusCircle size={20} />
           </button>
        </div>
    </StyledNewTask>
  )
}

export default NewTask

const StyledNewTask = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: -2rem;

.taskBar{
    display: flex;
    gap: 8px;
}

input{
    width: 638px;
    height: 54px;
    margin-bottom: 50px;
    border-radius: 10px;
    background-color: #262626;
    border: 1px solid black;
    color: white;
    padding-left: 16px;

}

input:focus-within{
    border: 1px solid #5E60CE;
}

button{
    width: 110px;
    height: 56px;
    border-radius: 10px;
    background-color: #1E6F9F;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

button:hover{
    background-color: #4EA8DE;
}

`