import React from 'react'

export default function Task({ nameTask, time }) {
  return (
    <div className="bodyTask">
      <h4>Task: {nameTask}</h4>
      <h4> Time: {time}</h4>
    </div>
  )
}
