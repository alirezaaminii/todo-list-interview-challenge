import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Checkbox} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TodoModel from "../../models/todo/todo.model";

interface IProps {
    todo: TodoModel,
    onChange: any,
    onShow: any,
    onRemove: any
}

const useStyles = makeStyles(() => ({
    wrapper: {
        display:"flex",
        justifyContent:"flex-start",
        height:"3rem",
        marginTop:"1rem",
        maxHeight:"max-content",
        alignItems:'center',
        paddingRight:"1rem",
        paddingLeft:".5rem"
    },
    checkbox:{
        margin:"0 1rem"
    },
    flex:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:'center',
        width:"100%",
        borderBottom:"1px solid #727272",
        textAlign:"left",
        paddingBottom:"1rem"
    },
    badge :{
        borderRadius:'2rem',
        backgroundColor:"#727272",
        color:"white",
        marginLeft:".5rem",
        fontSize:"10px",
        minWidth:"1rem",
        minHeight:"1rem",
        display:"inline-flex",
        justifyContent:"center",
        alignItems:"center"
    }
}));

const TodoItem = ({todo, onChange, onRemove, onShow}: IProps) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div>
                <Checkbox
                    checked={todo.done}
                    onChange={() => onChange(todo.id)}
                    className={classes.checkbox}
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </div>

            <div className={classes.flex}>
                <p onClick={()=>onShow(todo)}>
                    {todo.title}

                    {
                        todo.prior && <p className={classes.badge}>{todo.prior}</p>
                    }
                </p>
                <span style={{marginRight: "0.5rem", cursor: "pointer"}} onClick={() => onRemove(todo.id)}>&times;</span>
            </div>
        </div>
    );
};

export default TodoItem;
