import React from 'react'
import { Card } from './StyledComponents'

export default function Task({ nameTask, time }) {
  // console.log(`Meu sistema operacional favorito é ${elemento}!`)
  return (
    <Card background={'gray'} width={'250px'} height={'120px'}>
      <h4>Task: {nameTask}</h4>
      <h4> Time: {time}</h4>
    </Card>
  )
}
