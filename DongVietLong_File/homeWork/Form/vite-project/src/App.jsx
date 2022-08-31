import { useState } from 'react'
import './App.css'
function App() {
  const [user, setUser] = useState('')
  const [name, setName] = useState([])
  // const [Age,setAge] = useState('')
  const handleSave = () => {
    setName((prev) => [...prev, user]);
    setUser('');
  }
  const handleDelete = (value) =>{
    setName(prev => prev.filter(a => a!==value))
  }
  const handleEdit = (value) => {
    setUser(value);
    setName(prev => prev.filter(a => a!==value))
  }
  return (
    <div className="App">
      <input value={user} onChange={e => setUser(e.target.value)} />
      {/* <input value={Age} onChange={e => setAge(e.target.value)}/> */}
      <button onClick={handleSave}>Save</button>
      <ul style={{ margin: 20 }}>
        {name.map((value, index) => (
          <li key={index}>{value}
            <button onClick={() => handleEdit(value)}>Edit</button>
            <button onClick={() => handleDelete(value)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
