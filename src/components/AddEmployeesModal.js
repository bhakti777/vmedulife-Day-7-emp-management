import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddEmployeesModal=({showAdd,employeeDetails,handleOnChange,handleCloseAdd,handleOnAdd})=> {
  return (
    <>
       <Modal show={showAdd} onHide={handleCloseAdd}>
            <Modal.Header closeButton>
              <h6>
                <strong>Add Employees</strong>
              </h6>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Employee Id
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter your Id"  name="employeeId"
                      value={employeeDetails.employeeId}
                      onChange={handleOnChange}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    First Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter First Name"  name="firstname"
                      value={employeeDetails.firstname}
                      onChange={handleOnChange}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Last Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter Last Name" name="lastname"
                      value={employeeDetails.lastname}
                      onChange={handleOnChange}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="4">
                    Email
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control placeholder="Enter email"   name="email"
                      value={employeeDetails.email}
                      onChange={handleOnChange}/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleOnAdd}>
                Add
              </Button>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> 
    </>
  )
}

export default AddEmployeesModal
