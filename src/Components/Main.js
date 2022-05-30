import { useState } from 'react'
import { Button, Input, Card } from './StyledComponents'
import UpdateTask from './UpdateTask'
// import { Link } from 'react-router-dom'

function Main() {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState([])
  const [update, setUpdate] = useState(false)
  const [idTask, setIdTask] = useState(null)

  const addTask = task => {
    if (task === '') {
      alert('Preencha a tarefa')
      return
    }
    setTaskList([
      ...taskList,
      { nameTask: task, id: Math.floor(Math.random() * 9999) }
    ])
    // console.log(taskList.length)
  }
  function del(taskDel) {
    console.log(taskDel)
    const result = taskList.filter(task => {
      return task.id !== taskDel
    })
    setTaskList(result)
  }

  function edit(id) {
    // alert('Editar')
    setIdTask(id)
    setUpdate(true)
  }

  return (
    <div className="App">
      <h2> To Do List</h2>
      {update ? (
        <UpdateTask
          id={idTask}
          tasks={taskList}
          update={setUpdate}
          taskSet={setTaskList}
        />
      ) : (
        <>
          <label>Task Name:</label>
          <Input
            type="text"
            onChange={e => {
              setTaskName(e.target.value)
            }}
          />
          <Button onClick={() => addTask(taskName)}>Add Task</Button>
          <hr color="gray" size="2" width="50%" />
        </>
      )}

      {taskList.map(taskItem => (
        <Card background={'gray'} width={'250px'} height={'120px'}>
          <h4>Task: {taskItem.nameTask}</h4>
          <span>{taskItem.id}</span>
          <button
            onClick={() => del(taskItem.id)}
            style={{ background: 'red', margin: '0 10px' }}
          >
            Excluir
          </button>
          <button
            onClick={() => edit(taskItem.id)}
            style={{ background: 'blue' }}
          >
            Editar
          </button>
        </Card>
      ))}
    </div>
  )
}

export default Main
