import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TodoModel from "../../models/todo/todo.model";
import TodoItem from "../TodoItem";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{height: "462px", overflow: "auto"}}
            {...other}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto'
    },
    header: {
        backgroundColor: "#6200EE"
    },
    indicator: {
        backgroundColor: "#6200EE"
    }
}));

interface IProps {
    todos: TodoModel[],
    onToggleComplete: any,
    onRemove: any,
    onShow: any,
}

export default function SimpleTabs(Props: IProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleToggleComplete = (id: number) =>
        Props.onToggleComplete(id);


    const handleRemove = (id: number) =>
        Props.onRemove(id);

    const handleShow = (id: number) =>
        Props.onShow(id);


    return (
        <div className={classes.root}>
            <AppBar className={classes.header} position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="All" {...a11yProps(0)} style={{minWidth: "33%"}}/>
                    <Tab label="Done" {...a11yProps(1)} style={{minWidth: "33%"}}/>
                    <Tab label="Todo" {...a11yProps(2)} style={{minWidth: "33%"}}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {
                    Props.todos.map(item => <TodoItem onShow={handleShow} onRemove={handleRemove}
                                                      onChange={handleToggleComplete}
                                                      key={"all_" + item.id} todo={item}/>)
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    Props.todos.filter(item => item.done).map(item => <TodoItem onShow={handleShow}
                                                                                onRemove={handleRemove}
                                                                                onChange={handleToggleComplete}
                                                                                key={"done_" + item.id} todo={item}/>)
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    Props.todos.filter(item => !item.done).map(item => <TodoItem onShow={handleShow}
                                                                                 onRemove={handleRemove}
                                                                                 onChange={handleToggleComplete}
                                                                                 key={"todo_" + item.id} todo={item}/>)
                }
            </TabPanel>
        </div>
    );
}