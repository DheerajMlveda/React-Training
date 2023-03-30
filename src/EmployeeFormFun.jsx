import { useState } from "react";
import DisplayError from "./DisplayError";
import "./EmployeeForm.css";

export default function EmployeeForm({onSabmit}) {

  const [name, setName] = useState("");

  const [age, setAge] = useState(0);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [hobby, setHobby] = useState([]);

  const [gender, setGender] = useState("");

  const [state, setState] = useState("gujrat");




  const [nameToggle, setNameToggle] = useState(false);

  const [ageToggle, setAgeToggle] = useState(false);

  const [emailToggle, setEmailToggle] = useState(false);

  const [passwordToggle, setPasswordToggle] =useState(false);

  const [, setHobbyToggle] = useState(false);


  function onSubmit(event) {
    event.preventDefault();
    onSabmit({
        name: name,
        age:  age,
        email:  email,
        password:  password,
        hobby:  hobby,
        state:  state,
        gender:  gender,
    })


}


  return (
    <div style={{marginTop:"33px"}}>
      <form onSubmit={onSubmit}>
        <div>
          <label type="text" htmlFor="name">
            {" "}
            Name :{" "}
          </label>
          <input
            type="text"
            
            onChange={(event) => {
              setNameToggle(true)
              setName(event.target.value);
            }}
            id="name"
          />
        </div>
        <DisplayError
          toggle ={nameToggle}
          errorMessage="Name should not contain whitespaces"
          error={name.trim("").includes(" ")}
        />
        <br />
        <div>
          <label type="number" htmlFor="age">
            {" "}
            Age :{" "}
          </label>
          <input
            type="number"
            onChange={(event) => {
              setAgeToggle(true)
              setAge(event.target.value);
            }}
            name="age"
            id="age"
          />
        </div>
        <div></div>
        <br />
        <DisplayError
        toggle={ageToggle}
          errorMessage="Enter valid age"
          error={Number(age) > 100 || Number(age) < 5}
        />
        <div>
          <label type="email" htmlFor="email">
            {" "}
            Email :{" "}
          </label>
          <input
            onChange={(event) => {
              setEmailToggle(true)
              setEmail(event.target.value);
            }}
            name="email"
            id="email"
          />
        </div>
        <DisplayError
        toggle ={emailToggle}
          errorMessage="Email should not start with any Digit"
          error={email.trim("").length !== 0 && !email.match(/^[^0-10]/)}
        />
        <br />
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            autoComplete="off"
            onChange={(event) => {
              setPasswordToggle(true)
              setPassword(event.target.value);
            }}
            type="password"
            id="pwd"
            name="password"
          />
        </div>
        <DisplayError
        toggle={passwordToggle}
          errorMessage="Enter some keys"
          error={password.length < 8}
        />
        <br />
        <div>
          <input
            type="radio"
            id="male"
            onChange={(event) => {
              setGender(event.target.value);
            }}
            name="gender"
            value="male"
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            onChange={(event) => {
              setGender(event.target.value);
            }}
            name="gender"
            value="female"
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <DisplayError toggle={false}errorMessage="Gender" error={gender === ""} />
        <br />
        <div>
          <input
            type="checkbox"
            checked={hobby.includes("Cricket")}
            onChange={(event) => {
              setHobbyToggle(true)
                const value = event.target.value;
                const isChecked = event.target.checked;
                setHobby((hobby) => isChecked? [...hobby , value]: hobby.filter( element => {return element!==value}) )
              }}
            id="hobby1"
            name="hobby1"
            value="Cricket"
          />
          <label htmlFor="hobby1"> cricket</label>
          <br />
          <input
            type="checkbox"
            checked={hobby.includes("Movies")}
            onChange={(event) => {
              setHobbyToggle(true)
                const value = event.target.value;
                const isChecked = event.target.checked;
                setHobby((hobby) => isChecked? [...hobby , value]: hobby.filter( element => {return element!==value}) )
             }}
            id="hobby2"
            name="hobby2"
            value="Movies"
          />
          <label htmlFor="hobby2"> movies</label>
          <br />
          <input
            disabled={age >= 18}
            type="checkbox"
            checked={hobby.includes("Animes")}
            onChange={(event) => {
              setHobbyToggle(true)
                const value = event.target.value;
                const isChecked = event.target.checked;
                setHobby((hobby) => isChecked? [...hobby , value]: hobby.filter( element => {return element!==value}) )
              }}
            id="hobby3"
            name="hobby3"
            value="Animes"
          />
          <label htmlFor="hobby3"> Animes</label>
        </div>
        <br />
        <div>
            <label htmlFor="state">Your State:</label>
            &nbsp;&nbsp;
            <select onChange={(event) => setState(event.target.value)} name="state" id="state">
              <option value="gujarat">Gujarat</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="punjab">Punjab</option>
            </select>
          </div>
        <button id="btn">Submit</button>
      </form>
      <hr />
    </div>
  );
}
