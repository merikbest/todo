import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";
import {TodoObject} from "../app/app";

type Props = {
    todos: Array<TodoObject>,
    onDeleted: (id: number | undefined) => void,
    onToggleImportant: (id: number | undefined) => void,
    onToggleDone: (id: number | undefined) => void
};

const TodoList: React.FC<Props> = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;