import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name : 'todos',
    initialState : {
        list : []
    },
    reducers : {
        addTodo : (state , action ) => {
            state.list.psuh(action.payload)
        }
    }
})


export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;