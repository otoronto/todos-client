import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment, { updateLocale } from 'moment';
import { Form } from 'react-bootstrap';
import { updateTodo } from '../../api/todoCalls';
import { hydrate } from 'react-dom';

const TodoModal = (props) => {
    const [finishDate, setFinishDate] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const [autoTime, setAutoTime] = useState()




    useEffect(() => {
        if (!props.show) {
            setDate(moment().format('yyyy-MM-DD').toString())
            setTime(moment().add('1', 'hours').format('HH:mm').toString())
        }
    }, [props.show])



    const update = async () => {
        const body = {
            // createdAt: props.todo.createdAt,
            // name: props.todo.name,
            // status: props.todo.status,
            // priority: props.todo.priority,
            // id: props.todo.id,
            ...props.todo,
            finishedAt: moment(date + ' ' + time).valueOf(),
        }
        const resp = await updateTodo(body);
        props.updateMap(resp.data.id, resp.data.finishedAt)
        props.handleClose();
    }


    useEffect(() => {
        setDate(moment().format('yyyy-MM-DD').toString())
        setTime(moment().add('1', 'hours').format('HH:mm').toString())
        return () => {
            setFinishDate();
        }
    }, [])



    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Task Info</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <div className='d-flex '>

                        <div className='col-8 '>
                            {props.todo?.name}
                        </div>
                        <div>
                            <div className="row modal-date">
                                <div style={{ transform: 'scale(0.8)' }} >
                                    <Form.Group controlId="dob">
                                        <Form.Control type="date" value={date} name="dob"
                                            onChange={(e) => {
                                                setDate(e.target.value.toString())
                                            }} />
                                        <Form.Control type="time" value={time} name="dob"
                                            onChange={(e) => {
                                                setTime(e.target.value.toString())

                                            }} />
                                        {/* <Form.Control type="time" name="dob" onChange={(e) => { setFinishDate({ ...props.todo, finishedAt: new Date(e.target.value).getTime() }); }} /> */}
                                    </Form.Group>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' modal-date text-muted d-flex'>

                        <div className='col-8 '>
                            Added at: {moment(props.todo?.createdAt).format('DD/MM/YY hh:mm:ss')}
                        </div>
                        <div className=' ps-3' style={false ? { visibility: 'hidden' } : { visibility: '' }}>
                            Finish by: {moment(props.todo?.finishedAt).format('DD/MM/YY HH:mm')}
                        </div>
                    </div>
                </div>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={update}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default TodoModal