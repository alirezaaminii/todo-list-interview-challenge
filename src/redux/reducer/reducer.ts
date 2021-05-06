import TodoModel from "../../models/todo/todo.model";
import {TodoDispatchTypes} from "../actions/todo";
import * as types from '../../constants/actionTypes';

export interface initialStateInterface {
    todos: {
        loading: boolean,
        data: TodoModel[],
    },
    singleTodo: TodoModel | null

}

export const initialState = {
    todos: {
        loading: true,
        data: []
    },
    singleTodo: null
};


export const reducer = (state: initialStateInterface = initialState, action: TodoDispatchTypes) => {
    switch (action.type) {

        case types.GET_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    data: action.payload,
                    loading: false
                }
            };
        case types.GET_TODO_FAILURE:
            return {
                ...state,
                todos: {
                    data: [],
                    loading: false
                }
            };

        case types.CREATE_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    data: [
                        {
                            ...action.payload,
                            id: state.todos.data.length > 0 ? state.todos.data[0].id + 1 : 1
                        },
                        ...state.todos.data
                    ],
                    loading: false
                }
            };

        case types.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    data: state.todos.data.filter(item => item.id !== action.payload),
                    loading: false
                },
                singleTodo: null
            };

        case types.TOGGLE_COMPLETE_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    data: state.todos.data.map(item => item.id === action.payload ? {...item, done: !item.done} : item),
                    loading: false
                }
            };

        case types.SHOW_TODO_SUCCESS:
            return {
                ...state,
                singleTodo: action.payload
            };

        case types.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    data: state.todos.data.map(item => item.id === action.payload.id ? {...action.payload} : item),
                    loading: false
                },
                singleTodo: action.payload
            };

        default:
            return state;
    }
};
