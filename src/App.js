import EmployeeForm from "./EmployeeFormFun";
import DisplayData from "./DisplayData";
import { useState } from "react";
import Input from "./Input";

function App() {
  const initialState = {
    isInvalid: true,
    value: "",
    touched: false,
  };

  const [nameState, setNameState] = useState(initialState);

  const [ageState, setAgeState] = useState(initialState);

  const [passwordState, setPasswordState] = useState(initialState);

  const [emailState, setEmailState] = useState(initialState);

  const [genderState, setGenderState] = useState(initialState);

  const [selectBox, setSelectBox] = useState(initialState);

  // const [favAnimes, setFavAnimes] = useState(initialState)

  const [employees, setEmployees] = useState([]);

  // function onSubmit (data){
  //   setEmployees([...employees , data ])
  // };

  const nameValidator = (name) => {
    const trimmedName = name.trim();

    return trimmedName.length > 5;
  };

  const passwordValidator = (password) => {
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return pattern.test(password);
  };

  const emailValidator = (email) => {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  };

  const ageValidator = (age) => {
    return Number(age) > 5 && Number(age) < 100;
  };

  const genderValidator = (gender) => {
    return gender === "";
  };

  const stateValidator = (state) => {
    return state !== "";
  };

  // const AnimesValidator =( Animes ) =>{
  //   return Animes.length!==0
  // }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmployees([...employees , {
           name : nameState.value,
           age : ageState.value,
           password : passwordState.value,
           state : selectBox.value,
           email : emailState.value,
           gender : genderState.value
          }])
          console.log(employees)
        }
    }
        noValidate
      >
        {/* <h1>This is our React App</h1> */}

        <Input
          state={nameState}
          setState={setNameState}
          name="name"
          type="text"
          label="Name : "
          id="name"
          placeholder="Enter your name"
          isValid={nameValidator}
        />
        <Input
          state={ageState}
          setState={setAgeState}
          name="age"
          type="number"
          label="Age : "
          id="age"
          placeholder="Enter your age"
          isValid={ageValidator}
        />
        <Input
          state={passwordState}
          setState={setPasswordState}
          name="password"
          type="password"
          label="Password : "
          id="password"
          placeholder="Enter your password"
          isValid={passwordValidator}
        />
        <Input
          state={emailState}
          setState={setEmailState}
          name="email"
          type="email"
          label="Email  : "
          id="email"
          placeholder="Enter your email"
          isValid={emailValidator}
        />
        <div>
          <Input
            state={genderState}
            setState={setGenderState}
            name="gender"
            type="radio"
            label="Male"
            id="male"
            isValid={genderValidator}
          />
          <Input
            state={genderState}
            setState={setGenderState}
            name="gender"
            type="radio"
            label="Female"
            id="female"
            isValid={genderValidator}
          />
        </div>
        <div>
          <select
            value={selectBox.value}
            onChange={(e) => {
              setSelectBox({
                value: e.target.value,
                
              });
            }}
            onBlur={(e) => {
              setSelectBox({ ...selectBox, touched: true ,isInvalid: !stateValidator(selectBox.value), });
            }}
          >
            {" "}
            Your state
            <option value="">Select val</option>
            <option value="gujarat">gujarat</option>
            <option value="uttarpradesh">up</option>
            <option value="maharashtra">maharashtra</option>
          </select>
        </div>

        {selectBox.touched && selectBox.isInvalid && (
          <div style={{ color: "red" }}>Invalid option</div>
        )}

        {/* <legend>Choose your favourite anime(s):</legend> */}

        {/* <div>
          <Input 
          state={favAnimes}
          setState={setFavAnimes}
          type = "checkbox"
          id ="attackOnTitan"
          name = "attackOnTitan"
          label="Attack On Titan"
          onChange={({ target: { value } }) => {
            setFavAnimes({
              ...favAnimes,
              value,
              isInvalid:!isValid(value)
            });}}
          />

          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Scales</label>
        </div>

        <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
        </div> */}
        <div>
          <button
            disabled={
              nameState.isInvalid ||
              emailState.isInvalid ||
              passwordState.isInvalid || ageState.isInvalid 
            }  

            type="submit"
            id="btn"
          >
            Submit
          </button>
        </div>
      </form>
      <DisplayData  Employees={employees}/>
    </div>
  );
}

export default App;
