export default interface TodoModel {
    title: string,
    id: number,
    done: boolean,
    prior?:number
};
