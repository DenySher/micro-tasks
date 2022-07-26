import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType

}
function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });



    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        // setTasks([...tasks]);
    }

    function changeFilter(todoListID: string, value: FilterValuesType) { // принимаем на входе todoLListID для определения todolist и value для фильтра
        setTodolists(todolists.map( // не делаем копию массива так как map возвращает уже новый массив
            el => el.id === todoListID // сравнимаем у каждого элемента id 
                ? { ...el, filter: value } // и если оно совпадает с todoLListID, то перезаписываем значение свойства filter на value
                : el)) // иначе просто возвращаем все элементы как были
    }

    return (
        <div className="App">
            {todolists.map((el) => { // прошлись map по [] c todoLists
                let tasksForTodolist = tasks[el.id] // берем у каждого элемента id (todolistID1 для первого листа и todolistID2 для второго листа)
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false) // берем каждый лист по айдишнику, и фильтруем 
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist key={el.id}
                        todoListID={el.id} // берем у каждого элемента id (todolistID1 для первого листа и todolistID2 для второго листа)
                        title={el.title} // вывели title из каждого todoLists
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter} // вывели значеине filter из каждого todoLists
                    />
                )
            })}

        </div>
    );
}

export default App;
