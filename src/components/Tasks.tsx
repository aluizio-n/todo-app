import React from 'react'
import styled from 'styled-components'

function Tasks() {
  return (
    <StyledTasks>
      <div className='container'>
        <div className='tasksInfo'>
          <p className='criadas'>Tarefas criadas 0 </p>
          <p className='concluidas'>Concluidas 0 </p>
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
}

.concluidas{
  color: #8185fa;
}

.tasks{
  width: 736px;
  border-top: 1px solid #333333;
  border-radius: 10px;
  padding-top:20px;
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
`
