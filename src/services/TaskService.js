import { baseService } from "./baseService";

export class TaskService extends baseService {

    constructor(){
        super();
    }
    createTask = (taskObject) => {
        return this.post('Project/createTask',taskObject);
    }


    getTaskDetail = (taskId) => {
        return this.get(`Project/getTaskDetail?taskId=${taskId}`)
    }

    updateStatusTask = (taskStatusUpdate) => {
        return this.put(`Project/updateStatus`,taskStatusUpdate);
    }
    updateTask = (taskUpdate) => {
        return this.post(`Project/updateTask`,taskUpdate);
    }

    insertComment = (values) =>{
        return this.post(`Comment/insertComment`,values);
    }

    deleteComment = (idComment) =>{
        return this.delete(`Comment/deleteComment?idComment=${idComment}`)
    }

    updateComment = (values) =>{
        return this.post(`Comment/updateComment?id=${values.id}&contentComment=${values.contentComment}`);
    }
}   


export const taskService = new TaskService();