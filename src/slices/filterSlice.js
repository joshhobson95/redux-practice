import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filter: "",
}
//^Reducers are methods that effect the State you are trying to Push around your applicaiton. 
//^In other words a reducers is just a short action or function that you create in order to effect state wherever it is used in you application
//^ In this case Redux is helping us pass whatever is typed into the input for the filter(searchbar), a state known as filter, so that you can search one component that may hold the seachable item, from a different component and/or anywhere else on the site.

//setFilter is the method.
//clearFilter is aswell


export const filterSlice = createSlice({
    name: 'productFilter', 
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        clearFilter: (state) => {
            state.filter = ' '
        }
    },
})

export const {setFilter} = filterSlice.actions
//you can also export actions in order to change state
//.actions is the same keyvalues as reducers..


export default filterSlice.reducer