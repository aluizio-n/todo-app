import React from 'react'
import styled from 'styled-components'

function Tasks() {
  return (
    <StyledTasks>
      <div className='container'>

        <div className='tasksInfo'>
          <div className='criadas'>Tarefas criadas<span>0</span></div>
          <div className='concluidas'>Concluidas<span>0</span></div>
        </div>

        <div className='tasks'>
          <div className='taskList'>
            <img src="./src/assets/Clipboard.svg" alt="" />
            <p className='a'>Você ainda não tem tarefas cadastradas</p>
            <p className='b'>Crie e organize seus itens a fazer</p>
            
          </div>
        </div>
      </div>
    </StyledTasks>
  )
}

export default Tasks

const StyledTasks = styled.div`
display: flex;
justify-content: center;
align-items: center;


.container{
  width: 736px;
  height: 287px;
 
}

.tasksInfo{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  font-weight: bold;
}

.criadas{
  color: #4da9de;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.concluidas{
  color: #8185fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}


.tasks{
  width: 736px;
  border-top: 1px solid #333333;
  border-radius: 10px;
  margin-top: 24px;
}

.taskList{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  
}

.taskList p{
 color: #808080;
}

.a{
  margin-top: 10px;
  font-weight: bold;
}

span{
  color: white;
  background-color: #333333;
  border-radius: 35%;
  width: 25px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  font-size: 12px;
}

`
