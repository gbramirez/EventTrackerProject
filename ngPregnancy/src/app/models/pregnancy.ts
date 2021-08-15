import { ThrowStmt } from "@angular/compiler";

export class Pregnancy {
  id: number;
  milestones: string;
  weeks: number;
  dueDate: string;
  completed: boolean;
  completeDate: string | null;

  constructor(
    id: number = 0,
    milestones: string = '',
    weeks: number = 0,
    dueDate: string = '',
    completed: boolean = false,
    completeDate: string = ''
  ) {
    this.id = id;
    this.milestones = milestones;
    this.weeks = weeks;
    this.dueDate = dueDate;
    this.completed = completed;
    this.completeDate = completeDate;
  }
}
