import {Route,Routes} from 'react-router-dom'
import './App.css'
import BrowserEditor from './pages/Editor/BrowserEditor'

function App() {
  return (
    <Routes>
      <Route path='/' element={<BrowserEditor/>}/>
    </Routes>
  )
}

export default App
