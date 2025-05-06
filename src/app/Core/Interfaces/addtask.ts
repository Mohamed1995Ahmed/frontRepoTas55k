export interface Addtask {
    title: string;
    description: string;
    dueDate: string;         // ISO string format
    status: 'New' | 'InProgress' | 'Completed' | 'Archived';
    priorityLevel: 'Low' | 'Medium' | 'High';
}
