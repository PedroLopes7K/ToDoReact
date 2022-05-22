// import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
// import Task from './Components/Task'
import { Button } from './Components/StyledComponents'
import { Input } from './Components/StyledComponents'
import { Card } from './Components/StyledComponents'

function App() {
  const [taskName, setTaskName] = useState('')
  // const [time, setTime] = useState('')
  const [taskList, setTaskList] = useState([])

  const addTask = task => {
    setTaskList([...taskList, task])
    // console.log(taskList.length)
  }
  function del(taskDel) {
    console.log(taskDel)
    const result = taskList.filter(task => {
      return task != taskDel
    })
    setTaskList(result)
    // for (i; i < taskList.length; i++) {
    //   if (taskList[i] === taskDel) {
    //     setTaskList([taskList.splice(i, 1)])
    //     let newArray = taskList.splice(i, 1)
    //     setTaskList(newArray)
    //     return
    //   }
    // }
  }

  function edit() {
    alert('Editar')
  }

  return (
    <div className="App">
      <h2> To Do List</h2>
      <label>Task Name:</label>
      <Input
        type="text"
        onChange={e => {
          setTaskName(e.target.value)
        }}
      />

      <Button onClick={() => addTask(taskName)}>Add Task</Button>
      <hr color="gray" size="2" width="50%" />

      {taskList.map(taskItem => (
        <Card background={'gray'} width={'250px'} height={'120px'}>
          <h4>Task: {taskItem}</h4>
          <button
            onClick={() => del(taskItem)}
            style={{ background: 'red', margin: '0 10px' }}
          >
            Excluir
          </button>
          <button onClick={edit} style={{ background: 'blue' }}>
            Editar
          </button>
        </Card>
      ))}
    </div>
  )
}

export default App
