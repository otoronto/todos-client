import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import {Form} from 'react-bootstrap';

const TodoModal = (props) => {

    const [finishDate, setFinishDate] = useState(0);

    const finishDateUpdate = (date) => {
        setFinishDate(date)
    }
    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Task Info</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <div className='d-flex '>

                        <div className='col-8'>
                            {props.todo?.name}

                        </div>
                        <div>
                            <div className="row modal-date">
                                <div >
                                    <Form.Group controlId="dob">
                                        {/* <Form.Label>Select Date</Form.Label> */}
                                        {console.log(finishDate)}
                                        <Form.Control type="date" name="dob" onChange={e => finishDateUpdate(e.target.value)}/>
                                        {console.log(finishDate)}
                                    </Form.Group>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className=' modal-date text-muted d-flex'>

                    <div className='col-8'>
                        Added at: {moment(props.todo?.createdAt).format('DD/MM/YY hh:mm:ss')}
                    </div>
                    <div className='hidden' style={{ visibility: ''}}>
                        Finish by: {moment(finishDate).format('DD/MM/YY')}
                    </div>
                    </div>
                </div>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default TodoModal