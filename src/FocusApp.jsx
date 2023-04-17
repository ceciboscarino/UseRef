import  { useState, useRef } from 'react'


export default function FocusApp() {
  const [text, setText] = useState('')
  const inputRef = useRef()
  
  const handleClick = () => {
    console.log('Button was clicked')
    const input = inputRef.current
    input.focus()
  }

  return (
    <div>
        <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}

        />

        <button onClick={handleClick}>
          Tiii 
        </button>
    </div>
  )
}