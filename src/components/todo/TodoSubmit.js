import moment, { now } from 'moment'
import React, { useEffect, useState } from 'react'
import { createTodo } from '../../api/todoCalls'

const TodoSubmit = props => {

    const [name, setName] = useState('')
    const [err, setErr] = useState(false)


    useEffect(() => {
        if(name.length > 2 ) setErr(false)
    },[name])

    const onClickCreate = async () => {
        const body = {
            name,
            createdAt: new Date().getTime(),
            finishedAt: moment().add('1', 'hours').valueOf()

        }
        if(name.length >= 3){
            setErr(false)
            try {
                const resp = await createTodo(body)
                props.addTodo(resp.data)
            } catch (error) {
                
            }
        }

        else{
            setErr(true)
        }
    }

    return (
        <div >
            <div className='d-flex'>
                <div>
                    <input className={`${props.dark?'bg-secondary text-white':'' }`} onChange={event => setName(event.target.value)} />
                </div>
                <div>
                    <button className={`${props.dark?'bg-dark text-info':'' }`} onClick={onClickCreate}>Add</button>
                </div>
            </div>
            {
                err &&
            <label className={`text-danger`}>En az 3 karakter giriniz !</label>
            }
        </div>
    )
}

export default TodoSubmit