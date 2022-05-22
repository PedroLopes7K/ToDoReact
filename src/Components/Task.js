import React from 'react'
import { Card } from './StyledComponents'

export default function Task({ nameTask, arrayTasks }) {
  // console.log(`Meu sistema operacional favorito é ${elemento}!`)

  function del(taskDel) {
    // alert('deletar')
    let i = 0
    console.log(arrayTasks.length)
    for (i; i <= arrayTasks.length; i++) {
      if (arrayTasks[i] == taskDel) {
        arrayTasks = arrayTasks.splice(i, 1)
      }
    }
  }
  return (
    <Card background={'gray'} width={'250px'} height={'120px'}>
      <h4>Task: {nameTask}</h4>
      <button onClick={() => del(nameTask)} style={{ background: 'red' }}>
        Excluir
      </button>
    </Card>
  )
}
