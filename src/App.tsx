
import Header from './components/Header'
import NewTask from './components/NewTask'
import TaskArea from './components/TaskArea';
import styled from 'styled-components'
import './global.css';
import {v4 as uuidv4} from 'uuid'

const tasks = [
  {
    id: uuidv4(),
    title:'Terminar o desafio',
    isComplete: true
  },
  {
    id: uuidv4(),
    title:'Estudar javascript',
    isComplete: false
  },
  {
    id: uuidv4(),
    title:'Treinar',
    isComplete: true
  },
]


console.log()


function App() {
  

  return (
    <StyledApp>
      <div className='App'>
          <Header/>
          <NewTask />
          <TaskArea/>
      </div>
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`

`