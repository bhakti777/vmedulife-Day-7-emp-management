import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EditEmployeesModal=({showEdit,handleCloseEdit,selectedEmployeeForEdit,handleUpdateState,handleOnChangeEdit})=> {
  console.log(selectedEmployeeForEdit)
  const [employee,setEmployee] = useState({})
  
  useEffect(()=>{
    setEmployee(selectedEmployeeForEdit)
  },[selectedEmployeeForEdit])

  return (
    <>
       <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
              <h6>
                <strong>Edit Employees</strong>
              </h6>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Employee Id
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control disabled defaultValue={employee.employeeId} name="employeeId"/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    First Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter First Name"  name="firstname"
                      value={employee.firstname}  onChange={(e)=> setEmployee({...employee, firstname:e.target.value}) }/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Last Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter Last Name" name="lastname"
                      value={employee.lastname}  onChange={(e)=> setEmployee({...employee, lastname:e.target.value}) }/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Email
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter email"  name="email"
                      value={employee.email}  onChange={(e)=> setEmployee({...employee, email:e.target.value}) }/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={()=>handleUpdateState({...employee})}>
                Update
              </Button>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> 
    </>
  )
}

export default EditEmployeesModal
