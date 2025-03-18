import { Routes } from '@angular/router';
import { MainPageComponent } from './toDo/pages/main-page/main-page.component';
import { CompletedTasksComponent } from './toDo/pages/completed-tasks/completed-tasks.component';
import { PendingTasksComponent } from './toDo/pages/pending-tasks/pending-tasks.component';
import { AddEditTaskPageComponent } from './toDo/pages/add-edit-task-page/add-edit-task-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent

  },
  {
    path: 'tasks-list',
    redirectTo: 'task-list'

  },
  {
    path: 'add-task',
    component: AddEditTaskPageComponent
  },
  {
    path: 'completed-tasks',
    component: CompletedTasksComponent
  },
  {
    path: 'pending-tasks',
    component: PendingTasksComponent
  },
  {
    path: '**',
    redirectTo: ''
  },

];
