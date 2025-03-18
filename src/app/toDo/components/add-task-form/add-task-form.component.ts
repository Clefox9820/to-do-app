import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { Task } from '../../interfaces/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'to-do-add-task-form',
  imports: [RouterLink],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskFormComponent {

  id = signal(0);
  name = signal('');
  description = signal('');
  initialDate = signal('');
  deadLine = signal('');
  type = signal('');
  status = signal(false);
  visibility = signal(true);

  newTask = output<Task>();

  taskToEdit = input<Task>();

  addTask = () => {
    if (!this.name() || !this.description() || !this.initialDate() || !this.deadLine() || !this.type()) {
      return;
    }

    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      description: this.description(),
      initialDate: this.initialDate(),
      deadLine: this.deadLine(),
      type: this.type(),
      status: this.status(),
      visibility: this.visibility()
    };

    this.newTask.emit(newTask);
    this.resetFields();
  }

  

  resetFields() {
    this.name.set('');
    this.description.set('');
    this.initialDate.set('');
    this.deadLine.set('');
    this.type.set('');
    this.status.set(false);
    this.visibility.set(true);
  }
}
