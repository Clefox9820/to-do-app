import { effect, Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task';

const loadFromLocalStorage = (): Task[] => {

  const tasks = localStorage.getItem('tasks');

  return tasks ? JSON.parse(tasks) : [];
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  tasks = signal<Task[]>(loadFromLocalStorage())



  saveToLocalStorage = effect(() => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()))
  })

  addTask = (task: Task) => {
    this.tasks.update(list => [...list, task])
  }

  deleteFromLocalStorage = (task: Task) => {
    localStorage.removeItem('tasks')
    window.location.reload()
  }


  changeStatus = (task: Task) => {
    task.status = !task.status
    localStorage.setItem('tasks', JSON.stringify(this.tasks()))
    window.location.reload()
  }
  editTask = (task: Task) => {
    localStorage.getItem('tasks')

  }

}
