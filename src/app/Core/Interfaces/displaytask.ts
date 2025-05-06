export interface Displaytask {
    id: number;
    title: string;
    description: string;
    dueDate: string;         // ISO string format
    status: 'New' | 'InProgress' | 'Completed' | 'Archived';
    priorityLevel: 'Low' | 'Medium' | 'High';
}
