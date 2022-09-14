import React, { useEffect, useState } from 'react'
import { deleteTodo, getTodos, updateTodo } from '../api/todoCalls'
import TodoSubmit from '../components/todo/TodoSubmit'
import TodoModal from '../components/todo/TodoModal'
import moment from 'moment';


const TodoPage = () => {

    const [todos, setTodos] = useState([

    ])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedTodo, setSelectedTodo] = useState()

    const [pendingApi, setPendingApi] = useState(false)

    const [edit, setEdit] = useState();

    const [isDone, setIsDone] = useState();

    useEffect(() => {


        loadTodos()
    }, [])

    const loadTodos = async () => {
        setPendingApi(true)
        try {
            const resp = await getTodos()
            setTodos(resp.data)
            setPendingApi(false)
        } catch (error) {

        }
    }

    const addTodo = (item) => {
        setTodos([...todos, item])
    }

    const removeTodo = async (i) => {
        try {
            await deleteTodo(i)
            setTodos(todos.filter((todo, index) => todo.id !== i))
        } catch (error) {

        }

    }

    const onClickUpdate = async (i, e) => {
        e.preventDefault()
        try {
            const resp = await updateTodo(edit)
            setTodos(todos.map(todo => {
                if (todo.id === i) return edit
                else return todo
            }))
            setEdit()
        } catch (error) {

        }
    }

    const onClickIsDone = async (i) => {

        let x;

        try {
            setTodos(todos.map(todo => {
                if (todo.id === i) {

                    x = { ...todo, status: !todo.status }

                    return x;
                }
                else return todo
            }))
            const resp = await updateTodo(x)

        }
        catch (error) {

        }
    }

    return (
        <div >
            <TodoModal todo={selectedTodo} show={show} onHide={handleClose} handleClose={handleClose}/>
           
            <div className='col-9 border overflow-scroll' style={{height:'400px'}}    >
                {
                    todos?.map((todo, index) => (
                        <div key={todo.id} className='d-flex '  >
                            <div onClick={() => onClickIsDone(todo.id)}>


                                <input type='checkbox' checked={todo.status} readOnly />

                            </div>
                            <div className='col-9 ' onDoubleClick={() => setEdit(todo)}>
                                <form onSubmit={(e) => onClickUpdate(edit?.id, e)}>

                                    <input className={todo.id === edit?.id ? 'bg-info' : 'bg-white '} style={todo.status ? { border: 'none', textDecoration: 'line-through' } : { border: 'none' }}
                                        value={todo.id === edit?.id ? edit.name : todo?.name}
                                        disabled={todo.id !== edit?.id} onChange={e => { setEdit({ id: edit?.id, name: e.target.value }); if (e.key === 'Enter') onClickUpdate(edit?.id) }} autoFocus={true} />
                                </form>

                            </div>
                            {/* <div className='text-muted'> {new Date(todo.createdAt).toString()}</div> */}
                            {/* <div> {new Date().getTime()}</div> */}
                            <div className='text-muted date me-2'>{moment(todo.createdAt).fromNow()} </div>
                            {/* <div>{moment(todo.createdAt).format('MMM dd YYYY')} </div> */}
                            <div onClick={() => setEdit(todo)}>
                                <i className='bi bi-pencil me-1'></i>
                            </div>
                            <div onClick={() => removeTodo(todo.id)}>
                                <i className='bi bi-trash me-1'></i>
                            </div>
                            <div >
                            <i className="bi bi-info-circle" onClick={() => {setSelectedTodo(todo);setShow(true)}} ></i>
                                {/* <TodoModal name={todo.name} /> */}
                            </div>
                            <div>
                                {
                                    todo.id === edit?.id &&
                                    <div onClick={(e) => onClickUpdate(edit?.id, e)}>
                                        <i className="icon bi bi-check2-circle" ></i>
                                    </div>
                                }
                            </div>


                        </div>

                    ))
                }
                {
                    pendingApi
                }

               
            </div>
            <div>
                    <TodoSubmit addTodo={addTodo} />
                </div>
        </div>
    )
}

export default TodoPage