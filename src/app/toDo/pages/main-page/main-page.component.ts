import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TasksListsComponent } from "../../components/tasks-lists/tasks-lists.component";
import { ToDoService } from '../../services/toDo.service';

@Component({
  selector: 'to-do-main-page',
  imports: [TasksListsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public ToDoService = inject(ToDoService)

}
