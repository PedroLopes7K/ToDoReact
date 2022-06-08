import { useState, useEffect } from 'react'
import { Button, Input, Card } from './StyledComponents'
import UpdateTask from './UpdateTask'
// import { Link } from 'react-router-dom'

function Main() {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState(() => {
    const tasks = localStorage.getItem('task')
    const initialTasks = JSON.parse(tasks)
    return initialTasks || []
  })
  const [update, setUpdate] = useState(false)
  const [idTask, setIdTask] = useState(null)
  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem('tarefa'))
  //   if (tasks) {
  //     setTaskList(tasks)
  //   }
  // }, [])

  // SAVE
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskList))
    // console.log(taskList)
  }, [taskList])

  const addTask = task => {
    if (task === '') {
      alert('Preencha a tarefa')
      return
    }
    setTaskList([
      ...taskList,
      { nameTask: task, id: Math.floor(Math.random() * 9999) }
    ])
  }
  function del(taskDel) {
    // console.log(taskDel)
    const result = taskList.filter(task => {
      return task.id !== taskDel
    })
    setTaskList(result)
  }

  function edit(id) {
    setIdTask(id)
    setUpdate(true)
  }

  return (
    <div className="App">
      <h2> To Do List</h2>
      <div className="top">
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
          </>
        )}
      </div>
      <hr color="gray" size="2" width="50%" />

      {taskList.map(taskItem => (
        <Card key={taskItem.id} background={'#3BB0BD'} width={'250px'}>
          <h4>Task: {taskItem.nameTask}</h4>
          {/* <span>{taskItem.id}</span> */}

          <div>
            <Button
              onClick={() => del(taskItem.id)}
              style={{ background: 'red', margin: '0 10px' }}
            >
              Excluir
            </Button>
            <Button
              onClick={() => edit(taskItem.id)}
              style={{ background: 'blue' }}
            >
              Editar
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Main
