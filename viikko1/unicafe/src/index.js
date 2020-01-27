import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
        <h1> Give feedback</h1>
        <Button text="good" const={setGood} value={good} setAll={setAll} all={all}/>
        <Button text="neutral" const={setNeutral} value={neutral} setAll={setAll} all={all}/>
        <Button text="bad" const={setBad} value={bad} setAll={setAll} all={all}/>
      <h1> Statistics</h1>
      <StatisticsAvaaja good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const Button = (props) => {
    return (
    <button onClick={() => {props.const(props.value + 1); 
                            props.setAll(props.all + 1);}}>
        {props.text}
      </button>
    )
}

const StatisticsAvaaja = (props) => {
    if (props.all === 0) {
        return (
            <>
        <p> No feedback given</p>
            </>
        )
    }

    return (
        <Statistics good={props.good} neutral={props.neutral} bad={props.bad} all={props.all}/>
    )
}

const Statistics = (props) => {
    return (
    <>
    <table> 
        <tbody>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={props.all} />
    <StatisticLine text="average" value ={(props.good - props.bad) / (props.all)} />
    <StatisticLine text="positive" value ={100 / (props.all / props.good)} extra="%"/>
        </tbody>
    </table>
    </>
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
    <td> {props.text} </td> 
    <td> {props.value} {props.extra} </td>
     </tr>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
