import React from "react";
import Head from 'next/head';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainLayout from "../layouts/Main/Main";
import SimpleTabs from "../components/Tab";
import {initializeStore} from '../redux/store';
import * as types from '../constants/actionTypes';
import TodoModel from "../models/todo/todo.model";
import TodoForm from "../components/Form";

interface IProps {
    todos: TodoModel[],
    singleTodo: TodoModel,
    onToggleComplete: any,
    onUpdate: any,
    onCreate: any,
    onShow: any,
    onRemove: any
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "513px"
    }
}));

function Home(Props: IProps) {
    const classes = useStyles();

    return (
        <main>
            <Head>
                <title>Todo List</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Grid container>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <SimpleTabs
                            onShow={(todo: TodoModel) => Props.onShow(todo)}
                            onRemove={(id: number) => Props.onRemove(id)}
                            onToggleComplete={(id: number) => Props.onToggleComplete(id)}
                            todos={Props.todos}/>
                    </Paper>
                </Grid>
                <Grid item xs={6} style={{height: "513px"}}>
                    <Paper className={classes.paper} style={{height: "513px"}}>
                        {
                            Props.singleTodo
                                ? <TodoForm
                                    onSubmit={(values: TodoModel) => Props.onUpdate(values)}
                                    initialValue={Props.singleTodo}/>
                                : <TodoForm
                                    onSubmit={(values: TodoModel) => Props.onCreate(values)}
                                    initialValue={{
                                        title: "",
                                        done: true,
                                        id: 0
                                    }}/>
                        }

                    </Paper>
                </Grid>
            </Grid>
        </main>
    );
}

Home.Layout = MainLayout;

const mapStateToProps = (store: any) => {
    return {
        todos: store.todos.data,
        singleTodo: store.singleTodo,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onToggleComplete: (id: number) => dispatch({
            type: types.TOGGLE_COMPLETE_TODO_SUCCESS,
            payload: id
        }),
        onRemove: (id: number) => dispatch({
            type: types.DELETE_TODO_SUCCESS,
            payload: id
        }),
        onCreate: (id: number) => dispatch({
            type: types.CREATE_TODO_SUCCESS,
            payload: id
        }),
        onShow: (todo: TodoModel) => dispatch({
            type: types.SHOW_TODO_SUCCESS,
            payload: todo
        }),
        onUpdate: (todo: TodoModel) => dispatch({
            type: types.UPDATE_TODO_SUCCESS,
            payload: todo
        })
    };
};


export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    const response: any = await fetch('https://603ca9ecf4333a0017b680f8.mockapi.io/api/v1/tasks');
    const data = await response?.json();


    dispatch({
        type: types.GET_TODO_SUCCESS,
        payload: data?.reverse()
    });
    return {props: {initialReduxState: reduxStore.getState()}};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

