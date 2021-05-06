import React from 'react';
import {Formik, Form} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    FormControl,
    FormControlLabel, FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import {ValidationSchema} from "./validation";
import {InitialValues} from "./initialValues";
import TodoModel from "../../models/todo/todo.model";

const useStyles = makeStyles((theme) => ({
    title: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        textAlign: 'left',
        width: '100%',
        lineHeight: "24px",
        color: theme.palette.text.secondary,
        padding: "1rem"
    },
    input: {
        width: '324px',
        margin: "1rem 0"
    },
    label: {
        fontStyle: "normal",
        textAlign: 'left',
        fontWeight: 500,
        fontSize: "14px",
        color: "#000000",
        marginTop: "3rem",
        width: "324px"
    },
    formControl: {
        marginTop: "3rem",
        paddingLeft: "1rem"
    },
    radio: {
        paddingLeft: "2rem",
        marginTop: "3rem"
    },
    button: {
        marginTop: "3rem"
    }
}));

interface IProps {
    onSubmit: any,
    initialValue: TodoModel,
}


const TodoForm = (Props: IProps) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={InitialValues(Props.initialValue)}
            validationSchema={ValidationSchema}
            enableReinitialize
            validateOnChange
            onSubmit={(values, formikHelpers) => {
                console.log(values);
                Props.onSubmit({
                    ...values,
                    done: values.done == "true"
                });
                Props.initialValue.id === 0 && formikHelpers.resetForm();
            }}
        >
            {formik => (
                <Form>
                    <h3 className={classes.title}>{Props.initialValue.id !== 0 ? 'Update' : 'Create'} Task</h3>
                    {console.log(formik.values)}
                    {console.log(JSON.stringify(formik.values.done))}
                    <FormControl error>
                        <TextField value={formik.values.title}
                                   onChange={(event: any)=>formik.setFieldValue('title',event.target.value)}
                                   className={classes.input} id="outlined-basic" label="Title" variant="outlined"/>
                        {
                            formik.errors.title &&
                            <FormHelperText id="component-error-text">{formik.errors.title}</FormHelperText>
                        }
                    </FormControl>

                    <TextField value={formik.values.prior || ""}
                               onChange={(event: any)=>formik.setFieldValue('prior',event.target.value)}
                               className={classes.input} id="outlined-basic" label="Prior" variant="outlined"/>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel className={classes.label} component="legend">Status</FormLabel>
                        <RadioGroup aria-label="done" name="done"
                                    // value={formik.values.done}
                                    value={typeof formik.values.done === "string" ? formik.values.done : JSON.stringify(formik.values.done)}
                                    onChange={formik.handleChange}>
                            <FormControlLabel
                                value={"true"} control={<Radio color="primary"/>} label="Done"/>
                            <FormControlLabel
                                value={"false"} control={<Radio color="primary"/>} label="Todo"/>
                        </RadioGroup>
                    </FormControl>

                    <Button onClick={()=>formik.submitForm()} className={classes.button} variant="contained" color="primary">
                        {Props.initialValue.id !== 0 ? 'Update' : 'Create'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;