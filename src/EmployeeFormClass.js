import { Component } from "react";
import "./EmployeeForm.css";
import DisplayError from "./DisplayError";
class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: "",
      password: "",
      hobby: [],
      gender: "",
      state: "",
      error: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.changeDetails = this.changeDetails.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
      hobby: this.state.hobby,
      state: this.state.state,
      gender: this.state.gender,
    });

    console.log(this.state.hobby);
  }

  changeDetails = (event, keyName) => {
    if (event.target.type === "checkbox") {
      console.log(event.target);
    } else {
      let changedKey = event.target.name;
      let changedValue = event.target.value;
      this.setState({
        [keyName || changedKey]:
          keyName === "name" ? changedValue.replaceAll("c", "") : changedValue,
      });
      console.log(changedKey, changedValue);
      console.log(typeof Number(this.state.age));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label type="text" htmlFor="name">
              {" "}
              Name :{" "}
            </label>
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => {
                this.changeDetails(event, "name");
              }}
              id="name"
            />
          </div>
          <DisplayError
            errorMessage="Name should not contain whitespaces"
            error={this.state.name.trim("").includes(" ")}
          />
          <br />
          <div>
            <label type="number" htmlFor="age">
              {" "}
              Age :{" "}
            </label>
            <input
              type="number"
              onChange={this.changeDetails}
              name="age"
              id="age"
            />
          </div>
          <div>
            <DisplayError
              errorMessage="Enter valid age"
              error={Number(this.state.age) > 100 || Number(this.state.age) < 5}
            />
          </div>
          <br />
          <div>
            <label type="email" htmlFor="email">
              {" "}
              Email :{" "}
            </label>
            <input onChange={this.changeDetails} name="email" id="email" />
          </div>
          <DisplayError
            errorMessage="Email should not start with any Digit"
            error={
              this.state.email.trim("").length !== 0 &&
              !this.state.email.match(/^[^0-10]/)
            }
          />

          <br />
          <div>
            <label htmlFor="pwd">Password:</label>
            <input
              autoComplete="off"
              onChange={this.changeDetails}
              type="password"
              id="pwd"
              name="password"
            />
          </div>
          <DisplayError
            errorMessage="Enter some keys"
            error={this.state.password.length < 8}
          />
          <br />
          <div>
            <input
              type="radio"
              id="male"
              onChange={this.changeDetails}
              name="gender"
              value="male"
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
              type="radio"
              id="female"
              onChange={this.changeDetails}
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>
            {/* <DisplayError name="Gender" error={!this.state.gender !== ""} /> */}
            <br />
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              checked={this.state.hobby.includes("Cricket")}
              onChange={(event) => {
                const value = event.target.value;
                const isChecked = event.target.checked;
                this.setState({
                  hobby: isChecked
                    ? [...this.state.hobby, value]
                    : this.state.hobby.filter((element) => element !== value),
                });
              }}
              id="hobby1"
              name="hobby1"
              value="Cricket"
            />
            <label htmlFor="hobby1"> cricket</label>
            <br />
            <input
              type="checkbox"
              checked={this.state.hobby.includes("Movies")}
              onChange={(event) => {
                const value = event.target.value;
                const isChecked = event.target.checked;
                this.setState({
                  hobby: isChecked
                    ? [...this.state.hobby, value]
                    : this.state.hobby.filter((element) => element !== value),
                });
              }}
              id="hobby2"
              name="hobby2"
              value="Movies"
            />
            <label htmlFor="hobby2"> movies</label>
            <br />
            <input
              disabled={this.state.age >= 18}
              type="checkbox"
              checked={this.state.hobby.includes("Animes")}
              onChange={(event) => {
                const value = event.target.value;
                const isChecked = event.target.checked;
                this.setState({
                  hobby: isChecked
                    ? [...this.state.hobby, value]
                    : this.state.hobby.filter((element) => element !== value),
                });
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
            <select onChange={this.changeDetails} name="state" id="state">
              <option value="gujarat">Gujarat</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="punjab">Punjab</option>
            </select>
          </div>
          <br />
          <button id="btn">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default EmployeeForm;
