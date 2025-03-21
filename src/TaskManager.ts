interface TaskDTO{
    id:number;
    name:string;
    status:"Completed"|"Pending";
}
export class TaskManager{
    private tasks: TaskDTO[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
        if(name.trim() === "") return //usually we throw an error in async

        const newTask:TaskDTO={
            id: this.currentId++, //cuurent id in increment here using postIncrement
            name,
            status: "Pending"
        }
        this.tasks.push(newTask);
    }
    completeTask(id: number): void {
        const index=this.tasks.findIndex(task=>task.id===id)
        if(index===-1){
            console.log("Invalid task id: ",id)
            return //also here we throw an error
        }
        this.tasks[index].status = "Completed"
    }
    displayTasks(): void {
        this.tasks.map(task=>{
            console.log(`Task ID: ${task.id}, Task Name: ${task.name}, Task Status: ${task.status}`)
        })
    }
}