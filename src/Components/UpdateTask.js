import React from 'react'
import { Input, Button } from './StyledComponents'
import { useState } from 'react'

export default function UpdateTask({ id, tasks, update, taskSet }) {
  const [newTask, setNewTask] = useState('')

  function updateTask(task) {
    // alert(newTask)
    tasks.forEach(element => {
      if (element.id === id) {
        element.nameTask = task
      }
    })
    taskSet(tasks)
    update(false)
  }

  function back() {
    update(false)
  }
  return (
    <div>
      <label>Update Task:</label>
      <Input
        type="text"
        onChange={e => {
          setNewTask(e.target.value)
        }}
      />
      <br />
      <Button onClick={() => updateTask(newTask)}>Update Task</Button>
      <Button onClick={() => back()}>Back Add</Button>
      {/* <hr color="gray" size="2" width="50%" /> */}
    </div>
  )
}
