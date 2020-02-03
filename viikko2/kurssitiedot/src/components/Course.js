import React from 'react'

const Course = ( {course} ) => {
  return (
    <>
    < Header name={course.name}/>
    < Content course={course} />
    < Total parts={course.parts} />
    </>
  )
}

const Header = ( {name} ) => {
    return (
    <h1>{name}</h1>
    )
}

const Content = ( {course} ) => {
  return (<>
    {course.parts.map(part => <div key={part.id}>
      <Part eka={part.name} toka={part.exercises} />
    </div>)}
  </>)
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

const Total = ( {parts} ) => {
    let x = 0;
    const numbers = []
    parts.map(part =>
      numbers.push(part.exercises))
    x = numbers.reduce(reducer, 0)
    return (
        <>
        <b>total of exercises {x}</b>
        </>
    )
}

const reducer = (accumulator, item) => {
  return accumulator + item;
}

export default Course