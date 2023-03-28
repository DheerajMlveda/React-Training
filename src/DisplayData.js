import { Component } from "react";

class DisplayData extends Component {
  render() {
    return (
      <div>
        <h3>Employees</h3>

        {this.props.employees.map((element) => {
          // for (const [key, value] of Object.entries(element)) {

          // }
          const status = element.age > 23 ? "Old Employee" : "New Employee";
          return (
            <ul>
              {" "}
              {status}
              <li>name : {element.name}</li>
              <li>age : {element.age}</li>
              <li>email : {element.email}</li>
              <li>password : {element.password}</li>
              <li>gender : {element.gender}</li>
              <li> hobby : <ol>
              
              {element.hobby.map(el => {
                return (
                  
                    <li>{el}</li>
                  
                )
              })}


              </ol> </li>
              
              <li>state : {element.state}</li>
              <br />
              <hr />
              <br />
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DisplayData;
