import { Component } from "react";
import "./EmployeeForm.css";
class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: "",
      password:"",
      hobby:[],
      gender:"",
      state:"",

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
      hobby:this.state.hobby,
      state: this.state.state,
      gender:this.state.gender
    });

    console.log(this.state.hobby)

  }

  changeDetails = (event, keyName) => {
    if(event.target.type ==="checkbox"){
      console.log(event.target)
    }
      else{

        let changedKey = event.target.name;
        let changedValue = event.target.value;
        this.setState({ [keyName || changedKey]: changedValue });
        console.log(changedKey , changedValue)
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
            onChange={(event) => this.changeDetails(event, "name")}
              id="name"
            />
          </div>
          <br />
          <div>
            <label type="number" htmlFor="age">
              {" "}
              Age :{" "}
            </label>
            <input
              type = 'number'
              onChange={this.changeDetails}
              name="age"
              id="age"
            />
          </div>
          <br />
          <div>
            <label type="email" htmlFor="email">
              {" "}
              Email :{" "}
            </label>
            <input
              onChange={this.changeDetails}
              name="email"
              id="email"
            />
          </div>

          <br />
          <div>
            <label htmlFor="pwd">Password:</label>
            <input autoComplete="off" onChange={this.changeDetails}  type="password" id="pwd" name="password" />
          </div>
          <br />
          <div>
            <input type="radio" id="male" onChange={this.changeDetails} name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" id="female" onChange={this.changeDetails} name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <br />
          </div>
          <br />
          <div>
            <input type="checkbox" checked ={this.state.hobby.includes('Cricket')}onChange={(event) => {const value = event.target.value;const isChecked = event.target.checked;
this.setState({ hobby: isChecked ? [...this.state.hobby, value] : this.state.hobby.filter((element => element !==value)) });}} id="hobby1" name="hobby1" value="Cricket" /> 
            <label htmlFor="hobby1"> cricket</label>
            <br />
            <input type="checkbox" checked ={this.state.hobby.includes('Movies')} onChange={(event) => {const value = event.target.value;const isChecked = event.target.checked;
this.setState({ hobby: isChecked ? [...this.state.hobby, value] : this.state.hobby.filter((element => element !==value)) });}} id="hobby2" name="hobby2" value="Movies" />
            <label htmlFor="hobby2"> movies</label>
            <br />
            <input type="checkbox" checked ={this.state.hobby.includes('Animes')} onChange={(event) => {const value = event.target.value;const isChecked = event.target.checked;
this.setState({ hobby: isChecked ? [...this.state.hobby, value] : this.state.hobby.filter((element => element !==value)) });}}id="hobby3" name="hobby3" value="Animes" />
            <label htmlFor="hobby3"> Animes</label>
          </div>
          <br />
          <div>
          <label htmlFor="state">Your State:</label>

          <select onChange={this.changeDetails} name="state" id="state">
          <option value="gujarat">Gujarat</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="delhi">Delhi</option>
          <option value="punjab">Punjab</option>
</select>
          </div>
          <br/>
          <button id="btn">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default EmployeeForm;
