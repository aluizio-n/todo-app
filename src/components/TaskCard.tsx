import React from 'react'
import styled from 'styled-components'
import { Trash } from "phosphor-react";

function TaskCard() {
  return (
    <StyledTaskCard>
        <div className='container'>
            <div className="taskCard">
                <input type="radio" />
                <p className='taskTitle'> Magni officiis expedita laborum sint repellat ipsa fuga facere voluptatibus facilis doloribus reprehenderit perferendis porro cum adipisci atque sed, sunt aliquid voluptatem.</p>
                <button>
                    <Trash size={24}/>
                </button>
            </div>
        </div>
    </StyledTaskCard>
  )
}

export default TaskCard


const StyledTaskCard = styled.div`

.taskCard{
  width: 736px;
  height: 72px;
  background-color: #262626;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  box-shadow: 0 2 8 0;
}

p{
    width: 632px;
    height: 40px;
    line-height: 19.6px;
}

input{
    border: 1px solid red;
    width: 20px;
    height: 20px;
    margin-left: 16px;
}

button{
    cursor: pointer;
    color: #808080;
    margin-right: 16px;
    background: transparent;
    border: none;
    transition: 0.2s;
}
button:hover{
    color:#F75A68;
}

`