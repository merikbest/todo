import * as React from "react";
import {useState, useEffect} from "react";
import {AxiosResponse} from 'axios';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import TodoService from "../../services/todo-service";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";
import Footer from "../footer/footer";

export type TodoObject = {
    id?: number,
    message: string,
    done: boolean,
    active: boolean,
    important: boolean
};

const App = () => {
    const [todos, setTodos] = useState<TodoObject[]>([]);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        TodoService.getAllTodos().then((response: AxiosResponse) => {
            setTodos(response.data);
        });
    }, []);

    const deleteItem = (id: number | undefined): void => {
        TodoService.deleteTodo(id).then((response: AxiosResponse) => {
            setTodos(todos.filter((todos) => todos.id !== id));
        });
    };

    const addItem = (message: string): void => {
        let todo: TodoObject = {
            message: message,
            done: false,
            active: false,
            important: false
        };

        TodoService.addTodo(todo).then((response: AxiosResponse) => {
            setTodos([...todos, response.data]);
        });
    };

    const toggleProperty = (todos: Array<TodoObject>, response: TodoObject, id: number | undefined): Array<TodoObject> => {
        const index = todos.findIndex((el) => el.id === id);

        return [
            ...todos.slice(0, index),
            response,
            ...todos.slice(index + 1)
        ];
    };

    const onToggleDone = (id: number | undefined): void => {
        TodoService.setDoneTodo({id: id}).then((response: AxiosResponse) => {
            setTodos(toggleProperty(todos, response.data, id));
        });
    };

    const onToggleImportant = (id: number | undefined): void => {
        TodoService.setImportantTodo({id: id}).then((response: AxiosResponse) => {
            setTodos(toggleProperty(todos, response.data, id));
        });
    };

    const onSearchChange = (term: string): void => {
        setTerm(term);
    };

    const onFilterChange = (filter: string): void => {
        setFilter(filter);
    };

    const searchTodo = (items: Array<TodoObject>, term: string): Array<TodoObject> => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.message.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    const filterTodo = (items: Array<TodoObject>, filter: string): Array<TodoObject> => {
        switch (filter) {
            case "all" :
                return items;
            case "active" :
                return items.filter((item) => !item.done);
            case "done" :
                return items.filter((item) => item.done);
            default :
                return items;
        }
    };

    const doneCount: number = todos.filter((item) => item.done).length;
    const todoCount: number = todos.length - doneCount;
    const visibleItems: Array<TodoObject> = filterTodo(searchTodo(todos, term), filter);

    return (
        <div>
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={onFilterChange}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={deleteItem}
                    onToggleImportant={onToggleImportant}
                    onToggleDone={onToggleDone}/>
                <ItemAddForm onItemAdded={addItem}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;