import EmployeeForm from "./EmployeeFormFun";
import DisplayData from "./DisplayData";
import { useState } from "react";



function App() {

  const [employees, setEmployees] = useState([])

  function onSubmit (data){
    setEmployees([...employees , data ])
  };


    return (
      <div style={{ justifyContent: "center" ,margintop:"33px"}}>
        
        {/* <h1>This is our React App</h1> */}
        <EmployeeForm onSabmit ={onSubmit}/>
        <DisplayData Employees={employees}/>
      </div>
    );
  }


export default App;
