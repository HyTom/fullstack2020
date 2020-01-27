import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [lista, setLista] = useState(Array(7+1).join('0').split('').map(parseFloat))
  const [isoin, setIsoin] = useState(0)
  
  const handleVote = () => {
      const t = [...lista]
      t[selected] += 1
      if (t[selected] > t[isoin]) {
            setIsoin(selected)
      }
      setLista(t)
  }

console.log(lista)
  return (
    <div>
         <h1> Anecdote of the day!</h1>
      {props.anecdotes[selected]}
      <div>
          Has {lista[selected]} votes!
      </div>
      <button onClick ={handleVote}>
        vote
        </button>
        <button onClick ={() => setSelected(Math.floor(Math.random() * 6))}>
        next
        </button>
        <h1> Anecdote with most votes:</h1>
        {props.anecdotes[isoin]}
        <div>
          Has {lista[isoin]} votes!
      </div>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
