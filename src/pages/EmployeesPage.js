import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EditEmployeesModal from "../components/EditEmployeesModal";
import AddEmployeesModal from "../components/AddEmployeesModal";

const EmployeesPage = () => {
  const initialState = {
    101: {
      isSelected: false,
      employeeId: "101",
      firstname: "Bhakti",
      lastname: "Soman",
      email: "bhakti@gmail.com",
    },
    102: {
      isSelected: false,
      employeeId: "102",
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
  
  
  const handleShowEdit = () =>{
    if(selectedEmp.length > 0){
      
     let [selectedEmployee] = Object.values(employees).filter(item=> item.employeeId == selectedEmp[0])
    
      if(selectedEmployee != undefined){
        setSelectedEmployeeForEdit(selectedEmployee)
        setShowEdit(true);
      }
     
    }
    
  } 
  const handleCloseEdit = () => setShowEdit(false);

  

  const [addShowNewRow, setAddShowNewRow] = useState(false); //new input box row
  const [employees, setEmployees] = useState(initialState); //to add new row employees in table
  const [formState, setFormState] = useState({}); //fetch input value
  const [selectedEmp,setSelectedEmp]=useState([]);

  const [selectedEmployeeForEdit, setSelectedEmployeeForEdit] = useState({});

  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  console.log("formstate=>",formState)

  // const handleOnChangeEdit = (event) => {
  //   setSelectedEmp({ ...selectedEmp, [event.target.name]: event.target.value });
  // };
  console.log("formstate=>",formState)

  const handleOnAdd = () => {
    console.log({ ...employees, formState })

    let employeesData=employees
    let employeeId=formState["employeeId"] //handling object keys 
    employeesData[employeeId]=formState
    setEmployees({ ...employees });
    setFormState("")
    console.log("data",employeesData)
  };
  console.log("employees", employees);

  const onCheckDisplayButtons = (employeeId) => {
   console.log("emp id",employeeId)
   let selectedEmployees = selectedEmp;
   console.log(selectedEmployees);
   console.log(selectedEmployees.includes(employeeId)); 
    if(selectedEmployees.includes(employeeId)){
      // if employee id exists in array then remove  it (i.e uncheck for check box)
      console.log("Uncheck Now")
      selectedEmployees = selectedEmployees.filter(id => id != employeeId);
      console.log(selectedEmployees);
    }else{
      // if employee id is not exists in array then push it (i.e check for check box)
      selectedEmployees.push(employeeId);

    }
    
    setSelectedEmp([...selectedEmployees])
  };
  console.log("selected employee=>",selectedEmp)

  const handleUpdateData=()=>{
    // const employeeClone=Object.values(employees)
    // const updatedData=employeeClone
  }


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

          { selectedEmp.length > 0 && (
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
                  Delete
                </Button>
              </tr>
            )}

           {Object.keys(employees).length>0 && Object.values(employees).map((emp,index)=>{
             return(
               <>
                   


                  <tr key={index}>
                    <td><input
                        type="checkbox"
                        className="checkbox-margin"
                        checked={selectedEmp.includes(emp.employeeId)}
                        onChange={() => onCheckDisplayButtons(emp.employeeId)}
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
            handleCloseEdit={handleCloseEdit} 
            selectedEmployeeForEdit={selectedEmployeeForEdit}
            handleUpdateData={handleUpdateData}
            // handleOnChangeEdit={handleOnChangeEdit}
          />
        </div>
      </div>
    </>
  );
};
export default EmployeesPage;
