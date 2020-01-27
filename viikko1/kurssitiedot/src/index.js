import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
    return (
    <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <>
      <Part eka={props.parts[0].name} toka={props.parts[0].exercises} />
      <Part eka={props.parts[1].name} toka={props.parts[1].exercises} />
      <Part eka={props.parts[2].name} toka={props.parts[2].exercises} />
      </>
    )
}

const Part = (props) => {
    return (
        <>
        <p>
        {props.eka} {props.toka}
      </p>
        </>
    )
}

const Total = (props) => {
    let x = 0;
    x += props.parts[0].exercises;
    x += props.parts[1].exercises;
    x += props.parts[2].exercises;
    return (
        <>
        <p>Number of exercises {x}</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))