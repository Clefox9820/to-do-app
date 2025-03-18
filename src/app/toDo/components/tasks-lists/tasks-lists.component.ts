import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';
import { ToDoService } from '../../services/toDo.service';

@Component({
  selector: 'to-do-tasks-lists',
  imports: [RouterLink],
  templateUrl: './tasks-lists.component.html',
  styleUrl: './tasks-lists.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListsComponent {

  tasks = input.required<Task[]>()

  public ToDoService = inject(ToDoService)

}

