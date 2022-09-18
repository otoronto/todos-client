import React, { useEffect, useState } from 'react'
import { deleteTodo, getTodos, updateTodo } from '../api/todoCalls'
import TodoSubmit from '../components/todo/TodoSubmit'
import TodoModal from '../components/todo/TodoModal'
import moment, { max } from 'moment';
import SideBar from '../components/SideBar';


const TodoPage = props => {

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
    const updateMap = (i, fDate) => {

        setTodos(todos.map(todo => {
            if (todo.id === i) {
                return { ...todo, finishedAt: fDate }

            }
            else
                return todo;
        }))
    }
    const style = {
        backgroundColor:'#E3EAF1'
    }

    return (
        <div className={`d-flex ${props.dark ? 'bg-dark text-white':'bg-light'}`}style={{ height: '90vh' }}>
            <TodoModal todo={selectedTodo} show={show} onHide={handleClose} handleClose={handleClose} updateMap={updateMap} />
            <div className='col-3' style={{ backgroundColor: "#FFFFFF"}} > 
           
                <SideBar dark={props.dark} todos={todos} />
            </div>
            <div className={`col-9  mt-3  ${props.dark && 'bg-dark text-white'}` } style={{ backgroundColor: "#E3EAF1", height: '90vh' }} >
                <div className={`overflow-scroll ${props.dark && 'bg-dark text-info'}`}  style={{ backgroundColor: "#E3EAF1", height: '80vh' }}>
                    {
                        todos?.map((todo, index) => (
                            <div key={todo.id} className='d-flex'  >
                                <div className='me-2 ms-2' onClick={() => onClickIsDone(todo.id)}>


                                    <input type='checkbox' checked={todo.status} readOnly />

                                </div>
                                <div className='col-11' onDoubleClick={() => setEdit(todo)}>
                                    <form className='mb-2 me-3' onSubmit={(e) => onClickUpdate(edit?.id, e)} >

                                        <input className={`col-12 ${todo.id === edit?.id ? 'bg-info' : props.dark ? 'bg-secondary text-light':'bg-white'}`} style={todo.status ? { border: 'none', textDecoration: 'line-through' } : { border: 'none' }}
                                            value={todo.id === edit?.id ? edit.name : todo?.name}
                                            disabled={todo.id !== edit?.id} onChange={e => { setEdit({ id: edit?.id, name: e.target.value }); if (e.key === 'Enter') onClickUpdate(edit?.id) }} autoFocus={true} />
                                        <div className='text-muted date me-2 col-2'>{moment(todo.createdAt).fromNow()} </div>
                                    </form>

                                </div>

                                <div onClick={() => setEdit(todo)}>
                                    <i className='bi bi-pencil me-1 '></i>
                                </div>
                                <div onClick={() => removeTodo(todo.id)}>
                                    <i className='bi bi-trash me-1'></i>
                                </div>
                                <div  >
                                    <i className="bi bi-info-circle" onClick={() => { setSelectedTodo(todo); setShow(true) }} ></i>
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
                <div className='ms-4 border ' style={{ position: 'absolute', bottom: '10px'}}>
                    <TodoSubmit dark= {props.dark} addTodo={addTodo} />
                </div>
            </div>

        </div>
    )
}

export default TodoPage