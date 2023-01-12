import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setFilter } from '../slices/filterSlice';



// for this example we are storing state the could have easliy been stored here, in the Redux store so we can see how to pass data and actions with Redux.

//filter needs to be brought in with useSelector 

//setFilter is an action that needs to be brought in with useDispatch
// ( we import setFilter as a action from the filterSlice)

function Filter() {

   const filter = useSelector((state) => state.productFilter.filter)
   

   const dispatch = useDispatch();

  return (
    <div style={{background: 'blue'}}>
        <input onChange={(e) => dispatch(setFilter(e.target.value))}
        value={filter}
        placeholder="filter by name"
        />
        
        </div>
  )
}

export default Filter