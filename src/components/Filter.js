import React, {useState} from 'react'

function Filter() {

    const [filter, setFilter] = useState("");

  return (
    <div style={{background: 'blue'}}>
        <input onChange={(e) => setFilter(e.target.value)}
        value={filter}
        placeholder="filter by name"
        />
        
        </div>
  )
}

export default Filter