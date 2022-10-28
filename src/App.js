import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tasks } from "./data.js"
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useState } from 'react';


function App() {
  //console.log(tasks)
  const [newtasks, setNewtasks] = useState(tasks)

  const addNewTask = (desc, title) => {
    setNewtasks([...newtasks,{description:desc, user:title.toUpperCase(),id:newtasks.length+1}])
  }

  const deleteTask=(id)=>{
    setNewtasks(newtasks.filter(el=>el.id!=id))

  }
  return (
    <div className="app">
      <h1>My todo</h1>
      <AddTask addNewTask={addNewTask} />
      <TaskList newtasks={newtasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;



/*
import React, { Component } from "react";
import Counter from "./components/Counter";


class App extends Component {
  constructor() {
    super()
    console.log("constructor app")
    this.state = { timerApp: 0, show: false ,time:new Date()}
  }

  componentDidMount() {
    console.log("component App mounted")
    setInterval(() => {
      this.setState({ timerApp: this.state.timerApp + 1 });
      this.setState({ time: new Date()});

    }, 1000);
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    console.log("first render")
    return (
      <div>
        <button onClick={this.toggle}>{this.state.show ? "hide" : "show"}</button>
        {this.state.show ? <Counter /> : null}
        <h1>TimerApp:{this.state.timerApp}</h1>
        <h1>Timer:{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;

*/
