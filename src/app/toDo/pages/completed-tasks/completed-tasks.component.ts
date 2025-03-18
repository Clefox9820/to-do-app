import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'to-do-completed-tasks',
  imports: [],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedTasksComponent { }
