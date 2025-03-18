import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'to-do-pending-tasks',
  imports: [],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PendingTasksComponent { }
