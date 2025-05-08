import { PriorityLevel } from "../Enum/priority-level";
import { Status } from "../Enum/status";

export interface Displaytask {
    id: number;
    title: string;
    description: string;
    dueDate: string;        
    status: Status;
    priorityLevel: PriorityLevel;
}
