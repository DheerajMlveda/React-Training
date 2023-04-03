import "./DisplayData.css"

export default function DisplayData ({Employees}){

    return (
      <>
      <h1  style={{textAlign:"center"}}>Employees</h1>
      <div className="data">
        

        {Employees.map((element) => {
          // for (const [key, value] of Object.entries(element)) {
            
            // }
            const status = element.age > 23 ? "Old Employee" : "New Employee";
            return (
              <ul>
              {" "}
              <h2 style={{textTransform:"-moz-initial"}}>{status}</h2>
              <li>name : {element.name}</li>
              <li>age : {element.age}</li>
              <li>email : {element.email}</li>
              <li>password : {element.password}</li>
              <li>gender : {element.gender}</li>
              {/* <li> hobby : <ol>
              
              {element.hobby.map(el => {
                return (
                  <li>{el}</li>   
                  )
                })}
              </ol> </li> */}
              <li>state : {element.state}</li>
            </ul>
          );
        })}
      </div>
        </>
    );
  }



