// import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Task from './Components/Task'
import { Button } from './Components/StyledComponents'
import { Input } from './Components/StyledComponents'

function App() {
  const [taskName, setTaskName] = useState('')
  const [time, setTime] = useState('')
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }])
    console.log(taskList)
    setTaskName('')
    setTime('')
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
      <label>Time:</label>
      <Input
        type="text"
        onChange={e => {
          setTime(e.target.value)
        }}
      />

      <Button onClick={addTask}>Add Task</Button>
      <hr color="gray" size="2" width="50%" />

      {taskList.map(taskItem => (
        <Task nameTask={taskItem.task} time={taskItem.time} />
      ))}
    </div>
  )
}

export default App
