export interface Task {
  id: number;
  name: string;
  description: string;
  initialDate: string;
  deadLine: string;
  type: string;
  status: boolean;
  visibility: boolean
}
