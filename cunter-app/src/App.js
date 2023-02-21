import {Component} from 'react'
import '../src/index.css'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      counter:0
    }

  }
  plus = () => {
    this.setState({
      counter:this.state.counter+1
    })
  }
  minus = () => {
    this.setState({
      counter:this.state.counter-1
  })}
  reset = () => {
    this.setState({
      counter:0
    })
  }
  render(){

    return (
      <div className='main-div'>
        <h1>Counter app</h1>
        <span>{this.state.counter}</span>
        <div className='btn-div'>
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}