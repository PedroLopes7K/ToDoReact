import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App'
import Main from './Components/Main'
import UpdateTask from './Components/UpdateTask'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  )
}
