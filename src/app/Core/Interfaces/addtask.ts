export interface Addtask {
    title: string;
    description: string;
    dueDate: string;         
    status: 'New' | 'InProgress' | 'Completed' | 'Archived';
    priorityLevel: 'Low' | 'Medium' | 'High';
}
