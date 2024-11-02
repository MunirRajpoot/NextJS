
import React from 'react'

const EventsStateFunctions = () => {
    const sayHello = (name) => {
        alert(`
            Hello ${name}
        `)
    }
    return (
        <>
            <h1>Events</h1>
            <button onClick={()=>sayHello('munir')}>Click Me</button>
        </>
    )
}

export default EventsStateFunctions
