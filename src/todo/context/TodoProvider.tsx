import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'Aprender TypeScript',
            completed: false
        },
        {
            id: '2',
            description: 'Tomar un curso de TypeScript',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE );

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id }})
    }

    return(
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}