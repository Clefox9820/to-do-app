import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddTaskFormComponent } from "../../components/add-task-form/add-task-form.component";
import { ToDoService } from '../../services/toDo.service';

@Component({
  selector: 'to-do-add-edit-task-page',
  imports: [AddTaskFormComponent],
  templateUrl: './add-edit-task-page.component.html',
  styleUrl: './add-edit-task-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditTaskPageComponent {

  public ToDoService = inject(ToDoService);


}
