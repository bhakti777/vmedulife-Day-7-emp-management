import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EditEmployeesModal from "../components/EditEmployeesModal";
import AddEmployeesModal from "../components/AddEmployeesModal";

const EmployeesPage = () => {
  const initialState = {
    101: {
      isSelected: false,
      employeeId: "111",
      firstname: "Bhakti",
      lastname: "Soman",
      email: "bhakti@gmail.com",
    },
    102: {
      isSelected: false,
      employeeId: "112",
      firstname: "Sanika",
      lastname: "Soman",
      email: "sanika@gmail.com",
    },
  };

  //Modal: add ,edit employees
  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  

  const [addShowNewRow, setAddShowNewRow] = useState(false); //new input box row
  const [employees, setEmployees] = useState(initialState); //to add employees in table
  const [formState, setFormState] = useState(""); //fetch input value
  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleOnAdd = () => {
    setEmployees({ ...employees, formState });
    setFormState("")
  };
  console.log("employees", employees);

  const displayButtons = () => {
    setAddShowNewRow(true);
  };




  return (
    <>
      <h5 className="header-margin">
        <strong>Employee Registration :</strong>
        <Button size="sm" className="add-btn-margin" onClick={handleShowAdd} > Add Employees</Button>     
     </h5>

      <div className="set-table-margin">
        <Table striped bordered hover size="sm" className="set-table-margin">
          <thead>
            <tr>
              <th></th>
              <th>Sr.No</th>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>

            {addShowNewRow && (
              <tr>
                <Button
                  variant="secondary"
                  size="sm"
                  className="btn-margin"
                  onClick={handleShowEdit}
                >
                  Edit
                </Button>
                <Button variant="secondary" size="sm" className="btn-margin">
                  {" "}
                  Delete
                </Button>
              </tr>
            )}


           {Object.values(employees).map((emp,index)=>{
             return(
               <>
               <tr>
                <td><input
                    type="checkbox"
                    className="checkbox-margin"
                    onClick={() => displayButtons(true)}
                  />
                </td>
                <td>{index+1}</td>
                <td>{emp.employeeId}</td>
                <td>
                {emp.firstname}
                </td>
                <td>
                  {emp.lastname}
                </td>
                <td>
                  {emp.email}
                </td>
              </tr>

            
               </>
             )
           })}
        
          </tbody>
        </Table>

        <div>
           <AddEmployeesModal 
           showAdd={showAdd} 
           employees={employees}
            handleOnChange={handleOnChange} 
            handleCloseAdd={handleCloseAdd} 
            handleOnAdd={handleOnAdd}
            /> 
         </div>    

        <div>
          <EditEmployeesModal 
          showEdit={showEdit} 
          handleCloseEdit={handleCloseEdit} />
        </div>
      </div>
    </>
  );
};
export default EmployeesPage;
