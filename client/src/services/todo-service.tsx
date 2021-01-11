import axios from 'axios';
import {TodoObject} from "../components/app/app";

const TODO_API_BASE_URL: string = "http://localhost:8080/api/v1/todo";
// const TODO_API_BASE_URL: string = "http://ec2-18-185-172-93.eu-central-1.compute.amazonaws.com:8080/api/v1/todo";

class TodoService {

    getAllTodos() {
        return axios.get(TODO_API_BASE_URL + "/all");
    }

    addTodo(todo: TodoObject) {
        return axios.post(TODO_API_BASE_URL + "/add", todo);
    }

    setDoneTodo(id: object) {
        return axios.put(TODO_API_BASE_URL + "/done", id);
    }

    setImportantTodo(id: object) {
        return axios.put(TODO_API_BASE_URL + "/important", id);
    }

    deleteTodo(id: number | undefined) {
        return axios.delete(TODO_API_BASE_URL + "/delete/" + id);
    }
}

export default new TodoService();