import { useEffect, useState } from 'react'
import Header from './components/Header'
import NotesForm from './components/NotesForm'
import NotesCard from './components/NotesCard';
import SearchBar from './components/SearchBar';


function App() {
  const [update, setupdate] = useState(null)
  const [notes, setnotes] = useState(()=>{
    const updated = localStorage.getItem("key");
    return updated ? JSON.parse(updated) : []
  }
)
 useEffect(() => {
   localStorage.setItem("key",JSON.stringify(notes))
 }, [notes])
 const [inputVal , setInputVal] = useState("")
 
const handleInput = (e) => {
  setInputVal(e.target.value)
}

  return (
    <>
    <div className='md:m-10 bg-[#F0F2F5] rounded-2xl'>
      <Header/>
      <NotesForm setnotes={setnotes} notes={notes} update={update} setupdate={setupdate}/>
      <SearchBar value={inputVal} onChangeHandler={handleInput}/>
      <NotesCard value={inputVal}  notes={notes} setnotes={setnotes} setupdate={setupdate}/>
    </div>
   
    </>
  )
}

export default App
