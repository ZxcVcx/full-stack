import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick(props.state + 1)}>
      {props.text}
    </button>
  )
}

const Feedback = (props) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={props.feedbacks[0]} state={props.states[0]} text={"good"}></Button>
      <Button handleClick={props.feedbacks[1]} state={props.states[1]} text={"neutral"}></Button>
      <Button handleClick={props.feedbacks[2]} state={props.states[2]} text={"bad"}></Button>
    </>
  )
}

const Statistics = ({ states }) => {
  const count = states[0] + states[1] + states[2]
  const average = (states[0] * 1 + states[2] * -1) / count
  const positive = states[0] * 100 / count
  if (count === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{states[0]}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{states[1]}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{states[2]}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{count}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>

      </table>
    </>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = [setGood, setNeutral, setBad]
  const states = [good, neutral, bad]

  return (
    <div>
      <Feedback feedbacks={feedbacks} states={states} />
      <Statistics states={states} />
    </div>
  )
}

export default App;
