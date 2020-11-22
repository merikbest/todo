import React, {Component} from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";

import "./app.css";

class App extends Component {

    state = {
        todoData: [
            {label: "Drink Coffee", important: false, id: 1},
            {label: "Make awesome app", important: true, id: 2},
            {label: "Unblocking from Black List ;)", important: true, id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        const {todoData} = this.state;

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}

export default App;

// const App = () => {
//
//     const todoData = [
//         { label: "Drink Coffee", important: false, id: 1 },
//         { label: "Make awesome app", important: true, id: 2 },
//         { label: "Unblocking from Black List ;)", important: true, id: 3 },
//     ];
//
//     return (
//         <div className="todo-app">
//             <AppHeader toDo={1} done={3} />
//             <div className="top-panel d-flex">
//                 <SearchPanel />
//                 <ItemStatusFilter />
//             </div>
//
//             <TodoList
//                 todos={todoData}
//                 onDeleted={(id) => console.log("del ", id)}
//             />
//         </div>
//     );
// };
//
// export default App;