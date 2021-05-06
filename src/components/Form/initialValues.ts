import TodoModel from "../../models/todo/todo.model";

export const InitialValues = (data: TodoModel) => (
    {
        title:data?.title,
        id:data?.id,
        done:data?.done,
        prior:data?.prior
    }
)