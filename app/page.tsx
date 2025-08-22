"use client"; // This is a Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle"; // Assuming this path is correct

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    const id = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    setTasks([...tasks, { id, text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="w-full max-w-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-300">
        <CardHeader>
          <CardTitle className="text-center text-blue-dashboard font-bold text-2xl">To-Do List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTask();
                }
              }}
              className="flex-grow"
            />
            <Button onClick={addTask} className="bg-green-dashboard hover:bg-green-dashboard/90">Add</Button>
          </div>
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-2 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <Label className="flex items-center space-x-2 cursor-pointer" onClick={() => toggleTaskCompletion(task.id)}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                    className="form-checkbox"
                  />
                  <span>{task.text}</span>
                </Label>
                <Button variant="destructive" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}