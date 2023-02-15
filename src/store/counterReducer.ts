export interface CounterState{
    data:number;
}
const initalState: CounterState={
    data:42
}
export default function counterReducer(state= initalState, action :any){
    return state
}