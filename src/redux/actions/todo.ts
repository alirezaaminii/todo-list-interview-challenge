import * as types from '../../constants/actionTypes';
import TodoModel from "../../models/todo/todo.model";

export interface getTodosSuccess {
    type: typeof types.GET_TODO_SUCCESS,
    payload: TodoModel[]
}

export interface getTodosFailure {
    type: typeof types.GET_TODO_FAILURE,
    payload: any
}

// create
export interface createTodoSuccess {
    type: typeof types.CREATE_TODO_SUCCESS,
    payload: TodoModel
}


// delete
export interface deleteTodoSuccess {
    type: typeof types.DELETE_TODO_SUCCESS,
    payload: number
}


// toggle complete
export interface toggleCompleteTodosSuccess {
    type: typeof types.TOGGLE_COMPLETE_TODO_SUCCESS,
    payload: number
}

// show
export interface showTodoSuccess {
    type: typeof types.SHOW_TODO_SUCCESS,
    payload: TodoModel
}

// update
export interface updateTodoSuccess {
    type: typeof types.UPDATE_TODO_SUCCESS,
    payload: TodoModel
}


export type TodoDispatchTypes =
    getTodosSuccess | getTodosFailure |
    createTodoSuccess |
    deleteTodoSuccess |
    toggleCompleteTodosSuccess |
    showTodoSuccess |
    updateTodoSuccess
