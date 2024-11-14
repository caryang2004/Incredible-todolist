/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';



function App() {

  // Step lab3.A.3-4: Define the state variable `tasks` with useState and initialize it with hard-coded tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    // Implement the logic to add a new task
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
    
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} tasks={tasks} />  {/* Passing addTask function as a prop to ToDoForm */}

      
    </SafeAreaView>
  );

};

export default App;
