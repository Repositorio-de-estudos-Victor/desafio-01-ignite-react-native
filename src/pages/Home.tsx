import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === '') {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    let copyTasks = [...tasks]
    
    const taskIndex = copyTasks.findIndex(task => task.id === id);

    copyTasks[taskIndex].done = !copyTasks[taskIndex].done;

    setTasks(copyTasks)
  }

  function handleRemoveTask(id: number) {
    let copyTasks = [...tasks]

    const arrayWithExlcudeItem = copyTasks.filter(task => !(task.id === id));

    setTasks(arrayWithExlcudeItem);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}