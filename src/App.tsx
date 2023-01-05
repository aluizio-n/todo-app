
import Header from './components/Header'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks';
import styled from 'styled-components'
import './global.css';

function App() {
  

  return (
    <StyledApp>
      <div className='App'>
          <Header/>
          <NewTask/>
          <Tasks/>
      </div>
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`

`