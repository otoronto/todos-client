import { now } from 'moment'
import React, { useState } from 'react'
import { createTodo } from '../../api/todoCalls'

const TodoSubmit = props => {

    const [name, setName] = useState()


    const onClickCreate = async () => {
        const body = {
            name,
            createdAt : new Date().getTime()
            
        }

        try {
            const resp = await createTodo(body)
           props.addTodo(resp.data)
        } catch (error) {

        }
    }

    return (
        <div>
            <input onChange={event => setName(event.target.value)} />
            <button onClick={onClickCreate}>Add</button>
        </div>
    )
}

export default TodoSubmit